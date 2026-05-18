# import pandas as pd
# import numpy as np

# from sklearn.model_selection import train_test_split
# from sklearn.metrics import accuracy_score, classification_report

# from sklearn.tree import DecisionTreeClassifier
# from sklearn.ensemble import RandomForestClassifier
# from sklearn.svm import SVC

# # =========================
# # 1️⃣ LOAD DATASET
# # =========================
# df = pd.read_csv("dataset/Crop_recommendation.csv")

# # =========================
# # 2️⃣ FEATURES & TARGET
# # =========================
# X = df[['N', 'P', 'K', 'temperature']]
# y = df['label']

# # =========================
# # 3️⃣ TRAIN TEST SPLIT
# # =========================
# X_train, X_test, y_train, y_test = train_test_split(
#     X, y, test_size=0.2, random_state=42
# )

# # =========================
# # 4️⃣ MODELS (NO XGBOOST)
# # =========================
# models = {
#     "Decision Tree": DecisionTreeClassifier(),
#     "Random Forest": RandomForestClassifier(),
#     "SVM": SVC()
# }

# results = []

# # =========================
# # 5️⃣ TRAIN & EVALUATE
# # =========================
# for name, model in models.items():
#     model.fit(X_train, y_train)
#     y_pred = model.predict(X_test)

#     acc = accuracy_score(y_test, y_pred) * 100

#     results.append([name, acc])

#     print(f"\n{name} Classification Report:\n")
#     print(classification_report(y_test, y_pred))

# # =========================
# # 6️⃣ RESULTS TABLE
# # =========================
# results_df = pd.DataFrame(results, columns=["Model", "Accuracy (%)"])

# print("\nFinal Results Table:\n")
# print(results_df)

# # =========================
# # 7️⃣ SAVE RESULTS
# # =========================
# results_df.to_csv("model_results.csv", index=False)





# import pandas as pd
# import numpy as np

# from sklearn.model_selection import train_test_split
# from sklearn.metrics import accuracy_score, mean_absolute_error, mean_squared_error, r2_score
# from sklearn.preprocessing import LabelEncoder

# from sklearn.tree import DecisionTreeClassifier
# from sklearn.ensemble import RandomForestClassifier
# from sklearn.svm import SVC
# from xgboost import XGBClassifier

# # =========================
# # 1️⃣ LOAD DATASET
# # =========================
# df = pd.read_csv("dataset/Crop_recommendation.csv")

# # =========================
# # 2️⃣ ENCODE LABEL (IMPORTANT FOR XGBOOST)
# # =========================
# le = LabelEncoder()
# df['label'] = le.fit_transform(df['label'])

# # =========================
# # 3️⃣ FEATURES & TARGET
# # =========================
# X = df[['N', 'P', 'K', 'temperature']]
# y = df['label']

# # =========================
# # 4️⃣ TRAIN TEST SPLIT
# # =========================
# X_train, X_test, y_train, y_test = train_test_split(
#     X, y, test_size=0.2, random_state=42
# )

# # =========================
# # 5️⃣ MODELS
# # =========================
# models = {
#     "Decision Tree": DecisionTreeClassifier(),
#     "Random Forest": RandomForestClassifier(),
#     "SVM": SVC(),
#     "XGBoost": XGBClassifier(use_label_encoder=False, eval_metric='mlogloss')
# }

# results = []

# # =========================
# # 6️⃣ TRAIN & EVALUATE
# # =========================
# for name, model in models.items():
#     model.fit(X_train, y_train)
#     y_pred = model.predict(X_test)

#     acc = accuracy_score(y_test, y_pred) * 100
#     mae = mean_absolute_error(y_test, y_pred)
#     rmse = np.sqrt(mean_squared_error(y_test, y_pred))
#     r2 = r2_score(y_test, y_pred)

#     results.append([name, acc, mae, rmse, r2])

# # =========================
# # 7️⃣ RESULTS TABLE
# # =========================
# results_df = pd.DataFrame(results, columns=[
#     "Model", "Accuracy (%)", "MAE", "RMSE", "R2 Score"
# ])

