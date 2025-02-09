import React from 'react';
import { MapPin, Clock, Languages, Building2 } from 'lucide-react';

const LocalStatsSection = () => {
  const localStats = [
    {
      title: "Average Job Distance",
      value: "< 5 KM",
      description: "Work near your home",
      icon: MapPin
    },
    {
      title: "Fast Hiring Process",
      value: "24-48 Hours",
      description: "Quick job starts",
      icon: Clock
    },
    {
      title: "Languages Supported",
      value: "10+",
      description: "Apply in your language",
      icon: Languages
    },
    {
      title: "Active Opportunities",
      value: "5000+",
      description: "Trusted partners",
      icon: Building2
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-400/20 blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-6 md:px-24">
      <h2 className="relative text-4xl md:text-6xl font-bold text-center mb-24 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
        Jobs That Are Close to Home, Made for Your Network
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {localStats.map((stat, index) => (
            <div key={index} className="text-center group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-slate-200 mb-1">
                  {stat.title}
                </div>
                <div className="text-sm text-slate-400">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="relative text-3xl md:text-3xl font-light text-center mt-12 text-gray-400  ">
        We focus on blue-collar jobs that matter—drivers, helpers, retail workers, and more—ensuring your community thrives
        </p>
        {/* Language Support Banner */}
        <div className="mt-16 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
          <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-xl border border-slate-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                Language Is No Barrier to Success
                </h3>
                <p className="text-slate-300 mb-6">
                With support available in 10+ regional languages, we make it easy for you to guide your followers and help them secure opportunities, regardless of language preferences."

  CTA: "Choose Your Language and Start Today!
                </p>
                <div className="flex flex-wrap gap-3">
                  {["हिंदी", "தமிழ்", "తెలుగు", "ಕನ್ನಡ", "മലയാളം", "বাংলা", "मराठी", "ગુજરાતી"].map((lang, index) => (
                    <span key={index} className="px-3 py-1 rounded-full text-sm bg-slate-800 text-slate-300">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <button className="group relative px-6 py-3 rounded-xl text-lg font-bold transition-all duration-300 ease-out hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl"></div>
                  <div className="absolute inset-0.5 bg-black rounded-xl"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                    Change Language
                    <Languages className="w-5 h-5 text-cyan-400" />
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

