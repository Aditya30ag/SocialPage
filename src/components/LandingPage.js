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
      image: "/api/placeholder/64/64",
      quote:
        "Earned ₹20,000 in a month by helping 15 local drivers find work through Hirecentive Social.",
      earnings: "$35,000",
      platform: "Instagram",
    },
    {
      name: "Rohan Iyer",
      role: "LinkedIn Thought Leader",
      image: "/api/placeholder/64/64",
      quote:
        "Assisted 20 local artisans in selling online, making ₹25,000 while supporting small businesses",
      earnings: "$25,000",
      platform: "LinkedIn",
    },
    {
      name: "Priya Sharma",
      role: "Career Coach",
      image: "/api/placeholder/64/64",
      quote:
        "Connected 10 job seekers to retail jobs and grew her influence while earning ₹10,000 in rewards",
      earnings: "$42,000",
      platform: "Twitter",
    },
  ];

  const trustBadges = [
    { icon: Shield, label: "256-bit Encryption" },
    { icon: Clock, label: "48h Payment Guarantee" },
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
    <div className="min-h-screen bg-black text-slate-50 font-sans overflow-hidden">
      {/* Animated Background - Enhanced gradient animation */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600/30 via-transparent to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyan-400/30 via-transparent to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Hero Section - Improved typography and spacing */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-24 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black opacity-90"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-25 animate-pulse"></div>
            <h1 className="relative p-8 text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text leading-tight tracking-tight">
              Empower Your Network Earn Rewards
            </h1>
          </div>

          <p className="text-xl md:text-3xl mb-12 text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
            Turn your influence into opportunities for others while building
            your passive income. Together, let's bridge the gap between jobs and
            job seekers in your community
          </p>

          <button className="group relative px-10 py-5 rounded-2xl text-2xl font-bold transition-all duration-300 ease-out hover:scale-105 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 opacity-90 rounded-2xl"></div>
            <div className="absolute inset-0.5 bg-black rounded-2xl"></div>
            <span className="relative z-10 flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Join as an Influencer
              <ExternalLink className="w-6 h-6 text-cyan-400 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <p className="text-lg md:text-xl text-slate-400 font-light mt-8">
            No upfront costs. Quick registration. Start making a difference
            today!
          </p>
        </div>
      </section>

      {/* Companies Marquee - Improved spacing and animation */}
      <div className="py-16 bg-black/60 backdrop-blur-xl relative overflow-hidden border-t border-b border-slate-800/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...companies, ...companies].map((company, index) => (
            <span
              key={index}
              className="mx-12 text-2xl font-light text-slate-400 hover:text-cyan-400 transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </div>
      </div>

      {/* How It Works - Consistent card heights and improved spacing */}
      <section className="py-32 px-6 md:px-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black"></div>
        <h2 className="relative text-4xl md:text-6xl font-bold text-center mb-24 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
          Three Steps to Success
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 relative">
          {[
            {
              title: "Share Opportunities",
              description:
                "Register to get your unique link and share it with your followers.",
              icon: "🔗",
            },
            {
              title: "Build Connections",
              description:
                "Help job seekers connect with local employers looking for their skills.",
              icon: "📱",
            },
            {
              title: "Earn Rewards",
              description:
                "Get paid for every successful hire through your link. No limits on earning potential!",
              icon: "💸",
            },
          ].map((step, index) => (
            <div key={index} className="group relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative h-full bg-black/80 rounded-xl p-10 border border-slate-800 hover:scale-105 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
                <div>
                  <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <p className="relative text-2xl md:text-3xl font-light text-center text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Every connection you make not only changes a life but also helps you
            grow financially.
          </p>
        </div>
      </section>

      <LocalStatsSection />
      {/* Testimonials Section */}
      <section className="py-24 relative font-inter">
  <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>
  <div className="max-w-6xl mx-auto px-6 md:px-24 relative">
    <h2 className="relative text-4xl md:text-6xl font-bold text-center mb-24 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
      Real Stories, Real Impact
    </h2>
    <div className="grid md:grid-cols-3 gap-8 items-stretch">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="group relative h-full">
          {/* Outer glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur-lg opacity-30 group-hover:opacity-80 transition duration-300"></div>

          {/* Card container */}
          <div className="relative bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800 shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-cyan-500/50 h-full flex flex-col">
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
      <Contact/>

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-400/20 blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 md:px-24 grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Trust Badges */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-24">
          <div className="flex justify-center space-x-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center text-slate-400">
                <badge.icon className="w-5 h-5 mr-2" />
                <span className="text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Calculator Button */}
      {/* <button className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-400 to-violet-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 group">
        <Calculator className="w-6 h-6" />
        <span className="absolute right-full mr-2 bg-black px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Calculate Earnings
        </span>
      </button> */}

      {/* Chat Support Button */}
      {/* <button className="fixed bottom-6 left-6 bg-gradient-to-r from-cyan-400 to-violet-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 group">
        <MessageCircle className="w-6 h-6" />
        <span className="absolute left-full ml-2 bg-black px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with Support
        </span>
      </button> */}

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 md:px-24 relative" id="faqs">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>
        <h2 className="relative text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {
                q: "How do earnings work?",
                a: "You earn a commission for every successful job placement through your referral link. Payments are processed directly to your bank account within 48 hours of placement confirmation.",
              },
              {
                q: "What kinds of jobs can I share?",
                a: "We focus on entry-level and mid-level positions across various industries including tech, sales, marketing, operations, and customer service.",
              },
              {
                q: "Is there any cost to join?",
                a: "No, it's completely free to join and share opportunities. You only earn, never pay.",
              },
              {
                q: "How do I track my referrals?",
                a: "You get access to a personalized dashboard where you can track all referrals, applications, and earnings in real-time.",
              },
              {
                q: "What are the payment methods?",
                a: "We support multiple payment methods including direct bank transfer, PayPal, and cryptocurrency transfers for international influencers.",
              },
              {
                q: "How much can I earn per referral?",
                a: "Earnings vary based on the position and company, typically ranging from $500 to $5000 per successful placement.",
              },
              {
                q: "Can I refer international candidates?",
                a: "Yes, we accept international referrals. Many of our partner companies offer visa sponsorship for exceptional candidates.",
              },
              {
                q: "What happens after I refer someone?",
                a: "You'll receive real-time updates on your dashboard about their application status, interviews, and eventual placement.",
              },
              {
                q: "How long does the hiring process take?",
                a: "The process typically takes 2-4 weeks, though this can vary depending on the position and company requirements.",
              },
              {
                q: "Are there any referral limits?",
                a: "No limits! You can refer as many qualified candidates as you want and earn for each successful placement.",
              },
              {
                q: "What information do I need to refer someone?",
                a: "Basic details like name, email, and their preferred job categories. Candidates will complete their full profiles later.",
              },
              {
                q: "Do you offer support for influencers?",
                a: "Yes, you get a dedicated success manager and access to our influencer community for tips and best practices.",
              },
            ].map((faq, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                <button
                  onClick={() =>
                    setIsVisible((prev) => ({ ...prev, [index]: !prev[index] }))
                  }
                  className="w-full text-left relative"
                >
                  <div className="relative bg-black/40 backdrop-blur-xl p-4 rounded-lg border border-slate-800 transition-all duration-300 h-full">
                    <div className="flex justify-between items-center">
                      <span className="font-bold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text text-sm">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`transform transition-transform text-cyan-400 w-4 h-4 flex-shrink-0 ml-2 ${
                          isVisible[index] ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {isVisible[index] && (
                      <div className="mt-3 text-slate-400 text-sm">{faq.a}</div>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <button className="group relative px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg opacity-75"></div>
              <div className="absolute inset-0.5 bg-black rounded-lg"></div>
              <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                View More FAQs
                <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
              </span>
            </button>
          </div>
        </div>
      </section>

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
