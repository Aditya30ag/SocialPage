import React from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  Calendar,
  CheckCircle2,
} from "lucide-react";

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
    <section className="py-24 relative min-h-screen" id="how-it-works">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>
      <div className="max-w-6xl mx-auto px-6 md:px-24 relative">
      <h2 className="relative text-4xl md:text-6xl font-bold text-center mb-24 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
          Your Followers Deserve Opportunities. Here’s How It Works
        </h2>
        <p className="text-xl text-slate-400 text-center mb-16 max-w-3xl mx-auto">
          No complex forms. No long waiting. Start working within 48 hours.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800 hover:scale-105 transition-all duration-300 h-[260px] flex flex-col justify-center">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 mx-auto`}
                >
                  <step.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-center text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Current Stats Banner */}
        <div className="mt-16 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
          <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-xl border border-slate-800">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  3,500+
                </div>
                <div className="text-slate-400">Jobs Filled Today</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-400 mb-2">
                  85%
                </div>
                <div className="text-slate-400">Start Within 24h</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">
                  95%
                </div>
                <div className="text-slate-400">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickApplyProcess;
