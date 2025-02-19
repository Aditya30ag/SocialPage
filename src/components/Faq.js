import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  // Sample FAQ data - replace with your actual FAQs
  const faqs = [
    {
      q: "What is Hirecentive Social?",
      a: "Hirecentive Social is a platform designed for influencers to monetize their reach effortlessly. By sharing a unique link with their audience, influencers help job seekers find local opportunities while earning commissions on successful referrals.",
    },
    {
      q: "How do I sign up as an influencer?",
      a: "Simply visit Hirecentive Social’s landing page, fill out the form, and submit your details. Once verified, you’ll receive access to your dashboard and unique referral link.",
    },
    {
      q: "Is there any fee to join Hirecentive Social?",
      a: "No, joining Hirecentive Social is completely free. We don’t charge influencers anything to participate.",
    },
    {
      q: "How does Hirecentive Social work for influencers?",
      a: "1. Sign up and get verified.\n2. Receive your unique referral link.\n3. Share it on your social platforms (bio, stories, reels, posts, etc.).\n4. Job seekers apply through your link.\n5. Earn commissions for every successful referral.",
    },
    {
      q: "How do I earn money with Hirecentive Social?",
      a: "Whenever a job seeker registers and gets hired through your link, you earn a commission. Your dashboard tracks clicks, sign-ups, and earnings in real time.",
    },
    {
      q: "What kind of job seekers should I target?",
      a: "Anyone actively looking for a job! This includes freshers, experienced professionals, gig workers, freelancers, and those seeking local job opportunities.",
    },
    {
      q: "Do I have to create custom content for Hirecentive?",
      a: "No! You can integrate Hirecentive naturally into your existing content. We provide engaging story templates and reel ending clips to increase interaction, but there’s no compulsion to use them.",
    },
    {
      q: "Can I share my link on multiple platforms?",
      a: "Yes! You can share your referral link on Instagram, YouTube, Twitter, LinkedIn, Telegram, and even WhatsApp groups—wherever your audience is most active.",
    },
    {
      q: "How do I track my performance and earnings?",
      a: "Your dashboard provides real-time insights into the number of clicks, sign-ups, and commissions earned from your referrals.",
    },
    {
      q: "When and how do I get paid?",
      a: "Payouts are processed weekly or monthly (depending on the volume) via bank transfer or UPI. You’ll need to provide your payment details in your dashboard.",
    },
    {
      q: "Is there a limit to how much I can earn?",
      a: "No! Your earnings depend entirely on your reach and engagement. The more job seekers sign up and get hired through your link, the more you earn.",
    },
    {
      q: "What if a job seeker applies but doesn’t get hired?",
      a: "You earn a commission only when a referral gets hired, but their details remain in our system for future opportunities. The more relevant leads you generate, the higher your chances of earning.",
    },
    {
      q: "How does Hirecentive verify influencers?",
      a: "We manually review influencer applications based on factors like audience size, engagement, and platform authenticity before granting access.",
    },
    {
      q: "What types of jobs are available for job seekers?",
      a: "Hirecentive provides opportunities across multiple industries, including tech, operations, customer support, sales, and gig-based roles. We use Google Location API to match people with hyperlocal jobs.",
    },
    {
      q: "Can I promote Hirecentive Social if I’m a micro-influencer?",
      a: "Absolutely! Even if you have a smaller audience, high engagement and trust can drive great results.",
    },
    {
      q: "Can I customize my referral link?",
      a: "Not currently, but you can shorten it using bit.ly or other link shorteners to make it more shareable.",
    },
    {
      q: "What happens if I stop promoting Hirecentive Social?",
      a: "There’s no obligation to continue, and you can start or stop at any time. However, the more consistently you share, the higher your potential earnings.",
    },
    {
      q: "Can I collaborate with Hirecentive for exclusive influencer partnerships?",
      a: "Yes! We are open to deeper collaborations, including brand partnerships, content campaigns, and exclusive incentives for top-performing influencers.",
    },
    {
      q: "Will I get any support or content guidance from Hirecentive?",
      a: "Yes, we provide ready-to-use templates, marketing insights, and growth strategies to help maximize your earnings.",
    },
    {
      q: "Where can I reach out for more questions or support?",
      a: "You can contact us via WhatsApp, email, or through the support section in your dashboard.",
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