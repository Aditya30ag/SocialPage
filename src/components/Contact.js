import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    socialHandles: {
      Instagram: "",
      LinkedIn: "",
      Facebook: "",
      Other: ""
    },
    otherPlatformName: "",
    selectedPlatforms: ["Instagram"],
    privacyAccepted: false
  });

  const [showModal, setShowModal] = useState(false);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (showModal) {
      generateConfetti();
    } else {
      setConfetti([]);
    }
  }, [showModal]);

  const generateConfetti = () => {
    const pieces = [];
    const colors = ['#00ccff', '#cc00ff', '#ffcc00', '#ff00cc', '#00ffcc'];
    
    for (let i = 0; i < 50; i++) { // Reduced number of confetti pieces for better mobile performance
      pieces.push({
        id: i,
        x: Math.random() * (window.innerWidth * 0.8), // Confined to 80% of screen width
        y: Math.random() * (window.innerHeight * 0.8),
        size: Math.random() * 8 + 4, // Slightly smaller pieces
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        animationDuration: Math.random() * 2 + 1.5
      });
    }
    
    setConfetti(pieces);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      alert("Please accept the privacy policy to continue");
      return;
    }
    
    if (formData.selectedPlatforms.length === 0) {
      alert("Please select at least one social platform");
      return;
    }
    
    console.log("Form submitted:", formData);
    setShowModal(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      socialHandles: {
        Instagram: "",
        LinkedIn: "",
        Facebook: "",
        Other: ""
      },
      otherPlatformName: "",
      selectedPlatforms: ["Instagram"],
      privacyAccepted: false
    });
  };

  const handlePlatformToggle = (platform) => {
    setFormData(prevState => ({
      ...prevState,
      selectedPlatforms: prevState.selectedPlatforms.includes(platform)
        ? prevState.selectedPlatforms.filter(p => p !== platform)
        : [...prevState.selectedPlatforms, platform]
    }));
  };

  const handleSocialHandleChange = (platform, value) => {
    setFormData(prevState => ({
      ...prevState,
      socialHandles: {
        ...prevState.socialHandles,
        [platform]: value
      }
    }));
  };

  return (
    <>
      <section className="min-h-full w-full py-6 md:py-12 px-4 md:px-8 lg:px-24 relative flex items-center justify-center" id='contact-us'>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-400/20 blur-3xl"></div>

        <div className="max-w-xl mx-auto relative">
          {/* Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>

          {/* Form Container */}
          <div className="relative bg-black/50 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 md:p-10 border border-slate-800 shadow-2xl shadow-cyan-400/10">
            {/* Heading - Responsive text sizes */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Hirecentive Social
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Start Your Journey
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {[
                { name: "name", placeholder: "Full Name", type: "text" },
                { name: "email", placeholder: "Email Address", type: "email" },
                { name: "phone", placeholder: "Phone Number", type: "tel" },
              ].map((field) => (
                <div key={field.name} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="relative w-full p-3 md:p-4 rounded-lg bg-black/60 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 outline-none transition-all duration-300 text-white placeholder-slate-500 shadow-md text-sm md:text-base"
                    value={formData[field.name]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    required
                  />
                </div>
              ))}

              {/* Social Media Selector - Responsive grid */}
              <div className="p-3 md:p-4 rounded-lg bg-black/60 border border-slate-700 shadow-md">
                <label className="block text-white mb-3 text-sm md:text-base">Select your social platforms:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["Instagram", "LinkedIn", "Facebook", "Other"].map(platform => (
                    <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.selectedPlatforms.includes(platform)}
                        onChange={() => handlePlatformToggle(platform)}
                        className="form-checkbox h-4 w-4 text-cyan-400 rounded border-slate-600 focus:ring-cyan-400/50"
                      />
                      <span className="text-slate-300 text-sm md:text-base">{platform}</span>
                    </label>
                  ))}
                </div>
                {formData.selectedPlatforms.map(platform => (
                  <div key={platform} className="relative group mt-3 md:mt-4">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                    <input
                      type="text"
                      placeholder={platform === "Other" 
                        ? `Your ${formData.otherPlatformName || "Other"} Handle`
                        : `Your ${platform} Handle`}
                      className="relative w-full p-3 md:p-4 rounded-lg bg-black/60 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 outline-none transition-all duration-300 text-white placeholder-slate-500 shadow-md text-sm md:text-base"
                      value={formData.socialHandles[platform]}
                      onChange={(e) => handleSocialHandleChange(platform, e.target.value)}
                      required
                    />
                  </div>
                ))}
              </div>

              {/* Other Platform Name Input */}
              {formData.selectedPlatforms.includes("Other") && (
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                  <input
                    type="text"
                    placeholder="Enter other platform name"
                    className="relative w-full p-3 md:p-4 rounded-lg bg-black/60 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 outline-none transition-all duration-300 text-white placeholder-slate-500 shadow-md text-sm md:text-base"
                    value={formData.otherPlatformName}
                    onChange={(e) => setFormData({ ...formData, otherPlatformName: e.target.value })}
                    required
                  />
                </div>
              )}

              {/* Privacy Policy - Responsive padding and text */}
              <div className="relative group p-3 md:p-4 rounded-lg bg-black/60 border border-slate-700 shadow-md">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="form-checkbox h-4 w-4 mt-1 text-cyan-400 rounded border-slate-600 focus:ring-cyan-400/50"
                  />
                  <span className="text-slate-300 text-xs md:text-sm">
                    I agree to the Privacy Policy and consent to having my personal data processed for the stated purposes.
                  </span>
                </label>
              </div>

              {/* Submit Button - Responsive padding and text */}
              <button
                type="submit"
                className="group relative w-full p-3 md:p-4 rounded-lg text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 transition-all duration-300 group-hover:blur-md"></div>
                <div className="absolute inset-0.5 bg-black rounded-lg"></div>
                <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                  Get Started
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Modal - Responsive design */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden px-4">
          <div className="absolute inset-0 overflow-hidden">
            {confetti.map(piece => (
              <div
                key={piece.id}
                className="absolute rounded-md"
                style={{
                  left: `${piece.x}px`,
                  top: `${piece.y}px`,
                  width: `${piece.size}px`,
                  height: `${piece.size}px`,
                  backgroundColor: piece.color,
                  transform: `rotate(${piece.rotation}deg)`,
                  opacity: '0.8',
                  animation: `float ${piece.animationDuration}s ease-in-out infinite alternate, 
                            fadeInOut ${piece.animationDuration * 1.5}s ease-in-out infinite alternate`
                }}
              ></div>
            ))}
          </div>

          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>

          <div className="relative bg-black/80 border border-slate-800 rounded-xl p-6 md:p-8 w-full max-w-md mx-auto shadow-2xl animate-bounce-in">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Welcome to Hirecentive Social
            </h3>

            <p className="text-slate-300 text-sm md:text-base mb-6">
              Your journey with Hirecentive Social is set to start really soon! We'll be in touch with you shortly to help you get started, after a quick verification process!
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-2 md:py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-white font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-100px) rotate(360deg); }
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0; }
          50% { opacity: 0.8; }
          100% { opacity: 0; }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0.9); opacity: 0; }
          70% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s cubic-bezier(0.38, 0.1, 0.36, 1.47) forwards;
        }
      `}</style>
    </>
  );
}