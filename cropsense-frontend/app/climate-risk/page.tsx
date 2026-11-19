




// "use client";

// import { useState } from "react";
// import { Navigation } from "@/components/navigation";
// import { LoadingSpinner, LoadingText } from "@/components/loading-spinner";

// export default function ClimateRiskPage() {
//   const [formData, setFormData] = useState({
//     crop_name: "",
//     temperature: "",
//     humidity: "",
//     rainfall: "",
//     season: "",
//   });

//   const [result, setResult] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setResult(null);

//     try {
//       const res = await fetch("http://127.0.0.1:5000/climate-risk", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           crop_name: formData.crop_name,
//           temperature: Number(formData.temperature),
//           humidity: Number(formData.humidity),
//           rainfall: Number(formData.rainfall),
//           season: formData.season,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || "API Error");

//       setResult(data);
//     } catch {
//       setError("Backend connection failed 🚫");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navigation />

//       <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12">
//         <div className="max-w-6xl mx-auto px-4">

//           <h1 className="text-3xl font-bold mb-8">
//             🌦️ Climate Risk Analysis
//           </h1>

//           <div className="grid lg:grid-cols-2 gap-8">

//             {/* FORM */}
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               <h2 className="text-xl font-semibold mb-4">
//                 Enter Climate Details
//               </h2>

//               <form onSubmit={handleSubmit} className="space-y-5">

//                 {/* Crop */}
//                 <div>
//                   <label className="text-sm font-medium">Crop Name</label>
//                   <input
//                     name="crop_name"
//                     value={formData.crop_name}
//                     onChange={handleChange}
//                     className="w-full mt-1 px-3 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
//                     required
//                   />
//                 </div>

//                 {/* Season */}
//                 <div>
//                   <label className="text-sm font-medium">Season</label>
//                   <select
//                     name="season"
//                     value={formData.season}
//                     onChange={handleChange}
//                     className="w-full mt-1 px-3 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
//                     required
//                   >
//                     <option value="">Select Season</option>
//                     <option value="Summer">Summer</option>
//                     <option value="Winter">Winter</option>
//                     <option value="Monsoon">Monsoon</option>
//                   </select>
//                 </div>

//                 {/* Inputs */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <Input label="Temperature (°C)" name="temperature" onChange={handleChange} />
//                   <Input label="Humidity (%)" name="humidity" onChange={handleChange} />
//                   <Input label="Rainfall (mm)" name="rainfall" onChange={handleChange} />
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
//                   {loading ? "Analyzing..." : "Analyze Risk"}
//                 </button>
//               </form>
//             </div>

//             {/* RESULT */}
//             <div className="bg-white shadow-lg rounded-2xl p-6 border flex flex-col justify-center">

//               {loading && (
//                 <div className="text-center">
//                   <LoadingSpinner />
//                   <LoadingText />
//                 </div>
//               )}

//               {result && !loading && (
//                 <div className="space-y-4">

//                   <h2 className="text-xl font-bold">
//                     🌾 Crop: {result.crop}
//                   </h2>

//                   <p>🌦️ Season: {result.season}</p>

//                   <p className="text-lg font-semibold text-green-700">
//                     ⚠️ Risk Level: {result.risk_level}
//                   </p>

//                   <p>📉 Yield Loss: {result.yield_loss_percent}%</p>
//                   <p>🌾 Predicted Yield: {result.predicted_yield}%</p>

//                   <div>
//                     <h3 className="font-semibold mt-3">🚨 Risk Factors:</h3>
//                     <ul className="list-disc ml-5">
//                       {result.risk_factors?.map((f: string, i: number) => (
//                         <li key={i}>{f}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="bg-green-50 p-3 rounded border">
//                     🧠 <strong>Analysis:</strong> {result.analysis}
//                   </div>

//                 </div>
//               )}

//               {!result && !loading && (
//                 <p className="text-gray-400 text-center">
//                   Enter data to analyze climate risk
//                 </p>
//               )}
//             </div>

//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// // reusable input
// function Input({ label, name, onChange }: any) {
//   return (
//     <div>
//       <label className="block text-sm font-medium mb-1">{label}</label>
//       <input
//         name={name}
//         onChange={onChange}
//         required
//         className="w-full px-3 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
//       />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { LoadingSpinner, LoadingText } from "@/components/loading-spinner";

export default function ClimateRiskPage() {
  const [formData, setFormData] = useState({
    crop_name: "",
    temperature: "",
    humidity: "",
    rainfall: "",
    season: "",
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("http://127.0.0.1:5000/climate-risk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          crop_name: formData.crop_name,
          temperature: Number(formData.temperature),
          humidity: Number(formData.humidity),
          rainfall: Number(formData.rainfall),
          season: formData.season,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "API Error");

      setResult(data);
    } catch {
      setError("Backend connection failed 🚫");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12">
        <div className="max-w-6xl mx-auto px-4">

          <h1 className="text-3xl font-bold mb-8">
            🌦️ Climate Risk Analysis
          </h1>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* LEFT FORM */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h2 className="text-xl font-semibold mb-4">
                Enter Climate Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Crop */}
                <div>
                  <label className="text-sm font-medium">Crop Name</label>
                  <input
                    name="crop_name"
                    value={formData.crop_name}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
                    required
                  />
                </div>

                {/* Season */}
                <div>
                  <label className="text-sm font-medium">Season</label>
                  <select
                    name="season"
                    value={formData.season}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
                    required
                  >
                    <option value="">Select Season</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    <option value="Monsoon">Monsoon</option>
                  </select>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Temperature (°C)" name="temperature" onChange={handleChange} />
                  <Input label="Humidity (%)" name="humidity" onChange={handleChange} />
                  <Input label="Rainfall (mm)" name="rainfall" onChange={handleChange} />
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
                  {loading ? "Analyzing..." : "Analyze Risk"}
                </button>
              </form>
            </div>

            {/* RIGHT RESULT */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border flex flex-col justify-center">

              {loading && (
                <div className="text-center">
                  <LoadingSpinner />
                  <LoadingText />
                </div>
              )}

              {result && !loading && (
                <div className="space-y-4">

                  {/* ✅ FIXED PART */}
                  <h2 className="text-xl font-bold">
                    🌾 Crop: {result.crop}
                  </h2>

                  <p>🌦️ Season: {result.season}</p>

                  <p className="text-lg font-semibold text-green-700">
                    ⚠️ Risk Level: {result.risk_level}
                  </p>

                  <p>📉 Yield Loss: {result.yield_loss_percent}%</p>
                  <p>🌾 Predicted Yield: {result.predicted_yield}%</p>

                  <div>
                    <h3 className="font-semibold mt-3">🚨 Risk Factors:</h3>
                    <ul className="list-disc ml-5">
                      {result.risk_factors?.map((f: string, i: number) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-3 rounded border">
                    🧠 <strong>Analysis:</strong> {result.analysis}
                  </div>

                </div>
              )}

              {!result && !loading && (
                <p className="text-gray-400 text-center">
                  Enter data to analyze climate risk
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
function Input({ label, name, onChange }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        name={name}
        onChange={onChange}
        required
        className="w-full px-3 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
      />
    </div>
  );
}