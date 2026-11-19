

// "use client";

// import { useState, useEffect } from "react";
// import { Navigation } from "@/components/navigation";
// import { ResultBox } from "@/components/result-box";
// import { LoadingSpinner, LoadingText } from "@/components/loading-spinner";
// import { TrendingUp } from "lucide-react";

// export default function YieldPredictionPage() {
//   const [formData, setFormData] = useState({
//     crop_type: "",
//     nitrogen: "",
//     phosphorus: "",
//     potassium: "",
//     temperature: "",
//     humidity: "",
//     rainfall: "",
//   });

//   const [crops, setCrops] = useState<string[]>([]);
//   const [result, setResult] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // fetch crops
//   useEffect(() => {
//     fetch("http://127.0.0.1:5000/get-items")
//       .then((res) => res.json())
//       .then((data) => {
//         setCrops(data);
//         if (data.length > 0) {
//           setFormData((prev) => ({ ...prev, crop_type: data[0] }));
//         }
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // submit
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("http://127.0.0.1:5000/predict-yield", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           Area: "India",
//           Item: formData.crop_type,
//           Year: 2020,
//           average_rain_fall_mm_per_year: parseFloat(formData.rainfall),
//           pesticides_tonnes: 100,
//           avg_temp: parseFloat(formData.temperature),
//         }),
//       });

//       const data = await response.json();

//       if (data.error) setError(data.error);
//       else setResult(data);
//     } catch {
//       setError("Backend connection error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navigation />

//       <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           {/* HEADER */}
//           <h1 className="text-3xl font-bold mb-8">Yield Prediction</h1>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {/* FORM CARD */}
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               <h2 className="text-xl font-semibold mb-4">Enter Crop Data</h2>

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 {/* DROPDOWN */}
//                 <div>
//                   <label className="text-sm font-medium">Crop Type</label>
//                   <select
//                     name="crop_type"
//                     value={formData.crop_type}
//                     onChange={handleChange}
//                     className="w-full mt-1 px-3 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
//                   >
//                     {crops.map((crop, i) => (
//                       <option key={i} value={crop}>
//                         {crop}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* INPUTS */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Nitrogen
//                     </label>
//                     <Input name="nitrogen" onChange={handleChange} />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Phosphorus
//                     </label>
//                     <Input name="phosphorus" onChange={handleChange} />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Potassium
//                     </label>
//                     <Input name="potassium" onChange={handleChange} />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Temperature (°C)
//                     </label>
//                     <Input name="temperature" onChange={handleChange} />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Humidity (%)
//                     </label>
//                     <Input name="humidity" onChange={handleChange} />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">
//                       Rainfall (mm)
//                     </label>
//                     <Input name="rainfall" onChange={handleChange} />
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="bg-red-100 text-red-600 p-2 rounded text-sm">
//                     {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
//                 >
//                   {loading ? "Predicting..." : "Predict Yield"}
//                 </button>
//               </form>
//             </div>

//             {/* RESULT CARD */}
//             <div className="bg-white shadow-lg rounded-2xl p-6 border flex items-center justify-center">
//               {loading && (
//                 <div className="text-center">
//                   <LoadingSpinner />
//                   <LoadingText />
//                 </div>
//               )}

//               {result && !loading && (
//                 <ResultBox
//                   title="Predicted Yield"
//                   value={`${result.predicted_yield?.toFixed(2)}`}
//                   unit="tons/ha"
//                   highlight
//                   icon={<TrendingUp />}
//                 />
//               )}

//               {!result && !loading && (
//                 <p className="text-gray-400">Enter data to predict yield</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// // reusable input
// function Input({ name, placeholder, onChange }: any) {
//   return (
//     <input
//       name={name}
//       placeholder={placeholder}
//       onChange={onChange}
//       required
//       className="w-full px-3 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
//     />
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { LoadingSpinner, LoadingText } from "@/components/loading-spinner";
import { TrendingUp } from "lucide-react";


export default function YieldPredictionPage() {
  const [formData, setFormData] = useState({
    crop_type: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    rainfall: "",
  });

  const [crops, setCrops] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // fetch crops
  useEffect(() => {
    fetch("http://127.0.0.1:5000/get-items")
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
        if (data.length > 0) {
          setFormData((prev) => ({ ...prev, crop_type: data[0] }));
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/predict-yield", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Area: "India",
          Item: formData.crop_type,
          Year: 2020,
          average_rain_fall_mm_per_year: parseFloat(formData.rainfall),
          pesticides_tonnes: 100,
          avg_temp: parseFloat(formData.temperature),
        }),
      });

      const data = await response.json();

      if (data.error) setError(data.error);
      else setResult(data);
    } catch {
      setError("Backend connection error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
<h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
  <TrendingUp className="w-8 h-8 text-green-600" />
  Yield Prediction
</h1>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* FORM */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h2 className="text-xl font-semibold mb-4">
                Enter Crop Data
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* DROPDOWN */}
                <div>
                  <label className="text-sm font-medium">
                    Crop Type
                  </label>
                  <select
                    name="crop_type"
                    value={formData.crop_type}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
                  >
                    {crops.map((crop, i) => (
                      <option key={i} value={crop}>
                        {crop}
                      </option>
                    ))}
                  </select>
                </div>

                {/* INPUTS */}
                <div className="grid grid-cols-2 gap-4">
                  <Input name="nitrogen" label="Nitrogen" onChange={handleChange} />
                  <Input name="phosphorus" label="Phosphorus" onChange={handleChange} />
                  <Input name="potassium" label="Potassium" onChange={handleChange} />
                  <Input name="temperature" label="Temperature (°C)" onChange={handleChange} />
                  <Input name="humidity" label="Humidity (%)" onChange={handleChange} />
                  <Input name="rainfall" label="Rainfall (mm)" onChange={handleChange} />
                </div>

                {error && (
                  <div className="bg-red-100 text-red-600 p-2 rounded text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
                >
                  {loading ? "Predicting..." : "Predict Yield"}
                </button>
              </form>
            </div>

            {/* RESULT */}
<div className="bg-gradient-to-br from-green-50 to-green-100 shadow-lg rounded-2xl p-6 border border-green-200 flex items-center justify-center">
              {loading && (
                <div className="text-center">
                  <LoadingSpinner />
                  <LoadingText />
                </div>
              )}


              {result && !loading && (
  <div className="w-full p-8 rounded-3xl 
    bg-white/30 backdrop-blur-lg 
    border border-white/40 
    shadow-xl 
    transition-all duration-300 hover:scale-[1.02]">

    {/* TOP */}
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">Predicted Yield</p>

        <h2 className="text-4xl font-bold text-green-800 mt-2">
          {result.predicted_yield?.toFixed(2)}
          <span className="text-lg ml-2 text-gray-700">kg/ha</span>
        </h2>
      </div>

      <div className="bg-green-200/60 backdrop-blur p-4 rounded-full text-2xl shadow-md">
        📈
      </div>
    </div>

    {/* DIVIDER */}
    <div className="border-t border-white/40 mt-6 pt-6" />

    {/* DETAILS */}
    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
      <div className="bg-white/40 p-3 rounded-xl">🌾 Crop: {formData.crop_type}</div>
      <div className="bg-white/40 p-3 rounded-xl">🌧 Rainfall: {formData.rainfall} mm</div>
      <div className="bg-white/40 p-3 rounded-xl">🌡 Temp: {formData.temperature}°C</div>
      <div className="bg-white/40 p-3 rounded-xl">💧 Humidity: {formData.humidity}%</div>
    </div>
  </div>
)}

              {!result && !loading && (
                <p className="text-gray-400">
                  Enter data to predict yield
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// reusable input
function Input({ name, label, onChange }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        name={name}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
      />
    </div>
  );
}