# print("\nFinal Results Table:\n")
# print(results_df)

# # =========================
# # 8️⃣ SAVE
# # =========================
# results_df.to_csv("model_results.csv", index=False)


# Final Results Table:

#            Model  Accuracy (%)       MAE      RMSE  R2 Score
# 0  Decision Tree     82.727273  1.215909  3.598927  0.693973
# 1  Random Forest     84.318182  1.013636  3.255066  0.749658
# 2            SVM     66.818182  2.356818  4.780880  0.459955
# 3        XGBoost     85.000000  1.011364  3.272127  0.747027





# import pandas as pd
# import numpy as np

# from sklearn.model_selection import train_test_split
# from sklearn.metrics import accuracy_score, mean_absolute_error, mean_squared_error, r2_score
# from sklearn.preprocessing import LabelEncoder, StandardScaler

# from sklearn.tree import DecisionTreeClassifier
# from sklearn.ensemble import RandomForestClassifier
# from sklearn.svm import SVC
# from xgboost import XGBClassifier

# from tensorflow.keras.models import Sequential
# from tensorflow.keras.layers import Dense

# # =========================
# # 1️⃣ LOAD DATA
# # =========================
# df = pd.read_csv("dataset/Crop_recommendation.csv")

# # =========================
# # 2️⃣ ENCODE LABEL
# # =========================
# le = LabelEncoder()
# df['label'] = le.fit_transform(df['label'])

# # =========================
# # 3️⃣ FEATURES
# # =========================
# X = df[['N', 'P', 'K', 'temperature']]
# y = df['label']

# # =========================
# # 4️⃣ SCALING (IMPORTANT for CNN & SVM)
# # =========================
# scaler = StandardScaler()
# X = scaler.fit_transform(X)

# # =========================
# # 5️⃣ SPLIT
# # =========================
# X_train, X_test, y_train, y_test = train_test_split(
#     X, y, test_size=0.2, random_state=42
# )

# # =========================
# # 6️⃣ ML MODELS
# # =========================
# models = {
#     "Decision Tree": DecisionTreeClassifier(),
#     "Random Forest": RandomForestClassifier(),
#     "SVM": SVC(),
#     # "XGBoost": XGBClassifier(use_label_encoder=False, eval_metric='mlogloss')
# }

# results = []

# # =========================
# # 7️⃣ TRAIN ML MODELS
# # =========================
# for name, model in models.items():
#     model.fit(X_train, y_train)
#     y_pred = model.predict(X_test)

#     acc = accuracy_score(y_test, y_pred) * 100
#     mae = mean_absolute_error(y_test, y_pred)
#     rmse = np.sqrt(mean_squared_error(y_test, y_pred))
#     r2 = r2_score(y_test, y_pred)

#     results.append([name, acc, mae, rmse, r2])

# # =========================
# # 8️⃣ CNN MODEL
# # =========================
# cnn = Sequential([
#     Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
#     Dense(32, activation='relu'),
#     Dense(len(np.unique(y)), activation='softmax')
# ])

# cnn.compile(optimizer='adam',
#             loss='sparse_categorical_crossentropy',
#             metrics=['accuracy'])

# cnn.fit(X_train, y_train, epochs=20, batch_size=16, verbose=0)

# # CNN Prediction
# y_pred_cnn = np.argmax(cnn.predict(X_test), axis=1)

# # Metrics
# acc = accuracy_score(y_test, y_pred_cnn) * 100
# mae = mean_absolute_error(y_test, y_pred_cnn)
# rmse = np.sqrt(mean_squared_error(y_test, y_pred_cnn))
# r2 = r2_score(y_test, y_pred_cnn)

# results.append(["CNN", acc, mae, rmse, r2])

# # =========================
# # 9️⃣ FINAL TABLE
# # =========================
# results_df = pd.DataFrame(results, columns=[
#     "Model", "Accuracy (%)", "MAE", "RMSE", "R2 Score"
# ])

# print("\nFinal Results:\n")
# print(results_df)

