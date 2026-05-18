

from dotenv import load_dotenv
import os
from openai import OpenAI


from flask import Flask, request, jsonify
import pandas as pd
import pickle
from flask_cors import CORS

# new 

import tensorflow as tf
import numpy as np
import json
from tensorflow.keras.preprocessing import image


# =========================
#  ENV + OPENAI
# =========================
load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)
# client = OpenAI(
#     api_key="YOUR_GROQ_API_KEY",
#     base_url="https://api.groq.com/openai/v1"
# )

# =========================
#  FLASK APP
# =========================
app = Flask(__name__)
CORS(app)

# =========================
#  LOAD MODELS
# =========================
yield_model = pickle.load(open("yield_model.pkl", "rb"))
crop_model = pickle.load(open("crop_model.pkl", "rb"))
area_encoder = pickle.load(open("area_encoder.pkl", "rb"))
item_encoder = pickle.load(open("item_encoder.pkl", "rb"))


# =========================
#  LOAD DISEASE MODEL
# =========================
disease_model = tf.keras.models.load_model("disease_model.h5")

with open("class_names.json", "r") as f:
    class_names = json.load(f)



# =========================
#  LOAD DATA
# =========================
price_data = pd.read_csv("dataset/crop_prices.csv")

# =========================
#  HELPER FUNCTIONS
# =========================
def calculate_profit(crop, predicted_yield):
    row = price_data[price_data["crop"] == crop]
    if row.empty:
        return None
    price = row["price"].values[0]
    return predicted_yield * price


def climate_risk(temp, rainfall, humidity):
    if temp > 35 or rainfall < 50:
        return "High Risk"
    elif 25 <= temp <= 35 and 50 <= rainfall <= 200:
        return "Medium Risk"
    else:
        return "Low Risk"

# =========================
#  HOME
# =========================
@app.route("/")
def home():
    return "API is running 🚀"

# =========================
#  GET ITEMS
# =========================
@app.route("/get-items", methods=["GET"])
def get_items():
    return jsonify(list(item_encoder.classes_))

# =========================
#  CROP PREDICTION
# =========================
@app.route("/predict-crop", methods=["POST"])
def predict_crop():
    try:
        data = request.json

        input_data = pd.DataFrame([{
            "N": data["N"],
            "P": data["P"],
            "K": data["K"],
            "temperature": data["temperature"],
            "humidity": data["humidity"],
            "ph": data["ph"],
            "rainfall": data["rainfall"]
        }])

        prediction = crop_model.predict(input_data)

        return jsonify({
            "recommended_crop": prediction[0]
        })

    except Exception as e:
        return jsonify({"error": str(e)})

# =========================
#  YIELD PREDICTION
# =========================
@app.route("/predict-yield", methods=["POST"])
def predict_yield():
    try:
        data = request.json

        if data.get("Area") not in area_encoder.classes_:
            return jsonify({"error": "Invalid Area"})

        if data.get("Item") not in item_encoder.classes_:
            return jsonify({"error": "Invalid Item"})

        area = area_encoder.transform([data["Area"]])[0]
        item = item_encoder.transform([data["Item"]])[0]

        input_data = pd.DataFrame([{
            "Area": area,
            "Item": item,
            "Year": data["Year"],
            "average_rain_fall_mm_per_year": data["average_rain_fall_mm_per_year"],
            "pesticides_tonnes": data["pesticides_tonnes"],
            "avg_temp": data["avg_temp"]
        }])

        prediction = yield_model.predict(input_data)

        return jsonify({
            "predicted_yield": float(prediction[0])
        })

    except Exception as e:
        return jsonify({"error": str(e)})

