

"use client";

import { useState } from "react";
import axios from "axios";
import { Navigation } from "@/components/navigation";

export default function DiseasePage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/predict-disease",
        formData
      );

      setResult(res.data.disease);
    } catch {
      setResult("Error detecting disease");
    }

    setLoading(false);
  };

  return (
    <>
      <Navigation />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 p-6">

        <div className="w-full max-w-lg bg-white/60 backdrop-blur-xl border border-green-200 shadow-2xl rounded-3xl p-8 text-center">

          <h1 className="text-3xl font-bold text-green-700 mb-2">
            🌿 Disease Detection
          </h1>

          <p className="text-gray-500 mb-6">
            Upload leaf image to detect plant disease
          </p>

          <div className="border-2 border-dashed border-green-300 rounded-2xl p-6 bg-green-50 hover:bg-green-100 transition cursor-pointer">
            <input
              type="file"
              className="hidden"
              id="fileUpload"
              onChange={(e) =>
                setFile(e.target.files ? e.target.files[0] : null)
              }
            />

            <label htmlFor="fileUpload" className="cursor-pointer">
              <p className="text-gray-600">
                📁 Click to upload or drag image
              </p>

              {file && (
                <p className="text-green-700 mt-2 font-medium">
                  {file.name}
                </p>
              )}
            </label>
          </div>

          <button
            onClick={handleUpload}
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition shadow-md"
          >
            {loading ? "Detecting..." : "Detect Disease"}
          </button>

          {result && !loading && (
            <div className="mt-6 p-5 rounded-2xl bg-green-100 border border-green-300 shadow-inner">
              <p className="text-sm text-gray-600">Prediction Result</p>

              <h2 className="text-2xl font-bold text-green-800 mt-2 capitalize">
                {result.replace(/_/g, " ")}
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}