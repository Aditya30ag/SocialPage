import React from "react";
import { MapPin, Clock, Languages, Building2 } from "lucide-react";

const LocalStatsSection = () => {
  const localStats = [
    {
      title: "Average Job Distance",
      value: "< 5 KM",
      description: "Work near your home",
      icon: MapPin,
    },
    {
      title: "Fast Hiring Process",
      value: "24-48 Hours",
      description: "Quick job starts",
      icon: Clock,
    },
    {
      title: "Languages Supported",
      value: "10+",
      description: "Apply in your language",
      icon: Languages,
    },
    {
      title: "Active Opportunities",
      value: "5000+",
      description: "Trusted partners",
      icon: Building2,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-16 lg:px-24 relative" id="contact-us">
      {/* Background Gradient Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-400/20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
          Jobs That Are Close to Home, Made for Your Network
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {localStats.map((stat, index) => (
            <div
              key={index}
              className="relative p-5 rounded-2xl border border-slate-800 bg-black/50 backdrop-blur-lg shadow-lg flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <stat.icon className="w-10 h-10 text-cyan-400 mb-3" />
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text mb-1">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-slate-200 mb-1">
                {stat.title}
              </div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-base md:text-lg text-gray-400 mt-10 max-w-2xl mx-auto">
          We focus on blue-collar jobs that matter—drivers, helpers, retail workers, and more—ensuring your community thrives.
        </p>

        {/* Language Support Banner */}
        <div className="mt-12 relative px-4 md:px-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-25"></div>
          <div className="relative bg-black/50 backdrop-blur-lg p-6 md:p-8 rounded-lg border border-slate-800 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                  Language Is No Barrier to Success
                </h3>
                <p className="text-slate-300 mb-4 md:mb-6">
                  With support available in 10+ regional languages, we make it easy for you to guide your followers and help them secure opportunities, regardless of language preferences.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["हिंदी", "தமிழ்", "తెలుగు", "ಕನ್ನಡ", "മലയാളം", "বাংলা", "मराठी", "ગુજરાતી"].map((lang, index) => (
                    <span key={index} className="px-3 py-1 rounded-full text-xs md:text-sm bg-slate-800 text-slate-300">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <button className="relative px-5 py-2.5 md:px-6 md:py-3 rounded-lg text-sm md:text-lg font-bold transition-all duration-300 ease-out transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg"></div>
                  <div className="absolute inset-0.5 bg-black rounded-lg"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                    Change Language
                    <Languages className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalStatsSection;
