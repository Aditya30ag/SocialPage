import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  // Sample FAQ data - replace with your actual FAQs
  const faqs = [
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
  ];

  // State for tracking which FAQs are visible
  const [isVisible, setIsVisible] = useState({});
  
  // State for tracking if all FAQs are shown
  const [showAll, setShowAll] = useState(false);
  
  // Initialize with 4 FAQs for mobile
  const initialVisibleCount = 4;
  
  // Get FAQs to display based on current state
  const visibleFaqs = showAll ? faqs : faqs.slice(0, initialVisibleCount);

  return (
    <section className="py-16 md:py-24 px-6 md:px-24 relative" id="faqs">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>
      
      <h2 className="relative text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
        Frequently Asked Questions
      </h2>
      
      <div className="max-w-5xl mx-auto relative">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibleFaqs.map((faq, index) => (
            <div key={index} className="group relative">
              {/* Consistent hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
              
              {/* FAQ Button */}
              <button
                onClick={() => setIsVisible((prev) => ({ ...prev, [index]: !prev[index] }))}
                className="w-full text-left relative"
              >
                <div className="relative bg-black/50 backdrop-blur-xl p-5 rounded-lg border border-slate-800 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20 group-hover:scale-[1.03]">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`transform transition-transform text-cyan-400 w-4 h-4 flex-shrink-0 ml-2 ${
                        isVisible[index] ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {isVisible[index] && (
                    <div className="mt-3 text-slate-400 text-sm transition-opacity duration-300">
                      {faq.a}
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
        
        {/* View More/Less Button */}
        {faqs.length > initialVisibleCount && (
          <div className="text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group relative px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg opacity-75"></div>
              <div className="absolute inset-0.5 bg-black rounded-lg"></div>
              <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                {showAll ? (
                  <>
                    Show Less
                    <ChevronUp className="w-4 h-4 text-cyan-400 animate-bounce" />
                  </>
                ) : (
                  <>
                    View More FAQs
                    <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
                  </>
                )}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;