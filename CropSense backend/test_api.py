import requests

url = "http://127.0.0.1:5000/predict-yield"

data = {
    "Year": 2020,
    "average_rain_fall_mm_per_year": 1200,
    "pesticides_tonnes": 100,
    "avg_temp": 25
}

response = requests.post(url, json=data)
print(response.json())