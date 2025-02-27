import React, { useState, useEffect } from "react";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    
    if (!cookiesAccepted) {
      const handleScroll = () => {
        if (window.scrollY >= 1000) {
          setShowPopup(true);
        }
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowPopup(false);
    window.location.reload();
  };

  return (
    showPopup && (
      <div className="fixed bottom-4 left-4 z-50 sm:max-w-sm max-w-[calc(100%-2rem)] w-full">
        <div className="relative bg-black p-4 rounded-xl shadow-lg border border-slate-800">
          {/* Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          
          <h2 className="text-lg font-bold mb-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
            We Use Cookies
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-400 mb-3">
            This website uses cookies to ensure you get the best experience on Hirecentive Social.
          </p>
          
          <div className="flex justify-center space-x-3 mt-3">
            {/* Accept Button */}
            <div className="text-center">
              <button
                onClick={acceptCookies}
                className="group relative px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg opacity-75"></div>
                <div className="absolute inset-0.5 bg-black rounded-lg"></div>
                <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                  Accept
                </span>
              </button>
            </div>
            
            {/* Decline Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="text-slate-400 px-3 py-2 rounded-lg hover:text-cyan-400 transition-colors text-sm"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookiePopup;