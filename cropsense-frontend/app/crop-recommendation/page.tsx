// 'use client';

// import { useState } from 'react';
// import { Navigation } from '@/components/navigation';
// import { FormCard } from '@/components/form-card';
// import { ResultBox } from '@/components/result-box';
// import { LoadingSpinner, LoadingText } from '@/components/loading-spinner';
// import { Leaf, Cloud, Droplets, Wind } from 'lucide-react';

// export default function CropRecommendationPage() {

//   const [formData, setFormData] = useState({
//     nitrogen: '',
//     phosphorus: '',
//     potassium: '',
//     temperature: '',
//     humidity: '',
//     ph: '',
//     rainfall: '',
//   });

//   const [result, setResult] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // ✅ CONNECTED TO FLASK MODEL
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setResult(null);

//     try {
//       const response = await fetch('http://127.0.0.1:5000/predict-crop', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           N: parseFloat(formData.nitrogen),
//           P: parseFloat(formData.phosphorus),
//           K: parseFloat(formData.potassium),
//           temperature: parseFloat(formData.temperature),
//           humidity: parseFloat(formData.humidity),
//           ph: parseFloat(formData.ph),
//           rainfall: parseFloat(formData.rainfall),
//         })
//       });

//       const data = await response.json();

//       if (data.error) {
//         setError(data.error);
//       } else {
//         setResult(data);
//       }

//     } catch (err) {
//       setError('Backend connection error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navigation />

//       <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5 py-12">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//           {/* HEADER */}
//           <div className="mb-12">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                 <Leaf className="text-primary" size={24} />
//               </div>
//               <div>
//                 <h1 className="text-4xl font-bold text-foreground">Crop Recommendation</h1>
//                 <p className="text-muted-foreground mt-1">
//                   Get AI-based crop suggestion from your soil & climate
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//             {/* FORM */}
//             <div>
//               <FormCard
//                 title="Enter Farm Data"
//                 description="Input soil nutrients & weather data"
//               >
//                 <form onSubmit={handleSubmit} className="space-y-6">

//                   {/* NPK */}
//                   <div className="grid grid-cols-3 gap-4">
//                     <input name="nitrogen" placeholder="Nitrogen (N)" onChange={handleChange} required className="input"/>
//                     <input name="phosphorus" placeholder="Phosphorus (P)" onChange={handleChange} required className="input"/>
//                     <input name="potassium" placeholder="Potassium (K)" onChange={handleChange} required className="input"/>
//                   </div>

//                   {/* TEMP HUM PH */}
//                   <div className="grid grid-cols-3 gap-4">
//                     <input name="temperature" placeholder="Temperature °C" onChange={handleChange} required className="input"/>
//                     <input name="humidity" placeholder="Humidity %" onChange={handleChange} required className="input"/>
//                     <input name="ph" placeholder="pH" onChange={handleChange} required className="input"/>
//                   </div>

//                   {/* RAIN */}
//                   <input name="rainfall" placeholder="Rainfall (mm)" onChange={handleChange} required className="input"/>

//                   {error && (
//                     <div className="p-3 bg-red-100 text-red-700 rounded">
//                       {error}
//                     </div>
//                   )}

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full py-3 bg-primary text-white rounded"
//                   >
//                     {loading ? 'Predicting...' : 'Get Recommendation'}
//                   </button>

//                 </form>
//               </FormCard>
//             </div>

//             {/* RESULT */}
//             <div className="flex flex-col gap-6">

//               {loading && (
//                 <div className="p-6 bg-card rounded">
//                   <LoadingSpinner />
//                   <LoadingText />
//                 </div>
//               )}

//               {result && !loading && (
//                 <div className="space-y-6">

//                   {/* MAIN RESULT */}
//                   <ResultBox
//                     title="Recommended Crop"
//                     value={result.recommended_crop || 'N/A'}
//                     highlight={true}
//                     icon={<Leaf size={24} />}
//                   />

//                   {/* ANALYSIS */}
//                   <div className="bg-card p-6 rounded">
//                     <h3 className="font-semibold mb-4">Input Summary</h3>

//                     <div className="space-y-2 text-sm">
//                       <p>🌡 Temp: {formData.temperature}°C</p>
//                       <p>💧 Humidity: {formData.humidity}%</p>
//                       <p>🌧 Rainfall: {formData.rainfall} mm</p>
//                       <p>🧪 pH: {formData.ph}</p>
//                     </div>
//                   </div>

//                 </div>
//               )}

//               {!result && !loading && (
//                 <div className="text-center p-8 bg-card rounded">
//                   <Leaf size={40} className="mx-auto mb-3 opacity-30" />
//                   <p>Enter data to get crop recommendation</p>
//                 </div>
//               )}

//             </div>

//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { FormCard } from "@/components/form-card";
import { ResultBox } from "@/components/result-box";
import { LoadingSpinner, LoadingText } from "@/components/loading-spinner";
import { Leaf } from "lucide-react";

export default function CropRecommendationPage() {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict-crop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          N: parseFloat(formData.nitrogen),
          P: parseFloat(formData.phosphorus),
          K: parseFloat(formData.potassium),
          temperature: parseFloat(formData.temperature),
          humidity: parseFloat(formData.humidity),
          ph: parseFloat(formData.ph),
          rainfall: parseFloat(formData.rainfall),
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
          {/* HEADER */}
          <div className="mb-10 flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <Leaf className="text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Crop Recommendation</h1>
              <p className="text-gray-500">AI-based smart farming suggestion</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* FORM CARD */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h2 className="text-xl font-semibold mb-4">Enter Farm Data</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NPK */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Nitrogen (N)
                    </label>
                    <Input name="nitrogen" onChange={handleChange} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phosphorus (P)
                    </label>
                    <Input name="phosphorus" onChange={handleChange} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Potassium (K)
                    </label>
                    <Input name="potassium" onChange={handleChange} />
                  </div>
                </div>

                {/* TEMP HUM PH */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Temperature (°C)
                    </label>
                    <Input name="temperature" onChange={handleChange} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Humidity (%)
                    </label>
                    <Input name="humidity" onChange={handleChange} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">pH</label>
                    <Input name="ph" onChange={handleChange} />
                  </div>
                </div>

                {/* RAIN */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Rainfall (mm)
                  </label>
                  <Input name="rainfall" onChange={handleChange} />
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
                  {loading ? "Predicting..." : "Get Recommendation"}
                </button>
              </form>
            </div>

            {/* RESULT CARD */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border flex flex-col justify-center">
              {loading && (
                <div className="text-center">
                  <LoadingSpinner />
                  <LoadingText />
                </div>
              )}

              {result && !loading && (
                <>
                  <ResultBox
                    title="Recommended Crop"
                    value={result.recommended_crop || "N/A"}
                    highlight
                    icon={<Leaf />}
                  />

                  <div className="mt-6 bg-gray-50 p-4 rounded-lg text-sm">
                    <p>🌡 Temp: {formData.temperature}°C</p>
                    <p>💧 Humidity: {formData.humidity}%</p>
                    <p>🌧 Rainfall: {formData.rainfall} mm</p>
                    <p>🧪 pH: {formData.ph}</p>
                  </div>
                </>
              )}

              {!result && !loading && (
                <div className="text-center text-gray-400">
                  Enter data to get recommendation
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

/* 🔥 Reusable Input Component */
function Input({ name, placeholder, onChange }: any) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required
      className="w-full px-4 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none transition"
    />
  );
}
