
'use client';
import { CloudRain, Activity } from "lucide-react";
import { useRouter } from "next/navigation";
import { Navigation } from '@/components/navigation';
import { Leaf, TrendingUp, Cloud, BarChart3 } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <p className="bg-green-100 text-green-700 px-4 py-1 rounded-full w-fit text-sm mb-4">
              🌱 AI-Powered Precision Agriculture
            </p>

            <h1 className="text-6xl font-extrabold text-green-900 leading-tight">
              Intelligent Crop Analytics for{" "}
              <span className="text-green-600">Modern Farmers</span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              Make data-driven decisions with AI-powered recommendations.
              Turn complex field data into actionable intelligence.
            </p>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => router.push("/crop-recommendation")}
                className="px-8 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700"
              >
                Get Started
              </button>

              <button
                className="px-8 py-3 border border-green-600 text-green-700 rounded-full"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border">

            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold text-green-900">
                  North Field Alpha
                </h3>
                <p className="text-sm text-gray-500">
                  Corn · Growth Stage
                </p>
              </div>

              <span className="text-green-600 text-sm font-semibold">
                98% HEALTH
              </span>
            </div>

            {/* GRAPH */}
            {/* <div className="bg-green-50 rounded-2xl p-5 border border-green-100">

              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>YIELD PREDICTION</span>
                <span className="text-green-700 font-semibold text-lg">
                  +14.2%
                </span>
              </div>

              <div className="flex items-end gap-4 h-36">
                {[30, 45, 35, 55, 60, 50, 65, 58, 85].map((v, i, arr) => (
                  <div
                    key={i}
                    className={`w-7 rounded-xl ${
                      i === arr.length - 1
                        ? "bg-green-600"
                        : "bg-green-200"
                    }`}
                    style={{ height: `${v}%` }}
                  />
                ))}
              </div>
            </div> */}

            {/* GRAPH */}
 <div className="bg-green-50 rounded-2xl p-6 border border-green-100 w-full">

              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>YIELD PREDICTION</span>
                <span className="text-green-700 font-semibold text-xl">
                  +14.2%
                </span>
              </div>

              <div className="flex items-end justify-between h-48 w-full">
                {[30, 45, 35, 55, 60, 50, 65, 58, 85].map((v, i, arr) => (
                  <div
                    key={i}
                    className={`flex-1 mx-1 rounded-xl ${
                      i === arr.length - 1
                        ? "bg-green-600"
                        : "bg-green-200"
                    }`}
                    style={{ height: `${v}%` }}
                  />
                ))}
              </div>
            </div>
            {/* SMALL CARDS */}
            {/* <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-green-50 p-5 rounded-xl border">
                <p className="text-2xl font-bold text-green-800">68%</p>
                <p className="text-sm text-gray-500">
                  Precipitation Risk
                </p>
              </div>

              <div className="bg-green-50 p-5 rounded-xl border">
                <p className="text-xl font-semibold text-green-700">
                  Optimum
                </p>
                <p className="text-sm text-gray-500">
                  Harvest Timing
                </p>
              </div>
            </div> */}
            <div className="grid grid-cols-2 gap-4 mt-6">

  {/* PRECIPITATION */}
  <div className="bg-green-50 p-5 rounded-xl border flex items-center gap-3">
    <div className="bg-green-200 p-2 rounded-full">
      <CloudRain className="text-blue-900 w-5 h-5" />
    </div>

    <div>
      <p className="text-2xl font-bold text-green-800">68%</p>
      <p className="text-sm text-gray-500">
        Precipitation Risk
      </p>
    </div>
  </div>

  {/* OPTIMUM */}
  <div className="bg-green-50 p-5 rounded-xl border flex items-center gap-3">
    <div className="bg-green-200 p-2 rounded-full">
      <Activity className="text-green-700 w-5 h-5" />
    </div>

    <div>
      <p className="text-xl font-semibold text-green-700">
        Optimum
      </p>
      <p className="text-sm text-gray-500">
        Harvest Timing
      </p>
    </div>
  </div>

</div>

          </div>
        </section>

        {/* STATS */}
        <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 text-center gap-10">
          <div>
            <h2 className="text-4xl font-bold text-green-700">98%</h2>
            <p className="text-gray-500">Accuracy Rate</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-green-700">120+</h2>
            <p className="text-gray-500">Crops Supported</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-green-700">15+</h2>
            <p className="text-gray-500">AI Climate Models</p>
          </div>
        </section>

        {/* FEATURES (SAME AS IMAGE) */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose CropSense
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <Card icon={<Leaf />} title="AI Crop Recommendations" />
            <Card icon={<TrendingUp />} title="Real-time Yield Prediction" />
            <Card icon={<Cloud />} title="Climate Risk Analysis" />
            <Card icon={<BarChart3 />} title="Smart Profit Forecasting" />
            <Card icon={<Leaf />} title="Live Chatbot Assistant" />
            <Card icon={<Cloud />} title="Multi-Crop Support" />

          </div>
        </section>

        {/* CTA */}
<section className="text-center py-20 bg-green-100">
  <h2 className="text-4xl font-bold mb-4 text-green-900">
    Ready to transform your farm?
  </h2>

  <p className="text-gray-600 mb-8">
    Join the new era of precision agriculture. Command your field with intelligence.
  </p>

  <button
    onClick={() => router.push("/crop-recommendation")}
    className="bg-green-600 text-white px-10 py-4 rounded-xl hover:bg-green-700"
  >
    Initialize Command Center
  </button>
</section>


        {/* FOOTER */}
        <footer className="border-t mt-20 py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <h2 className="text-xl font-semibold">CropSense 🌱</h2>
              <p className="text-sm text-gray-500">
                Smart farming with AI
              </p>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>

          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            © 2024 CropSense
          </div>
        </footer>

      </main>
    </>
  );
}

/* CARD COMPONENT */
function Card({ icon, title }: any) {
  return (
    <div className="bg-white/70 backdrop-blur-lg border border-green-100 shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
      <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-xl mb-4 text-green-600">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-green-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">
        High-quality AI-powered insights for better farming decisions.
      </p>
    </div>
  );
}