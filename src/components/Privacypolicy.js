import React, { useState } from "react";
import { Search } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: `Welcome to Hirecentive Social, operated by Hirecentive Network Technologies LLP, a company registered in Karnataka, India ("Company," "we," "us," or "our"). This Privacy Policy explains how we collect, use, store, process, and protect your personal data when you use our platform ("Platform"). By accessing or using our Platform, you consent to the practices described in this Privacy Policy. If you do not agree, you must discontinue use immediately.

      This Policy complies with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, the Consumer Protection Act, 2019, and other applicable Indian laws, including forthcoming data privacy regulations.`,
    },
    {
      id: 2,
      title: "Information We Collect",
      content: `We collect the following types of information:
      A. Personal Information:
      • Full Name, Date of Birth, Gender
      • Contact Details (Email Address, Phone Number, Address)
      • Social Media Profiles (for Influencers)
      • Employment Information (Work Experience, Skills, Education, Resume, Job Preferences)
      • Bank or Payment Information (for incentive disbursements)
      • Identification Documents (as required by law for verification)
      
      B. Non-Personal Information:
      • IP Address, Browser Type, Device Information
      • Cookies, Tracking Technologies, and Usage Data
      • Aggregated Data (Non-identifiable user trends)`,
    },
    {
      id: 3,
      title: "How We Collect Your Information",
      content: `We collect your data through multiple channels, including:
      • Directly from you when you sign up, update your profile, or communicate with us.
      • Automatically through cookies, tracking technologies, and analytics tools.
      • From third-party sources such as employer verification databases, recruitment partners, and publicly available sources.`,
    },
    {
      id: 4,
      title: "How We Use Your Information",
      content: `We use your data for the following purposes:
      • Job Matching & Recruitment
      • Influencer Incentives
      • Verification & Security
      • Marketing & Communication
      • Personalization & Analytics
      • Legal & Regulatory Compliance`,
    },
    {
      id: 5,
      title: "Data Sharing & Disclosure",
      content: `We may share your data with:
      • Employers & Recruiters
      • Payment Processors
      • Legal & Regulatory Authorities
      • Service Providers & Partners
      • Affiliated Companies & Business Transfers
      We do not sell or rent your personal data to third parties.`,
    },
    {
      id: 6,
      title: "Data Security & Protection",
      content: `We implement strict security measures to safeguard your data, including:
      • Encryption
      • Access Controls
      • Firewalls & Intrusion Detection
      • Regular Security Audits
      • Incident Response Protocols.`,
    },
    {
      id: 7,
      title: "User Rights & Choices",
      content: `Under applicable data protection laws, you have the right to:
      • Access & Review your data
      • Correct & Update inaccurate data
      • Request Deletion & Restriction
      • Opt-Out of Marketing
      • Request Data Portability
      Contact us at connect@hirecentive.com for requests.`,
    },
    {
      id: 8,
      title: "Cookies & Tracking Technologies",
      content: `We use cookies to enhance user experience and analyze Platform performance:
        • Essential Cookies: Necessary for platform functionality.
        • Analytics Cookies: Track usage patterns to improve services.
        • Marketing Cookies: Provide personalized job recommendations.
        You can modify cookie preferences via browser settings.`,
    },
    {
      id: 9,
      title: "Third-Party Links & Services",
      content: `Our Platform may contain links to third-party websites. We are not responsible for their privacy practices, and users should review external policies independently.`,
    },
    {
      id: 10,
      title: "International Data Transfers",
      content: `Your data may be processed outside of India in compliance with applicable laws and safeguards.`,
    },
    {
      id: 11,
      title: "Children's Privacy",
      content: `Our Platform is not intended for users under 18. We do not knowingly collect data from minors. If discovered, such data will be deleted immediately.`,
    },
    {
      id: 12,
      title: "Legal Compliance & Dispute Resolution",
      content: `• Governing Law: This Privacy Policy is governed by the laws of India.
        • Jurisdiction: Any disputes will be resolved exclusively in the courts of Karnataka, India.
        • Dispute Resolution: We encourage users to contact us directly in case of disputes before pursuing legal actions.`,
    },
    {
      id: 13,
      title: "Policy Updates & Changes",
      content: `We may update this Privacy Policy periodically. Users will be notified of significant changes, and continued use of the Platform constitutes acceptance of the updated terms.`,
    },
    {
      id: 14,
      title: "Contact Information",
      content: `For any privacy-related inquiries, contact us at:
        • Email: connect@hirecentive.com
        • Address: Hirecentive Network Technologies LLP, Mangalore - 575004.
        • Grievance Officer:
        • Email: connect@hirecentive.com
        By using Hirecentive Social, you acknowledge that you have read, understood, and agreed to this Privacy Policy in full.`,
    },
  ];

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="min-h-screen bg-black py-8 sm:py-14 px-4 sm:px-6 md:px-16 lg:px-32">
        <ParticleCanvas />

        <div className="relative px-2 sm:px-4 md:px-0">
          {/* Header */}
          <section className="text-center mb-10 sm:mb-16 min-h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold p-2 sm:p-4 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text leading-tight">
              Hirecentive
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold p-2 sm:p-4 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text inline-block leading-tight">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto my-2 sm:my-4 px-2">
              Your privacy is important to us. Read how we protect your data.
            </p>
          </section>

          {/* Home button - fixed position with responsive sizing */}
          <div className="fixed top-4 sm:top-8 left-4 sm:left-8 z-50 animate-fade-in inline-block">
            <Link to="/">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center bg-black rounded-full border border-slate-800 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/9e8806_f802bd961b9a4c20995641de0ba09cf0~mv2.png"
                    alt="Hirecentive Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Search Bar - more compact on mobile */}
          <div className="mb-8 sm:mb-8 relative z-50">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search privacy policy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg bg-gray-800/50 border border-gray-700 
      focus:ring-2 focus:ring-cyan-400 outline-none text-white placeholder-gray-400"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Content sections with responsive spacing and font sizes */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-black/50 backdrop-blur-lg p-6 md:p-8 rounded-lg border border-gray-800 shadow-lg min-h-full">
            {filteredSections.map((section) => {
              const isExpanded = expandedSections[section.id];
              return (
                <div key={section.id} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-black/50 backdrop-blur-lg p-6 md:p-8 rounded-lg border border-gray-800 shadow-lg min-h-full">
                    <h2 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text mb-4">
                      {section.title}
                    </h2>
                    <p
                      className={`text-gray-300 whitespace-pre-line leading-relaxed transition-all duration-300 ${
                        isExpanded ? "line-clamp-none" : "line-clamp-4"
                      }`}
                    >
                      {section.content}
                    </p>
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer - responsive text size */}
          <div className="mt-10 sm:mt-16 text-center">
            <p className="text-base sm:text-lg text-gray-400">
              For any privacy-related inquiries, contact us at:
            </p>
            <a
              href="mailto:connect@hirecentive.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-base sm:text-lg block mt-1 sm:mt-2"
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

export default PrivacyPolicy;
