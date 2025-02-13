import React from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  Calendar,
} from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";

const QuickApplyProcess = () => {
  const steps = [
    {
      icon: Phone,
      title: "Share Your Number",
      description: "Just enter your phone number - no lengthy forms needed",
      color: "from-cyan-400 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Select Location",
      description: "Choose your preferred work location within your city",
      color: "from-violet-400 to-violet-500",
    },
    {
      icon: MessageSquare,
      title: "Quick Chat",
      description: "Brief chat with employer in your language",
      color: "from-purple-400 to-purple-500",
    },
    {
      icon: Calendar,
      title: "Start Working",
      description: "Begin your new job within 24-48 hours",
      color: "from-amber-400 to-amber-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative min-h-screen" id="how-it-works">
      <ParticleCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
          Your Followers Deserve Opportunities. Here’s How It Works
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
          No complex forms. No long waiting. Start working within 48 hours.
        </p>

        {/* Steps Section - Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Gradient Background Hover Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>

              {/* Card */}
              <div className="relative bg-black/40 backdrop-blur-xl p-4 sm:p-6 rounded-xl border border-slate-800 hover:scale-[1.03] transition-all duration-300 h-[220px] sm:h-[260px] flex flex-col justify-center">
                {/* Icon */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 sm:mb-6 mx-auto`}
                >
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>

                {/* Step Title */}
                <h3 className="text-sm sm:text-base font-bold text-center mb-2 sm:mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
          <div className="relative bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-xl border border-slate-800">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">
                  3,500+
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Jobs Filled This Month</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-violet-400 mb-1 sm:mb-2">
                  85%
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Start Within 24h</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1 sm:mb-2">
                  95%
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickApplyProcess;
