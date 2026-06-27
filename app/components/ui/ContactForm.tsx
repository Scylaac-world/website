// "use client";
// import { useState } from "react";

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [service, setService] = useState("");
//   const [budget, setBudget] = useState(50000);
//   const [message, setMessage] = useState("");
//   const [agreePrivacy, setAgreePrivacy] = useState(false);
//   const [agreeUpdates, setAgreeUpdates] = useState(false);

//   const budgetMarks = [
//     { value: 10000, label: "₹10K" },
//     { value: 50000, label: "₹50K" },
//     { value: 100000, label: "₹1L" },
//     { value: 250000, label: "₹2.5L" },
//     { value: 500000, label: "₹5L" },
//     { value: 1000000, label: "₹10L" },
//   ];

//   const formatBudget = (val: number) => {
//     if (val >= 100000) return `₹${(val / 100000).toFixed(1)} Lakh`;
//     return `₹${(val / 1000).toFixed(0)}K`;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send to Supabase or email)
//     console.log({ name, email, phone, service, budget, message, agreePrivacy, agreeUpdates });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl border border-[#E2E8F0] shadow-lg p-8 md:p-10 space-y-6"
//     >
//       <h3 className="text-2xl font-bold text-[#0F172A] text-center mb-2">
//         Start Your Project
//       </h3>
//       <p className="text-sm text-[#475569] text-center mb-6">
//         Fill in the details and we'll get back to you within 24 hours.
//       </p>

//       {/* Name & Email */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <input
//           type="text"
//           placeholder="Your Name *"
//           required
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="bg-white/90 border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1E90C8] focus:ring-2 focus:ring-[#1E90C8]/20 transition-all"
//         />
//         <input
//           type="email"
//           placeholder="Your Email *"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="bg-white/90 border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1E90C8] focus:ring-2 focus:ring-[#1E90C8]/20 transition-all"
//         />
//       </div>

//       {/* Phone & Service */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="bg-white/90 border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1E90C8] focus:ring-2 focus:ring-[#1E90C8]/20 transition-all"
//         />
//         <select
//           value={service}
//           onChange={(e) => setService(e.target.value)}
//           className="bg-white/90 border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1E90C8] focus:ring-2 focus:ring-[#1E90C8]/20 transition-all appearance-none"
//         >
//           <option value="">Select Service</option>
//           <option>Strategy & Consulting</option>
//           <option>Digital Platforms</option>
//           <option>Commerce & Automation</option>
//           <option>Enterprise Intelligence</option>
//           <option>ERP Integration</option>
//           <option>Cybersecurity</option>
//         </select>
//       </div>

//       {/* Budget Slider */}
//       <div>
//         <label className="block text-sm font-semibold text-[#0F172A] mb-3">
//           Estimated Budget (INR)
//         </label>
//         <div className="relative">
//           {/* Budget meter visual */}
//           <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden mb-2">
//             <div
//               className="h-full bg-gradient-to-r from-[#1E90C8] to-[#7C3AED] rounded-full transition-all duration-300"
//               style={{ width: `${(budget / 1000000) * 100}%` }}
//             />
//           </div>

//           {/* Range input */}
//           <input
//             type="range"
//             min="5000"
//             max="1000000"
//             step="5000"
//             value={budget}
//             onChange={(e) => setBudget(Number(e.target.value))}
//             className="w-full h-2 bg-transparent appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#1E90C8] [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
//           />

//           {/* Budget marks */}
//           <div className="flex justify-between mt-1">
//             {budgetMarks.map((mark) => (
//               <span
//                 key={mark.value}
//                 className="text-[10px] text-[#94A3B8] cursor-pointer hover:text-[#1E90C8] transition-colors"
//                 onClick={() => setBudget(mark.value)}
//               >
//                 {mark.label}
//               </span>
//             ))}
//           </div>
//         </div>
//         <p className="text-center text-sm font-bold text-[#1E90C8] mt-2">
//           {formatBudget(budget)}
//         </p>
//       </div>

//       {/* Message */}
//       <textarea
//         placeholder="Tell us about your project..."
//         rows={4}
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         className="w-full bg-white/90 border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1E90C8] focus:ring-2 focus:ring-[#1E90C8]/20 transition-all resize-none"
//       />

//       {/* Toggle Switches */}
//       <div className="space-y-3">
//         <label className="flex items-center gap-3 cursor-pointer">
//           <div className="relative">
//             <input
//               type="checkbox"
//               checked={agreePrivacy}
//               onChange={(e) => setAgreePrivacy(e.target.checked)}
//               className="sr-only peer"
//             />
//             <div className="w-10 h-5 bg-[#E2E8F0] rounded-full peer-checked:bg-[#1E90C8] transition-colors" />
//             <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform" />
//           </div>
//           <span className="text-xs text-[#475569]">
//             I agree to the{" "}
//             <a href="#" className="text-[#1E90C8] hover:underline">
//               Privacy Policy
//             </a>
//           </span>
//         </label>

//         <label className="flex items-center gap-3 cursor-pointer">
//           <div className="relative">
//             <input
//               type="checkbox"
//               checked={agreeUpdates}
//               onChange={(e) => setAgreeUpdates(e.target.checked)}
//               className="sr-only peer"
//             />
//             <div className="w-10 h-5 bg-[#E2E8F0] rounded-full peer-checked:bg-[#1E90C8] transition-colors" />
//             <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform" />
//           </div>
//           <span className="text-xs text-[#475569]">
//             Send me updates about new services and insights
//           </span>
//         </label>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="w-full bg-gradient-to-r from-[#1E90C8] to-[#1873A3] text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-[#1E90C8]/20 hover:shadow-[#1E90C8]/30 transition-all duration-300"
//       >
//         Send Message
//         <i className="fas fa-paper-plane ml-2" />
//       </button>
//     </form>
//   );
// }