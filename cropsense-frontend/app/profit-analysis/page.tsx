// // 'use client';

// // import { useState } from 'react';
// // import { Navigation } from '@/components/navigation';
// // import { FormCard } from '@/components/form-card';
// // import { ResultBox } from '@/components/result-box';
// // import { LoadingSpinner, LoadingText } from '@/components/loading-spinner';
// // import { BarChart3, AlertCircle, TrendingUp, Percent } from 'lucide-react';

// // export default function ProfitAnalysisPage() {
// //   const [formData, setFormData] = useState({
// //     crop_name: '',
// //     area: '',
// //     yield: '',
// //     market_price: '',
// //     seed_cost: '',
// //     fertilizer_cost: '',
// //     labor_cost: '',
// //     water_cost: '',
// //     pesticide_cost: '',
// //   });
// //   const [result, setResult] = useState<any>(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');

// //   const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');
    
// //     try {
// //       const response = await fetch('http://127.0.0.1:5000/profit_analysis', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({
// //           crop_name: formData.crop_name,
// //           area: parseFloat(formData.area),
// //           yield: parseFloat(formData.yield),
// //           market_price: parseFloat(formData.market_price),
// //           seed_cost: parseFloat(formData.seed_cost),
// //           fertilizer_cost: parseFloat(formData.fertilizer_cost),
// //           labor_cost: parseFloat(formData.labor_cost),
// //           water_cost: parseFloat(formData.water_cost),
// //           pesticide_cost: parseFloat(formData.pesticide_cost),
// //         })
// //       });

// //       if (!response.ok) throw new Error('Failed to analyze profit');
// //       const data = await response.json();
// //       setResult(data);
// //     } catch (err) {
// //       setError('Error analyzing profit. Please check your connection.');
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const totalCost = (parseFloat(formData.seed_cost) || 0) + (parseFloat(formData.fertilizer_cost) || 0) + 
// //                     (parseFloat(formData.labor_cost) || 0) + (parseFloat(formData.water_cost) || 0) + 
// //                     (parseFloat(formData.pesticide_cost) || 0);
// //   const totalRevenue = (parseFloat(formData.yield) || 0) * (parseFloat(formData.market_price) || 0);
// //   const netProfit = totalRevenue - totalCost;
// //   const profitMargin = totalCost > 0 ? ((netProfit / totalRevenue) * 100) : 0;

// //   return (
// //     <>
// //       <Navigation />
// //       <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5 py-12">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //             {/* Form Column */}
// //             <div>
// //               <FormCard
// //                 title="Profit Analysis"
// //                 description="Calculate profitability of your crop based on market price and costs"
// //               >
// //                 <form onSubmit={handleSubmit} className="space-y-6">
// //                   <div>
// //                     <label className="block text-sm font-medium text-foreground mb-2">
// //                       Crop Name
// //                     </label>
// //                     <select
// //                       name="crop_name"
// //                       value={formData.crop_name}
// //                       onChange={handleChange}
// //                       required
// //                       className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground"
// //                     >
// //                       <option value="">Select crop</option>
// //                       <option value="Rice">Rice</option>
// //                       <option value="Wheat">Wheat</option>
// //                       <option value="Corn">Corn</option>
// //                       <option value="Cotton">Cotton</option>
// //                       <option value="Sugarcane">Sugarcane</option>
// //                     </select>
// //                   </div>

