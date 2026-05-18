# import pandas as pd
# import matplotlib.pyplot as plt

# # load dataset
# df = pd.read_csv("dataset/yield_df.csv")

# # create production
# df['Production'] = df['hg/ha_yield'] / 10000

# # # =========================
# # # 1️⃣ BAR GRAPH (Crop vs Production)
# # # =========================
# crop_prod = df.groupby('Item')['Production'].mean().sort_values(ascending=False)

# plt.figure(figsize=(8,5))
# crop_prod.plot(kind='bar', color='skyblue')

# plt.title("Crop vs Production")
# plt.xlabel("Crop")
# plt.ylabel("Production")

# plt.xticks(rotation=45)
# plt.tight_layout()
# plt.savefig("bar_chart.png")
# plt.show()


# # # =========================
# # # 2️⃣ PIE CHART (Crop Distribution)
# # # =========================
# # plt.figure(figsize=(6,6))
# # crop_prod.head(5).plot(kind='pie', autopct='%1.1f%%')

# # plt.title("Top 5 Crop Distribution")
# # plt.ylabel("")
# # plt.savefig("pie_chart.png")
# # plt.show()


# # # =========================
# # # 3️⃣ LINE CHART (Year-wise Trend)
# # # =========================
# crop_year = df.groupby(['Year', 'Item'])['Production'].sum().unstack()

# crop_year.plot(figsize=(10,6))

# plt.title("Crop Production Year-wise")
# plt.xlabel("Year")
# plt.ylabel("Production")

# plt.tight_layout()
# plt.savefig("line_chart.png")
# plt.show()










# # import pandas as pd
# # import matplotlib.pyplot as plt

# # # load dataset
# # df = pd.read_csv("dataset/Crop_recommendation.csv")

# # # =========================
# # # 1️⃣ PIE CHART (All Crops Distribution)
# # # =========================
# # crop_count = df['label'].value_counts()

# # plt.figure(figsize=(7,7))
# # crop_count.plot(kind='pie', autopct='%1.1f%%')

# # plt.title("Crop Distribution (All Crops)")
# # plt.ylabel("")
# # plt.tight_layout()
# # plt.savefig("pie_crop_distribution.png")
# # plt.show()


# # # =========================
# # # 2️⃣ BAR GRAPH (Crop vs Avg Temperature)
# # # =========================
# # temp_crop = df.groupby('label')['temperature'].mean().sort_values()

# # plt.figure(figsize=(10,5))
# # temp_crop.plot(kind='bar', color='orange')

# # plt.title("Crop vs Average Temperature")
# # plt.xlabel("Crop")
# # plt.ylabel("Temperature")

# # plt.xticks(rotation=45)
# # plt.tight_layout()
# # plt.savefig("bar_temp.png")
# # plt.show()


# # # =========================
# # # 3️⃣ BAR GRAPH (Crop vs Rainfall)
# # # =========================
# # rain_crop = df.groupby('label')['rainfall'].mean().sort_values()

# # plt.figure(figsize=(10,5))
# # rain_crop.plot(kind='bar', color='blue')

# # plt.title("Crop vs Rainfall")
# # plt.xlabel("Crop")
# # plt.ylabel("Rainfall")

# # plt.xticks(rotation=45)
# # plt.tight_layout()
# # plt.savefig("bar_rainfall.png")
# # plt.show()


# # # =========================
# # # 4️⃣ NPK ANALYSIS (Soil Nutrients)
# # # =========================
# # npk = df[['N','P','K']].mean()

# # plt.figure(figsize=(6,4))
# # npk.plot(kind='bar', color=['green','red','blue'])

# # plt.title("Average Soil Nutrients (NPK)")
# # plt.ylabel("Values")
# # plt.tight_layout()
# # plt.savefig("npk_chart.png")
# # plt.show()

import pandas as pd
import matplotlib.pyplot as plt

# load dataset
df = pd.read_csv("dataset/yield_df.csv")

# create production
df['Production'] = df['hg/ha_yield'] / 10000

# =========================
# 1️⃣ BAR GRAPH (HIGH QUALITY)
# =========================
# crop_prod = df.groupby('Item')['Production'].mean().sort_values(ascending=False)

# plt.figure(figsize=(4,3), dpi=300)  # column size
# crop_prod.head(6).plot(kind='bar', color='seagreen', edgecolor='black')

