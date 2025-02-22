import React, { useState, useEffect } from "react";
import { ArrowRight, X, Plus } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    socialHandles: {
      Instagram: "",
      LinkedIn: "",
      Facebook: "",
    },
    otherPlatforms: [], // Array of {name: string, handle: string}
    selectedPlatforms: ["Instagram"],
    privacyAccepted: false,
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
    const confettiCount = 50; // Increased for more visual impact
    const newConfetti = Array.from({ length: confettiCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth, // Random horizontal position
      y: Math.random() * window.innerHeight, // Random vertical position
      size: Math.random() * 12 + 4, // More varied sizes (4px - 16px)
      color: `hsl(${Math.random() * 360}, 100%, ${Math.random() * 50 + 40}%)`, // Dynamic brightness
      rotation: Math.random() * 360, // Random rotation angle
      rotationSpeed: Math.random() * 5 - 2.5, // Rotation speed (-2.5 to 2.5 deg/frame)
      animationDuration: Math.random() * 4 + 1.5, // Random animation duration (1.5s - 5.5s)
      velocityX: Math.random() * 6 - 3, // Sideways motion (-3 to 3)
      velocityY: Math.random() * 3 + 2, // Downward motion (2 to 5)
    }));
  
    setConfetti(newConfetti);
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

    // Validate other platforms
    if (formData.selectedPlatforms.includes("Other")) {
      const invalidOther = formData.otherPlatforms.some(
        platform => !platform.name || !platform.handle
      );
      if (invalidOther) {
        alert("Please fill in all Other platform details");
        return;
      }
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
      },
      otherPlatforms: [],
      selectedPlatforms: ["Instagram"],
      privacyAccepted: false,
    });
  };

  const handlePlatformToggle = (platform) => {
    setFormData((prevState) => {
      const newSelectedPlatforms = prevState.selectedPlatforms.includes(platform)
        ? prevState.selectedPlatforms.filter((p) => p !== platform)
        : [...prevState.selectedPlatforms, platform];

      // Reset other platforms if Other is deselected
      if (platform === "Other" && !newSelectedPlatforms.includes("Other")) {
        return {
          ...prevState,
          selectedPlatforms: newSelectedPlatforms,
          otherPlatforms: [],
        };
      }

      return {
        ...prevState,
        selectedPlatforms: newSelectedPlatforms,
      };
    });
  };

  const handleSocialHandleChange = (platform, value) => {
    setFormData((prevState) => ({
      ...prevState,
      socialHandles: {
        ...prevState.socialHandles,
        [platform]: value,
      },
    }));
  };

  const addOtherPlatform = () => {
    setFormData((prevState) => ({
      ...prevState,
      otherPlatforms: [...prevState.otherPlatforms, { name: "", handle: "" }],
    }));
  };

  const updateOtherPlatform = (index, field, value) => {
    setFormData((prevState) => {
      const newOtherPlatforms = [...prevState.otherPlatforms];
      newOtherPlatforms[index] = {
        ...newOtherPlatforms[index],
        [field]: value,
      };
      return {
        ...prevState,
        otherPlatforms: newOtherPlatforms,
      };
    });
  };

  const removeOtherPlatform = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      otherPlatforms: prevState.otherPlatforms.filter((_, i) => i !== index),
    }));
  };

  const renderSocialHandleInputs = () => {
    return (
      <>
        {formData.selectedPlatforms
          .filter(platform => platform !== "Other")
          .map((platform) => (
            <div key={platform} className="relative group mt-3 md:mt-4">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
              <input
                type="text"
                placeholder={`Your ${platform} Handle`}
                className="relative w-full p-3 md:p-4 rounded-lg bg-black/60 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 outline-none transition-all duration-300 text-white placeholder-slate-500 shadow-md text-sm md:text-base"
                value={formData.socialHandles[platform]}
                onChange={(e) => handleSocialHandleChange(platform, e.target.value)}
                required
              />
            </div>
          ))}

        {formData.selectedPlatforms.includes("Other") && (
          <div className="space-y-3 mt-3 md:mt-4">
            {formData.otherPlatforms.map((platform, index) => (
              <div key={index} className="space-y-3">
                <div className="flex gap-3">
                  <div className="relative group flex-1">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                    <input
                      type="text"
                      placeholder="Platform name"
                      className="relative w-full p-3 md:p-4 rounded-lg bg-black/60 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 outline-none transition-all duration-300 text-white placeholder-slate-500 shadow-md text-sm md:text-base"
                      value={platform.name}
                      onChange={(e) => updateOtherPlatform(index, "name", e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeOtherPlatform(index)}
                    className="p-3 md:p-4 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                  <input
                    type="text"
                    placeholder="Social handle"
                    className="relative w-full p-3 md:p-4 rounded-lg bg-black/60 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 outline-none transition-all duration-300 text-white placeholder-slate-500 shadow-md text-sm md:text-base"
                    value={platform.handle}
                    onChange={(e) => updateOtherPlatform(index, "handle", e.target.value)}
                    required
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addOtherPlatform}
              className="flex items-center gap-2 p-3 md:p-4 rounded-lg bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/50 text-violet-400 transition-colors w-full justify-center"
            >
              <Plus className="w-4 h-4 md:w-5 md:h-5" />
              Add Another Platform
            </button>
          </div>
        )}
      </>
    );
  };

  // Rest of your component remains the same...
  return (
    <>
      <section className="min-h-full w-full py-6 md:py-12 px-4 md:px-8 lg:px-24 relative flex items-center justify-center" id="contact-us">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-400/20 blur-3xl"></div>

        <div className="max-w-xl mx-auto relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>

          <div className="relative bg-black/50 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 md:p-10 border border-slate-800 shadow-2xl shadow-cyan-400/10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Hirecentive Social
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Start Your Journey
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {[
                { name: "name", placeholder: "Full Name  * ", type: "text" },
                { name: "email", placeholder: "Email Address  * ", type: "email" },
                { name: "phone", placeholder: "WhatsApp Number  * ", type: "tel" },
              ].map((field) => (
                <div key={field.name} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="relative w-full p-3 md:p-4 rounded-lg bg-black/60 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 outline-none transition-all duration-300 text-white placeholder-slate-500 shadow-md text-sm md:text-base"
                    value={formData[field.name]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.name]: e.target.value })
                    }
                    required
                  />
                </div>
              ))}

              <div className="p-3 md:p-4 rounded-lg bg-black/60 border border-slate-700 shadow-md">
                <label className="block text-white mb-3 text-sm md:text-base">
                  Select your social platforms:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["Instagram", "LinkedIn", "Facebook", "Other"].map(
                    (platform) => (
                      <label
                        key={platform}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.selectedPlatforms.includes(platform)}
                          onChange={() => handlePlatformToggle(platform)}
                          className="h-4 w-4 appearance-none border border-slate-700 bg-slate-800 rounded-md checked:bg-blue-500 checked:border-blue-500 focus:ring-2 transition-all duration-200"
                        />
                        <span className="text-slate-300 text-sm md:text-base">
                          {platform}
                        </span>
                      </label>
                    )
                  )}
                </div>

                {renderSocialHandleInputs()}
              </div>

              <div className="relative group p-3 md:p-4 rounded-lg bg-black/60 border border-slate-700 shadow-md">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.privacyAccepted}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        privacyAccepted: e.target.checked,
                      })
                    }
                    className="form-checkbox h-4 w-6 appearance-none border border-slate-700 bg-slate-800 rounded-md checked:bg-blue-500 checked:border-blue-500 focus:ring-2 transition-all duration-200"
                  />
                  <span className="text-slate-300 text-xs md:text-sm">
                    I agree to the Privacy Policy and consent to having my
                    personal data processed for the stated purposes.
                  </span>
                </label>
              </div>

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
            {confetti.map((piece) => (
              <div
              key={piece.id}
              className="absolute rounded-full"
              style={{
                left: `${piece.x}px`,
                top: `${piece.y}px`,
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                backgroundColor: piece.color,
                opacity: "1",
                transform: `rotate(${piece.rotation}deg)`,
                animation: `
                  fall ${piece.animationDuration}s linear infinite,
                  sway ${piece.animationDuration * 1.2}s ease-in-out infinite alternate,
                  fadeInOut ${piece.animationDuration * 1.5}s ease-in-out infinite alternate
                `,
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
              Your journey with Hirecentive Social is set to start really soon!
              We'll be in touch with you shortly to help you get started, after
              a quick verification process!
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
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
          }
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          70% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-15px);
            }
          }
          @keyframes fadeInOut {
            0%, 100% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
          }
        .animate-bounce-in {
          animation: bounce-in 0.5s cubic-bezier(0.38, 0.1, 0.36, 1.47) forwards;
        }
      `}</style>
    </>
  );
}