// //                   <div className="grid grid-cols-2 gap-4">
// //                     <div>
// //                       <label className="block text-sm font-medium text-foreground mb-2">
// //                         Area (hectares)
// //                       </label>
// //                       <input
// //                         type="number"
// //                         name="area"
// //                         value={formData.area}
// //                         onChange={handleChange}
// //                         step="0.1"
// //                         required
// //                         placeholder="5"
// //                         className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium text-foreground mb-2">
// //                         Expected Yield (kg)
// //                       </label>
// //                       <input
// //                         type="number"
// //                         name="yield"
// //                         value={formData.yield}
// //                         onChange={handleChange}
// //                         step="0.1"
// //                         required
// //                         placeholder="5000"
// //                         className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-medium text-foreground mb-2">
// //                       Market Price (₹/kg)
// //                     </label>
// //                     <input
// //                       type="number"
// //                       name="market_price"
// //                       value={formData.market_price}
// //                       onChange={handleChange}
// //                       step="0.1"
// //                       required
// //                       placeholder="25"
// //                       className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground"
// //                     />
// //                   </div>

// //                   <div className="border-t border-border pt-6">
// //                     <h3 className="font-semibold text-foreground mb-4">Production Costs</h3>
                    
// //                     <div className="grid grid-cols-2 gap-4">
// //                       <div>
// //                         <label className="block text-sm font-medium text-foreground mb-2">
// //                           Seed Cost (₹)
// //                         </label>
// //                         <input
// //                           type="number"
// //                           name="seed_cost"
// //                           value={formData.seed_cost}
// //                           onChange={handleChange}
// //                           step="0.1"
// //                           required
// //                           placeholder="2000"
// //                           className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label className="block text-sm font-medium text-foreground mb-2">
// //                           Fertilizer Cost (₹)
// //                         </label>
// //                         <input
// //                           type="number"
// //                           name="fertilizer_cost"
// //                           value={formData.fertilizer_cost}
// //                           onChange={handleChange}
// //                           step="0.1"
// //                           required
// //                           placeholder="8000"
// //                           className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground"
// //                         />
// //                       </div>
// //                     </div>

// //                     <div className="grid grid-cols-2 gap-4 mt-4">
// //                       <div>
// //                         <label className="block text-sm font-medium text-foreground mb-2">
// //                           Labor Cost (₹)
// //                         </label>
// //                         <input
// //                           type="number"
// //                           name="labor_cost"
// //                           value={formData.labor_cost}
// //                           onChange={handleChange}
// //                           step="0.1"
// //                           required
// //                           placeholder="10000"
// //                           className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label className="block text-sm font-medium text-foreground mb-2">
// //                           Water Cost (₹)
// //                         </label>
// //                         <input
// //                           type="number"
// //                           name="water_cost"
// //                           value={formData.water_cost}
// //                           onChange={handleChange}
// //                           step="0.1"
// //                           required
// //                           placeholder="3000"
// //                           className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground"
// //                         />
// //                       </div>
// //                     </div>

// //                     <div className="mt-4">
// //                       <label className="block text-sm font-medium text-foreground mb-2">
// //                         Pesticide Cost (₹)
// //                       </label>
// //                       <input
// //                         type="number"
// //                         name="pesticide_cost"
// //                         value={formData.pesticide_cost}
// //                         onChange={handleChange}
// //                         step="0.1"
// //                         required
// //                         placeholder="2000"
// //                         className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground"
// //                       />
// //                     </div>
// //                   </div>

// //                   <button
// //                     type="submit"
// //                     disabled={loading}
// //                     className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
// //                   >
// //                     {loading ? 'Analyzing...' : 'Analyze Profit'}
// //                   </button>
// //                 </form>
// //               </FormCard>
// //             </div>

// //             {/* Results Column */}
// //             <div className="flex flex-col gap-6">
// //               {loading && (
// //                 <div className="bg-card border border-border rounded-xl p-8">
// //                   <LoadingSpinner />
// //                   <div className="mt-4 text-center">
// //                     <LoadingText />
// //                   </div>
// //                 </div>
// //               )}

// //               {error && (
// //                 <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-destructive">
// //                   <div className="flex items-start gap-3">
// //                     <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
// //                     <p className="font-medium">{error}</p>
// //                   </div>
// //                 </div>
// //               )}