# plt.title("Crop vs Production", fontsize=10)
# plt.xlabel("")
# plt.ylabel("Tons/ha", fontsize=8)
# plt.xticks(rotation=30, fontsize=7)
# plt.yticks(fontsize=7)

# plt.tight_layout()
# plt.savefig("bar_chart.png", dpi=300, bbox_inches='tight')
# plt.show()


# # =========================
# # 2️⃣ PIE CHART (HIGH QUALITY)
# # =========================
# plt.figure(figsize=(4,4), dpi=300)

# crop_prod.head(5).plot(
#     kind='pie',
#     autopct='%1.1f%%',
#     textprops={'fontsize': 7}
# )

# plt.title("Top Crops Distribution", fontsize=10)
# plt.ylabel("")

# plt.tight_layout()
# plt.savefig("pie_chart.png", dpi=300, bbox_inches='tight')
# plt.close()


# # =========================
# # 3️⃣ LINE GRAPH (HIGH QUALITY)
# # =========================
# crop_year = df.groupby(['Year', 'Item'])['Production'].sum().unstack()

# plt.figure(figsize=(4,3), dpi=300)

# crop_year.iloc[:, :3].plot(linewidth=1.5)

# plt.title("Year-wise Production", fontsize=10)
# plt.xlabel("Year", fontsize=8)
# plt.ylabel("Production", fontsize=8)

# plt.xticks(fontsize=7)
# plt.yticks(fontsize=7)
# plt.legend(fontsize=6)

# plt.tight_layout()
# plt.savefig("line_chart.png", dpi=300, bbox_inches='tight')
# plt.show()


# =========================
import pandas as pd
import matplotlib.pyplot as plt

# =========================
# LOAD DATA
# =========================
df = pd.read_csv("dataset/yield_df.csv")

# create production
df['Production'] = df['hg/ha_yield'] / 10000

# =========================
# LINE GRAPH (ALL CROPS)
# =========================
# crop_year = df.groupby(['Year', 'Item'])['Production'].sum().unstack()

# plt.figure(figsize=(6,4), dpi=300)   # size thoda bada (important)

# # 👇 ALL crops plot (no limit like [:3])
# crop_year.plot(linewidth=1.2)

# # titles
# plt.title("Year-wise Production", fontsize=10)
# plt.xlabel("Year", fontsize=8)
# plt.ylabel("Production", fontsize=8)

# # 🔥 FIX (year cut nahi hoga)
# plt.xticks(rotation=45, fontsize=7)
# plt.yticks(fontsize=7)

# # 🔥 LEGEND FIX (bahar nikal diya)
# plt.legend(
#     bbox_to_anchor=(1.02, 1),
#     loc='upper left',
#     fontsize=6
# )

# # layout fix
# plt.tight_layout()

# # save high quality
# plt.savefig("line_chart.png", dpi=300, bbox_inches='tight')

# plt.show()


import pandas as pd
import matplotlib.pyplot as plt

# LOAD DATA
df = pd.read_csv("dataset/yield_df.csv")
df['Production'] = df['hg/ha_yield'] / 10000

# GROUP
crop_year = df.groupby(['Year', 'Item'])['Production'].sum().unstack()

# STYLE IMPROVEMENT (IMPORTANT)
plt.style.use('seaborn-v0_8-whitegrid')

# FIGURE
plt.figure(figsize=(7,4), dpi=400)   # 🔥 higher DPI

# PLOT
crop_year.plot(linewidth=1.5)

# TITLES (bigger fonts = less blur feel)
plt.title("Year-wise Production", fontsize=12, fontweight='bold')
plt.xlabel("Year", fontsize=10)
plt.ylabel("Production (tons)", fontsize=10)

# AXIS TEXT (increase size)
plt.xticks(rotation=45, fontsize=9)
plt.yticks(fontsize=9)

# LEGEND OUTSIDE (clean + readable)
plt.legend(
    bbox_to_anchor=(1.02, 1),
    loc='upper left',
    fontsize=7,
    frameon=False
)

# GRID
plt.grid(True, linestyle='--', alpha=0.5)

# SAVE (VERY IMPORTANT SETTINGS)
plt.tight_layout()
plt.savefig("line_chart_hd.png", dpi=400, bbox_inches='tight', format='png')

plt.show()