import React, { useState, useEffect } from "react";

const CookieBanner = () => {
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
      <div className="fixed w-1/2 bottom-4 left-4 right-4 md:left-6 md:right-6 lg:left-10 lg:right-10 z-50 p-4 bg-gray-900/90 backdrop-blur-lg border border-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 animate-fadeIn transition-all">
        {/* Cookie Text */}
        <p className="text-sm text-gray-300 text-center md:text-left">
          We use cookies to enhance your experience. By continuing, you agree to
          our{" "}
          <a href="/privacypolicy" className="text-blue-400 hover:underline">
            privacy policy
          </a>
          .
        </p>

        {/* Button */}
        <button
          onClick={acceptCookies}
          className="bg-blue-500 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-blue-600 transition-all"
        >
          Accept
        </button>
      </div>
    )
  );
};

export default CookieBanner;