// //               {result && !loading && (
// //                 <div className="space-y-6">
// //                   <ResultBox
// //                     title="Total Revenue"
// //                     value={totalRevenue.toFixed(0)}
// //                     unit="₹"
// //                     highlight={true}
// //                     icon={<TrendingUp size={24} className="text-primary" />}
// //                   />
                  
// //                   <div className="grid grid-cols-2 gap-4">
// //                     <ResultBox
// //                       title="Total Cost"
// //                       value={totalCost.toFixed(0)}
// //                       unit="₹"
// //                       icon={<BarChart3 size={20} className="text-secondary" />}
// //                     />
// //                     <ResultBox
// //                       title="Net Profit"
// //                       value={netProfit.toFixed(0)}
// //                       unit="₹"
// //                       icon={<Percent size={20} className={netProfit >= 0 ? 'text-green-600' : 'text-destructive'} />}
// //                     />
// //                   </div>

// //                   <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
// //                     <h3 className="font-semibold text-foreground mb-4">Financial Breakdown</h3>
// //                     <div className="space-y-3">
// //                       <div className="flex justify-between items-center text-sm">
// //                         <span className="text-muted-foreground">Revenue per unit</span>
// //                         <span className="font-medium text-foreground">₹{(parseFloat(formData.market_price) || 0).toFixed(2)}/kg</span>
// //                       </div>
// //                       <div className="flex justify-between items-center text-sm border-t border-primary/20 pt-3">
// //                         <span className="text-muted-foreground">Profit Margin</span>
// //                         <span className={`font-medium ${profitMargin >= 0 ? 'text-green-600' : 'text-destructive'}`}>
// //                           {profitMargin.toFixed(1)}%
// //                         </span>
// //                       </div>
// //                       <div className="flex justify-between items-center text-sm border-t border-primary/20 pt-3">
// //                         <span className="text-muted-foreground">Cost per hectare</span>
// //                         <span className="font-medium text-foreground">₹{(totalCost / (parseFloat(formData.area) || 1)).toFixed(0)}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {!result && !loading && !error && (
// //                 <div className="bg-card border border-border rounded-xl p-8 text-center">
// //                   <BarChart3 size={40} className="text-primary/30 mx-auto mb-4" />
// //                   <p className="text-muted-foreground">Fill in your farm data to analyze profit</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </>
// //   );
// // }


// 'use client';

// import { useState } from 'react';
// import { Navigation } from '@/components/navigation';
// import { FormCard } from '@/components/form-card';
// import { ResultBox } from '@/components/result-box';
// import { LoadingSpinner, LoadingText } from '@/components/loading-spinner';
// import { BarChart3, AlertCircle, TrendingUp, Percent } from 'lucide-react';
// import { DollarSign } from "lucide-react";

// export default function ProfitAnalysisPage() {
//   const [formData, setFormData] = useState({
//     crop_name: '',
//     yield: '',
//     market_price: '',
//     seed_cost: '',
//     fertilizer_cost: '',
//     labor_cost: '',
//     pesticide_cost: '',
//   });

//   const [result, setResult] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setResult(null);

//     try {
//       const response = await fetch('http://127.0.0.1:5000/predict-profit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           crop: formData.crop_name,
//           predicted_yield: parseFloat(formData.yield),
//           market_price: parseFloat(formData.market_price),

//           seed_cost: parseFloat(formData.seed_cost),
//           fertilizer_cost: parseFloat(formData.fertilizer_cost),
//           labor_cost: parseFloat(formData.labor_cost),
//           pesticide_cost: parseFloat(formData.pesticide_cost),
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.error);

//       setResult(data);
//     } catch (err) {
//       setError('Error analyzing profit. Check backend.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navigation />

//       <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5 py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-8">
            

//             {/* FORM */}
//             <div>
//               <FormCard title="" description="Calculate farmer profit">

//                 <form onSubmit={handleSubmit} className="space-y-6">