# # save
# results_df.to_csv("final_model_results.csv", index=False)



# # Final Results:

# #            Model  Accuracy (%)       MAE      RMSE  R2 Score
# # 0  Decision Tree     82.727273  1.243182  3.659049  0.683663
# # 1  Random Forest     84.090909  1.068182  3.322786  0.739133
# # 2            SVM     81.363636  1.390909  3.917908  0.637321
# # 3        XGBoost     85.000000  1.011364  3.272127  0.747027
# # 4            CNN     82.272727  1.400000  3.937004  0.633777



# # Final Results:

# #            Model  Accuracy (%)       MAE      RMSE  R2 Score
# # 0  Decision Tree     82.272727  1.234091  3.568486  0.699128
# # 1  Random Forest     85.227273  0.995455  3.227721  0.753846
# # 2            SVM     81.363636  1.390909  3.917908  0.637321
# # 3            CNN     81.136364  1.411364  3.917618  0.637375



import pandas as pd
import numpy as np
import matplotlib.pyplot as plt   # ✅ ADD THIS

from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, mean_absolute_error, mean_squared_error, r2_score
from sklearn.preprocessing import LabelEncoder, StandardScaler

from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# =========================
# 1️⃣ LOAD DATA
# =========================
df = pd.read_csv("dataset/Crop_recommendation.csv")

# =========================
# 2️⃣ ENCODE LABEL
# =========================
le = LabelEncoder()
df['label'] = le.fit_transform(df['label'])

# =========================
# 3️⃣ FEATURES
# =========================
X = df[['N', 'P', 'K', 'temperature']]
y = df['label']

# =========================
# 4️⃣ SCALING
# =========================
scaler = StandardScaler()
X = scaler.fit_transform(X)

# =========================
# 5️⃣ SPLIT
# =========================
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# =========================
# 6️⃣ ML MODELS
# =========================
models = {
    "Decision Tree": DecisionTreeClassifier(),
    "Random Forest": RandomForestClassifier(),
    "SVM": SVC()
}

results = []

# =========================
# 7️⃣ TRAIN ML MODELS
# =========================
for name, model in models.items():
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)

    # ✅ GRAPH ONLY FOR BEST MODEL
    if name == "Random Forest":
        plt.figure(figsize=(10,6))
        plt.plot(y_test.values, label='Actual', color='green', marker='o')
        plt.plot(y_pred, label='Predicted', color='red', marker='o')

        plt.title(f"Actual vs Predicted ({name})")
        plt.xlabel("Samples")
        plt.ylabel("Encoded Crop")

        plt.legend()
        plt.grid(True)

        plt.savefig("actual_vs_predicted.png")
        plt.show()

    acc = accuracy_score(y_test, y_pred) * 100
    mae = mean_absolute_error(y_test, y_pred)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    r2 = r2_score(y_test, y_pred)

    results.append([name, acc, mae, rmse, r2])

# =========================
# 8️⃣ CNN MODEL
# =========================
cnn = Sequential([
    Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    Dense(32, activation='relu'),
    Dense(len(np.unique(y)), activation='softmax')
])

cnn.compile(optimizer='adam',
            loss='sparse_categorical_crossentropy',
            metrics=['accuracy'])

cnn.fit(X_train, y_train, epochs=20, batch_size=16, verbose=0)

# CNN Prediction
y_pred_cnn = np.argmax(cnn.predict(X_test), axis=1)

# Metrics
acc = accuracy_score(y_test, y_pred_cnn) * 100
mae = mean_absolute_error(y_test, y_pred_cnn)
rmse = np.sqrt(mean_squared_error(y_test, y_pred_cnn))
r2 = r2_score(y_test, y_pred_cnn)

results.append(["CNN", acc, mae, rmse, r2])

# =========================
# 9️⃣ FINAL TABLE
# =========================
results_df = pd.DataFrame(results, columns=[
    "Model", "Accuracy (%)", "MAE", "RMSE", "R2 Score"
])

print("\nFinal Results:\n")
print(results_df)

# save
results_df.to_csv("final_model_results.csv", index=False)