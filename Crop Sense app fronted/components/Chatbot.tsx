// "use client";

// import { useState, useRef, useEffect } from 'react';
// import { motion } from "framer-motion";

// export default function Chatbot() {
//   const [message, setMessage] = useState("");
//   const bottomRef = useRef<HTMLDivElement | null>(null);
//   const [messages, setMessages] = useState<any[]>([
//     { text: "Hey 👋 How can I help you today?", sender: "bot" },
//   ]);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//   bottomRef.current?.scrollIntoView({ behavior: "smooth" });
// }, [messages, loading]);

//   const sendMessage = async () => {
//     if (!message) return;

//     const newMessages = [...messages, { text: message, sender: "user" }];
//     setMessages(newMessages);
//     setMessage("");
//     setLoading(true);

//     try {
//       const res = await fetch("http://127.0.0.1:5000/chatbot", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message }),
//       });

//       const data = await res.json();

//       setMessages((prev) => [
//         ...prev,
//         { text: data.reply || "Error", sender: "bot" },
//       ]);
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         { text: "Server error ❌", sender: "bot" },
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     // <div className="w-full flex justify-center mt-10">
//     <div className="w-full flex justify-center">
//       {/* MAIN CHAT CONTAINER (80% WIDTH) */}
//       {/* <div className="w-[80%] max-w-5xl h-[80vh] bg-white rounded-2xl shadow-xl flex flex-col"> */}
//       <div className="w-full max-w-5xl h-[80vh] bg-white rounded-2xl shadow-xl flex flex-col border">
//         {/* HEADER */}
//         <div className="bg-green-600 text-white p-4 rounded-t-2xl text-lg font-semibold">
//           🌾 CropSense Chatbot
//         </div>

//         {/* CHAT AREA */}
//         <div className="flex-1 p-4 overflow-y-auto space-y-3 flex flex-col">
//           {/* {messages.map((msg, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`p-3 rounded-xl max-w-[70%] ${
//                 msg.sender === "user"
//                   ? "bg-green-500 text-white ml-auto"
//                   : "bg-gray-200 text-black"
//               }`}
//             >
//               {msg.text}
//             </motion.div>
//           ))} */}

//           {/* updated new for specifiic mag len */}

//           {messages.map((msg, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3 }}
//             //   className={`p-3 rounded-xl max-w-[60%] break-words whitespace-pre-wrap text-sm leading-relaxed ${

// className={`px-4 py-2 rounded-2xl w-fit max-w-[65%] break-words text-sm ${
//                 msg.sender === "user"
//                   ? "bg-green-500 text-white ml-auto"
//                   : "bg-gray-200 text-black"
//               }`}
//             >
//               {msg.text}
//             </motion.div>
//           ))}

//           {/* 🔥 THINKING ANIMATION (3 dots) */}
//           {loading && (
//             <div className="bg-gray-200 w-fit px-4 py-2 rounded-xl flex gap-1">
//               {/* <span className="animate-bounce">.</span>
//               <span className="animate-bounce delay-100">.</span>
//               <span className="animate-bounce delay-200">.</span> */}
//               <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
//               <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
//               <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
//             </div>
//           )}

//            {/* ✅ AUTO SCROLL TARGET */}
//   <div ref={bottomRef}></div>
//         </div>

//         {/* INPUT */}
//         <div className="p-4 border-t flex gap-3">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Ask about crops, irrigation..."
//             className="flex-1 border rounded-xl p-3 text-black"
//           />

//           <button
//             onClick={sendMessage}
//             className="bg-green-600 text-white px-6 rounded-xl"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [messages, setMessages] = useState<any[]>([
    { text: "Hey 👋 How can I help you today?", sender: "bot" },
  ]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!message && !file) return;

    setMessages((prev) => [...prev, { text: message, sender: "user" }]);
    setMessage("");
    setLoading(true);

    const formData = new FormData();
    formData.append("message", message);
    if (file) formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:5000/chatbot", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      let replyText = data.reply;

      if (data.disease) {
        replyText =
          "🌿 Detected: " +
          data.disease.replace(/_/g, " ") +
          "\n\n" +
          data.reply;
      }

      setMessages((prev) => [...prev, { text: replyText, sender: "bot" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "Server error ❌", sender: "bot" },
      ]);
    }

    setLoading(false);
    setFile(null);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-5xl h-[80vh] bg-white rounded-2xl shadow-xl flex flex-col border">
        {/* HEADER */}
        <div className="bg-green-600 text-white p-4 rounded-t-2xl text-lg font-semibold">
          🌾 CropSense Chatbot
        </div>

        {/* CHAT */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 flex flex-col">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              className={`px-4 py-2 rounded-2xl w-fit max-w-[65%] ${
                msg.sender === "user"
                  ? "bg-green-500 text-white ml-auto"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}

          {loading && (
            <div className="bg-gray-200 w-fit px-4 py-2 rounded-xl flex gap-1">
              <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
            </div>
          )}

          <div ref={bottomRef}></div>
        </div>

        {/* INPUT */}
        <div className="p-4 border-t flex gap-3 items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask or upload image..."
            className="flex-1 border rounded-xl p-3"
          />

          {/* FILE UPLOAD */}
          {/* <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="text-sm"
          /> */}
          <div className="flex items-center gap-2">
            {/* 📎 ICON */}
            <label className="cursor-pointer bg-gray-100 p-2 rounded-xl hover:bg-gray-200">
              📎
              <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>

            {/* ✅ FILE NAME */}
            {file && (
              <span className="text-xs text-gray-600 truncate max-w-[150px]">
                {file.name}
              </span>
            )}
          </div>

          <button
            onClick={sendMessage}
            className="bg-green-600 text-white px-6 py-2 rounded-xl"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