//                   {/* Crop */}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Crop Name</label>
//                     <select
//                       name="crop_name"
//                       value={formData.crop_name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-2 border rounded-lg"
//                     >
//                       <option value="">Select crop</option>
//                       <option value="Rice">Rice</option>
//                       <option value="Wheat">Wheat</option>
//                       <option value="Corn">Corn</option>
//                       <option value="Cotton">Cotton</option>
//                       <option value="Sugarcane">Sugarcane</option>
//                     </select>
//                   </div>

//                   {/* Yield + Price */}
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm mb-2">Yield (kg)</label>
//                       <input
//                         type="number"
//                         name="yield"
//                         value={formData.yield}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border rounded-lg"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm mb-2">Market Price (₹/kg)</label>
//                       <input
//                         type="number"
//                         name="market_price"
//                         value={formData.market_price}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 border rounded-lg"
//                       />
//                     </div>
//                   </div>

//                   {/* COSTS */}
//                   <div className="border-t pt-4">
//                     <h3 className="font-semibold mb-3">Costs</h3>

//                     <div className="grid grid-cols-2 gap-4">

//                       <div>
//                         <label className="block text-sm mb-2">Seed Cost (₹)</label>
//                         <input name="seed_cost" onChange={handleChange} required className="border px-3 py-2 rounded w-full" />
//                       </div>

//                       <div>
//                         <label className="block text-sm mb-2">Fertilizer Cost (₹)</label>
//                         <input name="fertilizer_cost" onChange={handleChange} required className="border px-3 py-2 rounded w-full" />
//                       </div>

//                       <div>
//                         <label className="block text-sm mb-2">Labor Cost (₹)</label>
//                         <input name="labor_cost" onChange={handleChange} required className="border px-3 py-2 rounded w-full" />
//                       </div>

//                       <div>
//                         <label className="block text-sm mb-2">Pesticide Cost (₹)</label>
//                         <input name="pesticide_cost" onChange={handleChange} required className="border px-3 py-2 rounded w-full" />
//                       </div>

//                     </div>
//                   </div>

//                   {error && (
//                     <div className="bg-red-100 text-red-600 p-2 rounded flex gap-2">
//                       <AlertCircle size={18} /> {error}
//                     </div>
//                   )}

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                   >
//                     {loading ? 'Analyzing...' : 'Analyze Profit'}
//                   </button>

//                 </form>
//               </FormCard>
//             </div>

//             {/* RESULT */}
//             <div className="flex flex-col gap-6">

//               {loading && (
//                 <div className="bg-white border rounded-xl p-8 text-center">
//                   <LoadingSpinner />
//                   <LoadingText />
//                 </div>
//               )}

//               {result && !loading && (
//                 <div className="space-y-4">

//                   <ResultBox
//                     title="Total Revenue"
//                     value={result.revenue?.toFixed(0)}
//                     unit="₹"
//                     highlight
//                     icon={<TrendingUp size={24} className="text-green-600" />}
//                   />

//                   <ResultBox
//                     title="Total Cost"
//                     value={result.total_cost?.toFixed(0)}
//                     unit="₹"
//                     icon={<BarChart3 size={20} />}
//                   />

//                   <ResultBox
//                     title="Estimated Profit"
//                     value={result.estimated_profit?.toFixed(0)}
//                     unit="₹"
//                     highlight
//                     icon={<Percent size={20} className="text-green-600" />}
//                   />

//                 </div>
//               )}

//               {!result && !loading && (
//                 <div className="bg-white border rounded-xl p-8 text-center text-gray-400">
//                   Enter data to analyze profit
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
import { BarChart3, AlertCircle, TrendingUp, Percent, DollarSign } from "lucide-react";

