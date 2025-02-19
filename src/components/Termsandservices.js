import React, { useState } from "react";
import { Search } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: `Welcome to Hirecentive Social, operated by Hirecentive Network Technologies LLP, a company registered in Karnataka, India (hereinafter referred to as "Company," "we," "us," or "our"). These Terms and Conditions ("Terms") govern the use of the Hirecentive Social platform ("Platform") by all users, including job seekers, influencers, recruiters, and businesses ("Users"). By accessing or using the Platform, you expressly agree to be bound by these legally binding Terms. If you do not agree to these Terms, you must immediately discontinue use of the Platform.`,
    },
    {
      id: 2,
      title: "Services Provided",
      content: `Hirecentive Social is a job-matching and influencer-based recruitment platform that enables influencers to refer job seekers using a unique referral link. Users understand and acknowledge that the Platform is solely a facilitator of job connections and does not guarantee employment. Influencers who refer candidates may receive incentives based on successful placements, subject to Hirecentive Social’s sole discretion and verification processes.`,
    },
    {
      id: 3,
      title: "Eligibility & Compliance",
      content: `Users must be at least 18 years old and legally competent to enter binding contracts under Indian law. Users agree to provide only true, complete, and accurate information at all times. Employers and recruiters must comply with all applicable employment laws and regulations in their respective jurisdictions.`,
    },
    {
      id: 4,
      title: "User Obligations & Prohibited Conduct",
      content: `Users expressly agree to refrain from posting, submitting, or endorsing any false, misleading, or fraudulent job listings. Users must not engage in spamming, phishing, data scraping, or unauthorized commercial use of the Platform.`,
    },
    {
      id: 5,
      title: "Payment, Incentives & Tax Liability",
      content: `Influencer incentives will be determined exclusively by Hirecentive Social. Payments will only be processed after successful job placements and verification by Hirecentive Social.`,
    },
    {
      id: 6,
      title: "Communication & Notifications",
      content: `Hirecentive Social will send notifications and important updates through email and WhatsApp. The mode of communication may be subject to change, and users will receive prior notice before any modifications take effect. Users must ensure that their contact details are accurate and up to date to avoid missing critical information.`,
    },
    {
      id: 7,
      title: "Liability, Disclaimers & Indemnification",
      content: `Hirecentive Social does not guarantee job placement, security, or employment outcomes. Users acknowledge that they use the Platform at their own risk.`,
    },
    {
      id: 8,
      title: "Account Termination & Enforcement",
      content: `Hirecentive Social may immediately suspend or terminate accounts violating these Terms without prior notice.`,
    },
    {
      id: 9,
      title: "Intellectual Property & Restrictions",
      content: `All trademarks, content, software, and proprietary information on the Platform exclusively belong to Hirecentive Network Technologies LLP.`,
    },
    {
      id: 10,
      title: "Legal Compliance & Dispute Resolution",
      content: `Users agree that all legal matters related to the Platform shall be governed exclusively by the laws of India.`,
    },
    {
      id: 11,
      title: "Policy Updates & User Acceptance",
      content: `Hirecentive Social reserves the unilateral right to update, modify, or replace these Terms at any time.`,
    },
    {
      id: 12,
      title: "Indemnification",
      content: `Users agree to indemnify the Company, its directors, and affiliates against all claims, losses, legal fees, or damages resulting from a breach of these Terms.`,
    },
    {
      id: 13,
      title: "Updates and Severability",
      content: `The Company may amend these Terms unilaterally. Continued use post-update constitutes acceptance.`,
    },
    {
      id: 14,
      title: "Grievance Officer",
      content: `For complaints or reporting violations, contact: Email: connect@hirecentive.com Address: Hirecentive Network Technologies LLP, Mangalore - 575004.`,
    },
    {
      id: 15,
      title: "Miscellaneous",
      content: `Force Majeure: The Company is not liable for delays or failures due to events beyond reasonable control.`,
    },
    {
      id: 15,
      title: "NO GUARANTEE OF EMPLOYMENT",
      content: `Hirecentive Social does not and cannot guarantee that every candidate using the platform will secure a job. While we strive to provide the best possible job opportunities by leveraging AI-driven job matching and recruiter networks, employment decisions remain solely at the discretion of hiring companies. Users are encouraged to actively engage in job applications and networking to enhance their chances of securing employment.
`,
    },
    {
      id: 15,
      title: " BACKGROUND CHECKS & USER HONEST",
      content: `Hirecentive Social expects all users to provide honest and accurate information regarding their profiles, job experience, and any other credentials submitted. While Hirecentive may conduct background checks at its discretion, we do not guarantee the verification of every user or employer on the platform. Employers are responsible for conducting their own due diligence before hiring any candidate. Any misrepresentation by users may lead to account suspension or legal action.
`,
    },
  ];

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900/100 to-black">
      <div className="relative min-h-full w-full">
        <ParticleCanvas />
        
        {/* Main Content Container */}
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 pb-20">
          {/* Home Link */}
          <div className="fixed top-4 left-4 sm:top-8 sm:left-8 z-50">
            <Link to="/" className="block">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                <div className="relative w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center bg-black rounded-full border border-slate-800 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/9e8806_f802bd961b9a4c20995641de0ba09cf0~mv2.png"
                    alt="Hirecentive Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Hirecentive
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              Terms & Conditions
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our platform
            </p>
          </header>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12 px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg bg-gray-800/50 border border-gray-700 
                focus:ring-2 focus:ring-cyan-400 outline-none text-white placeholder-gray-400
                text-sm sm:text-base transition-all duration-200"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Content Grid */}
          <main className="relative">
            
            <div className="relative bg-black/50 backdrop-blur-lg p-4 sm:p-6 rounded-lg border border-gray-800 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {filteredSections.map((section) => (
                  <article key={section.id} className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-black/50 backdrop-blur-lg p-4 sm:p-6 rounded-lg border border-gray-800 shadow-lg h-full flex flex-col">
                      <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text mb-3">
                        {section.title}
                      </h3>
                      <p className={`text-sm sm:text-base text-gray-300 whitespace-pre-line leading-relaxed flex-grow
                        ${expandedSections[section.id] ? "line-clamp-none" : "line-clamp-3 sm:line-clamp-4"}`}>
                        {section.content}
                      </p>
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="mt-4 text-sm sm:text-base text-cyan-400 hover:text-cyan-300 transition-colors self-start
                        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black
                        rounded px-2 py-1"
                      >
                        {expandedSections[section.id] ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </main>

          {/* Contact Section */}
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-base sm:text-lg text-gray-400">
              For any inquiries, contact us at:
            </p>
            <a
              href="mailto:connect@hirecentive.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-base sm:text-lg inline-block mt-2
              focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black
              rounded px-2 py-1"
            >
              connect@hirecentive.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
