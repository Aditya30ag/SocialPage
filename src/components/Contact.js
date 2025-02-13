import React, { useState } from 'react';
import { ArrowRight, X } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    socialHandle: "",
  });

  const [showModal, setShowModal] = useState(false); // Initially hidden

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form submitted:", formData);
    setShowModal(true); // Show modal after submitting

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      socialHandle: "",
    });
  };

  return (
    <>
      <section className="py-24 md:py-32 px-6 md:px-24 relative" id="contact-us">
        {/* Background Gradient Blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-400/20 blur-3xl"></div>

        <div className="max-w-xl mx-auto relative">
          

          {/* Outer Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>

          {/* Form Container */}
          <div className="relative bg-black/50 backdrop-blur-2xl rounded-2xl p-10 border border-slate-800 shadow-2xl shadow-cyan-400/10">
            {/* Heading */}
          <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
            Hirecentive Social
          </h1>
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Start Your Journey
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", placeholder: "Full Name", type: "text" },
                { name: "email", placeholder: "Email Address", type: "email" },
                { name: "phone", placeholder: "Phone Number", type: "tel" },
                { name: "socialHandle", placeholder: "Instagram/LinkedIn Handle", type: "text" },
              ].map((field) => (
                <div key={field.name} className="relative group">
                  {/* Input Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>

                  {/* Input Field */}
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="relative w-full p-4 rounded-lg bg-black/60 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 outline-none transition-all duration-300 text-white placeholder-slate-500 shadow-md"
                    value={formData[field.name]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    required
                  />
                </div>
              ))}

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full p-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 transition-all duration-300 group-hover:blur-md"></div>

                {/* Black Overlay */}
                <div className="absolute inset-0.5 bg-black rounded-lg"></div>

                {/* Text & Icon */}
                <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                  Get Started
                  <ArrowRight className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Modal Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-black/80 border border-slate-800 rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Welcome Aboard!
            </h3>

            {/* Modal Content */}
            <p className="text-slate-300 mb-6">
              Your journey with Hirecentive Social has begun! We'll be in touch with you shortly to help you get started.
            </p>

            {/* Confirmation Button */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
