import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder

# =========================
# 1️⃣ LOAD DATA
# =========================
df = pd.read_csv("dataset/yield_df.csv")   # apna file name check karo

# =========================
# 2️⃣ ENCODE CATEGORICAL
# =========================
le_area = LabelEncoder()
le_item = LabelEncoder()

df['Area'] = le_area.fit_transform(df['Area'])
df['Item'] = le_item.fit_transform(df['Item'])

# =========================
# 3️⃣ FEATURES & TARGET
# =========================
X = df[['Area', 'Item', 'Year', 
        'average_rain_fall_mm_per_year', 
        'pesticides_tonnes', 
        'avg_temp']]

y = df['hg/ha_yield']   # 🎯 target

# =========================
# 4️⃣ SPLIT
# =========================
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# =========================
# 5️⃣ MODEL
# =========================
model = RandomForestRegressor(n_estimators=100)
model.fit(X_train, y_train)

# =========================
# 6️⃣ PREDICT
# =========================
y_pred = model.predict(X_test)

# =========================
# 7️⃣ METRICS
# =========================
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)

print("\nModel Performance:")
print("MAE:", mae)
print("RMSE:", rmse)
print("R2 Score:", r2)

# =========================
# 8️⃣ ACTUAL vs PREDICTED GRAPH
# =========================
# plt.figure(figsize=(10,6))

# plt.plot(y_test.values, label='Actual', color='green')
# plt.plot(y_pred, label='Predicted', color='red')

# plt.title("Actual vs Predicted Yield")
# plt.xlabel("Samples")
# plt.ylabel("Yield")

# plt.legend()
# plt.grid(True)

# plt.savefig("yield_graph.png")
# plt.show()

# =========================
# 8️⃣ ACTUAL vs PREDICTED GRAPH (100 samples)
# =========================

# sirf 100 samples lo
y_test_sample = y_test[:1000]
y_pred_sample = y_pred[:1000]

plt.figure(figsize=(10,6))

plt.plot(y_test_sample.values, label='Actual', color='green')
plt.plot(y_pred_sample, label='Predicted', color='red')

plt.title("Actual vs Predicted Yield (100 Samples)")
plt.xlabel("Samples")
plt.ylabel("Yield")

plt.legend()
plt.grid(True)

plt.savefig("yield_graph_clean.png")
plt.show()