import React, { useState, useEffect } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import Footer from "./Footer";
import {
  DollarSign,
  Users,
  Building2,
  Award,
  Shield,
  Clock,
  Wallet,
} from "lucide-react";
import JobCategoriesSection from "./JobCategorySection";
import LocalStatsSection from "./LocalStatsSection";
// import SuccessStoriesSection from "./SuccessStoriesSection";
import QuickApplyProcess from "./QuickApplyProcess";
import Contact from "./Contact";
import ParticleCanvas from "./ParticleCanvas";
import IntroAnimation from "./IntroAnimation ";
import FAQSection from "./Faq";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);

  const stats = [
    { icon: DollarSign, value: "₹1.2 Cr+", label: "Paid to Influencers" },
    { icon: Users, value: "12,000+", label: "Successful Placements" },
    { icon: Building2, value: "500+", label: "Partner Companies" },
    { icon: Award, value: "92%", label: "Success Rate" },
  ];

  const testimonials = [
    {
      name: "Sahil Khan",
      role: "Tech Influencer",
      image: "/image1.png",
      quote:
        "Earned ₹20,000 in a month by helping 15 local drivers find work through Hirecentive Social.",
      earnings: "₹35,000",
      platform: "Instagram",
    },
    {
      name: "Rohan Iyer",
      role: "LinkedIn Thought Leader",
      image: "/image2.png",
      quote:
        "Assisted 20 local artisans in selling online, making ₹25,000 while supporting small businesses",
      earnings: "₹25,000",
      platform: "LinkedIn",
    },
    {
      name: "Priya Sharma",
      role: "Career Coach",
      image: "/image3.png",
      quote:
        "Connected 10 job seekers to retail jobs and grew her influence while earning ₹10,000 in rewards",
      earnings: "₹42,000",
      platform: "Twitter",
    },
  ];

  const trustBadges = [
    { icon: Shield, label: "256-bit Encryption" },
    { icon: Clock, label: "48h Payment Guarantee *" },
    { icon: Wallet, label: "Secure Transactions" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);

  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "Meta",
    "Apple",
    "Uber",
    "Airbnb",
    "Tesla",
    "Netflix",
    "Spotify",
    "Twitter",
    "LinkedIn",
    "Adobe",
    "Slack",
    "Zoom",
  ];
  
  return (
    <div className="min-h-screen bg-black text-slate-50 font-sans overflow-hidden" id="home">
     
      <IntroAnimation/>

      {/* Companies Marquee */}
      <div className="py-8 bg-black/60 backdrop-blur-xl border-t border-b border-slate-800/50 overflow-hidden relative">
        <div className="w-full overflow-hidden">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap min-w-full">
            {[...companies, ...companies].map((company, index) => (
              <span
                key={index}
                className="text-xl sm:text-2xl md:text-3xl font-light text-slate-400 hover:text-cyan-400 transition-colors cursor-default"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 md:px-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black blur-3xl"></div>
        <h2 className="relative text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-16 sm:mb-24 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
          Three Steps to Success
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 relative">
          {[
            {
              title: "Unlock Opportunities",
              description:
                "Register to get your unique link and share it with your followers.",
              icon: "🔗",
            },
            {
              title: "Help Build Connections",
              description:
                "Help job seekers connect with local employers looking for their skills.",
              icon: "📱",
            },
            {
              title: "Earn Incentives!",
              description:
                "Get paid for every successful hire through your link. No limits on earning potential!",
              icon: "💸",
            },
          ].map((step, index) => (
            <div key={index} className="group relative h-full">
              {/* Consistent hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative h-full bg-black/80 rounded-xl p-6 sm:p-8 md:p-10 border border-slate-800 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between group-hover:scale-[1.03] group-hover:shadow-lg group-hover:shadow-cyan-500">
                <div>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 transform transition-transform group-hover:scale-110">
                    {step.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 sm:mt-16">
          
          <p className="relative text-center text-lg md:text-2xl font-bold text-gray-400 mt-20 max-w-2xl mx-auto leading-relaxed">
          Every connection you create not only makes an impact but also rewards you with incentives while making a difference.
          </p>
        </div>
      </section>

      <LocalStatsSection />
      {/* Testimonials Section */}
      <section className="py-24 relative font-inter">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black blur-2xl"></div>
        <div className="max-w-6xl mx-auto px-6 md:px-24 relative">
          <h2 className="relative text-4xl md:text-6xl font-bold text-center mb-24 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
            Real Stories, Real Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative h-full">
                {/* Consistent outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>

                {/* Card container with consistent hover effect */}
                <div className="relative bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800 shadow-lg transition-all duration-300 transform group-hover:scale-[1.03] group-hover:shadow-lg group-hover:shadow-cyan-500/20 h-full flex flex-col">
                  <div className="flex items-center mb-5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-cyan-400 shadow-lg"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-lg text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6 italic flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-cyan-400 font-bold text-lg">
                      {testimonial.earnings}/month
                    </div>
                    <div className="text-slate-400 text-sm">
                      via {testimonial.platform}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <JobCategoriesSection />

      {/* <SuccessStoriesSection/> */}
      <QuickApplyProcess />
      {/* Registration Form */}
      <Contact />

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-400/20 blur-3xl"></div> */}

        {/* Content Wrapper */}
        {/* <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-20 group-hover:opacity-80 transition duration-300"></div>
                
                
                <div className="relative bg-black/50 backdrop-blur-lg p-6 sm:p-8 rounded-xl border border-slate-800 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                  <stat.icon className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-4 text-cyan-400 transition-all duration-300 group-hover:scale-110" />
                  <div className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </section>


      {/* Trust Badges */}
      <section className="relative">
        <div className="max-w-4xl mx-auto px-6 md:px-24 ">
          <div className="flex justify-center space-x-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center text-slate-400 group transition-all duration-300 hover:text-cyan-400">
                <badge.icon className="w-5 h-5 mr-2 transition-all duration-300 group-hover:scale-110" />
                <span className="text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection/>

      {/* Footer */}
      <Footer />

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;