export default function ProfitAnalysisPage() {
  const [formData, setFormData] = useState({
    crop_name: "",
    custom_crop: "",
    yield: "",
    market_price: "",
    seed_cost: "",
    fertilizer_cost: "",
    labor_cost: "",
    pesticide_cost: "",
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
      const response = await fetch("http://127.0.0.1:5000/predict-profit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          crop: formData.crop_name === "Other" ? formData.custom_crop : formData.crop_name,
          predicted_yield: parseFloat(formData.yield),
          market_price: parseFloat(formData.market_price),
          seed_cost: parseFloat(formData.seed_cost),
          fertilizer_cost: parseFloat(formData.fertilizer_cost),
          labor_cost: parseFloat(formData.labor_cost),
          pesticide_cost: parseFloat(formData.pesticide_cost),
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setResult(data);
    } catch (err) {
      setError("Error analyzing profit. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5 py-12">
        <div className="max-w-6xl mx-auto px-4">

          {/* ✅ HEADING OUTSIDE WHITE BOX */}
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-green-600" />
            Profit Analysis
          </h1>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* FORM */}
            <div>
              <FormCard title="" description="Calculate farmer profit">
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Crop */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Crop Name
                    </label>
                    <select
                      name="crop_name"
                      value={formData.crop_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    >
                      <option value="">Select crop</option>
                      <option value="Rice">Rice</option>
                      <option value="Wheat">Wheat</option>
                      <option value="Corn">Corn</option>
                      <option value="Cotton">Cotton</option>
                      <option value="Sugarcane">Sugarcane</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* ✅ Show manual input if "Other" */}
                  {formData.crop_name === "Other" && (
                    <div>
                      <label className="block text-sm mb-2">
                        Enter Crop Name
                      </label>
                      <input
                        type="text"
                        name="custom_crop"
                        value={formData.custom_crop}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                      />
                    </div>
                  )}

                  {/* Yield + Price */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Yield (kg)</label>
                      <input
                        type="number"
                        name="yield"
                        value={formData.yield}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">
                        Market Price (₹/kg)
                      </label>
                      <input
                        type="number"
                        name="market_price"
                        value={formData.market_price}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                  </div>

                  {/* COSTS */}
                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-3">Costs</h3>

                    <div className="grid grid-cols-2 gap-4">
                      <input name="seed_cost" placeholder="Seed Cost (₹)" onChange={handleChange} required className="border px-3 py-2 rounded w-full" />
                      <input name="fertilizer_cost" placeholder="Fertilizer Cost (₹)" onChange={handleChange} required className="border px-3 py-2 rounded w-full" />
                      <input name="labor_cost" placeholder="Labor Cost (₹)" onChange={handleChange} required className="border px-3 py-2 rounded w-full" />
                      <input name="pesticide_cost" placeholder="Pesticide Cost (₹)" onChange={handleChange} required className="border px-3 py-2 rounded w-full" />
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-100 text-red-600 p-2 rounded flex gap-2">
                      <AlertCircle size={18} /> {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    {loading ? "Analyzing..." : "Analyze Profit"}
                  </button>
                </form>
              </FormCard>
            </div>

            {/* RESULT */}
            <div className="flex flex-col gap-6">

              {loading && (
                <div className="bg-white border rounded-xl p-8 text-center">
                  <LoadingSpinner />
                  <LoadingText />
                </div>
              )}

              {result && !loading && (
                <div className="space-y-4">
                  <ResultBox title="Total Revenue" value={result.revenue?.toFixed(0)} unit="₹" highlight icon={<TrendingUp size={24} className="text-green-600" />} />
                  <ResultBox title="Total Cost" value={result.total_cost?.toFixed(0)} unit="₹" icon={<BarChart3 size={20} />} />
                  <ResultBox title="Estimated Profit" value={result.estimated_profit?.toFixed(0)} unit="₹" highlight icon={<Percent size={20} className="text-green-600" />} />
                </div>
              )}

              {!result && !loading && (
                <div className="bg-white border rounded-xl p-8 text-center text-gray-400">
                  Enter data to analyze profit
                </div>
              )}

            </div>

          </div>
        </div>
      </main>
    </>
  );
}