# =========================
#  PROFIT
# =========================
@app.route("/predict-profit", methods=["POST"])
def predict_profit():
    try:
        data = request.json

        predicted_yield = float(data.get("predicted_yield", 0))
        market_price = float(data.get("market_price", 0))

        seed_cost = float(data.get("seed_cost", 0))
        fertilizer_cost = float(data.get("fertilizer_cost", 0))
        labor_cost = float(data.get("labor_cost", 0))
        pesticide_cost = float(data.get("pesticide_cost", 0))

        total_cost = seed_cost + fertilizer_cost + labor_cost + pesticide_cost
        revenue = predicted_yield * market_price
        profit = revenue - total_cost

        return jsonify({
            "estimated_profit": profit,
            "total_cost": total_cost,
            "revenue": revenue
        })

    except Exception as e:
        return jsonify({"error": str(e)})

# =========================
#  CLIMATE RISK
# =========================
# @app.route("/climate-risk", methods=["POST"])
# def climate_risk_analysis():
#     try:
#         data = request.json

#         temp = data["temperature"]
#         rainfall = data["rainfall"]
#         humidity = data["humidity"]

#         risk = climate_risk(temp, rainfall, humidity)

#         return jsonify({
#             "risk_level": risk
#         })

#     except Exception as e:
#         return jsonify({"error": str(e)})

@app.route("/climate-risk", methods=["POST"])
def climate_risk_analysis():
    try:
        data = request.json

        crop = data.get("crop_name")
        season = data.get("season")
        temp = data.get("temperature")
        rainfall = data.get("rainfall")
        humidity = data.get("humidity")

        # simple logic
        loss = 0
        factors = []

        if temp > 35:
            loss += 25
            factors.append("High temperature")
        if rainfall < 50:
            loss += 30
            factors.append("Low rainfall")
        if humidity > 85:
            loss += 15
            factors.append("High humidity")

        predicted_yield = 100 - loss

        if loss > 50:
            risk_level = "High Risk"
        elif loss > 25:
            risk_level = "Medium Risk"
        else:
            risk_level = "Low Risk"

        return jsonify({
            "crop": crop,
            "season": season,
            "risk_level": risk_level,
            "yield_loss_percent": loss,
            "predicted_yield": predicted_yield,
            "risk_factors": factors,
            "analysis": f"{crop} may lose {loss}% yield due to climate"
        })

    except Exception as e:
        return jsonify({"error": str(e)})
    

# =========================
#  DISEASE DETECTION
# =========================
@app.route("/predict-disease", methods=["POST"])
def predict_disease():
    try:
        file = request.files['file']
        file_path = "temp.jpg"
        file.save(file_path)

        img = image.load_img(file_path, target_size=(224,224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0) / 255.0

        prediction = disease_model.predict(img_array)
        result = class_names[np.argmax(prediction)]

        return jsonify({
            "disease": result
        })

    except Exception as e:
        return jsonify({"error": str(e)})
    
    



@app.route("/chatbot", methods=["POST"])
def chatbot():
    try:
        user_msg = request.form.get("message")
        file = request.files.get("file")

        disease_result = ""

        # IMAGE DETECTION
        if file:
            file_path = "temp_chat.jpg"
            file.save(file_path)

            img = image.load_img(file_path, target_size=(224,224))
            img_array = image.img_to_array(img)
            img_array = np.expand_dims(img_array, axis=0) / 255.0

            prediction = disease_model.predict(img_array)
            disease_result = class_names[np.argmax(prediction)]

        #  AI PROMPT
        prompt = f"""
        User message: {user_msg}
        Detected disease: {disease_result}

        Give simple farming advice.
        """

        response = client.chat.completions.create(
            model="meta-llama/llama-3-8b-instruct",
            messages=[
                {"role": "system", "content": "You are an agriculture expert."},
                {"role": "user", "content": prompt}
            ]
        )

        return jsonify({
            "reply": response.choices[0].message.content,
            "disease": disease_result
        })

    except Exception as e:
        return jsonify({"error": str(e)})

        return jsonify({
            "reply": response.output_text
        })

    except Exception as e:
        return jsonify({"error": str(e)})

# =========================
#  RUN SERVER
# =========================
if __name__ == "__main__":
    app.run(debug=True)