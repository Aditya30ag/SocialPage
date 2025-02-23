import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, ArrowLeft } from 'lucide-react';

// FAQ data
const FAQS = {
  "How can I earn?": `As an influencer on Hirecentive, you can earn by:
• Sharing job opportunities with your network
• Getting paid per successful referral
• Earning bonuses for high-quality candidates
• Participating in special hiring campaigns`,
  
  "What companies can I work with?": `You can work with:
• Fortune 500 companies
• Fast-growing startups
• Tech companies
• Multiple companies simultaneously
All companies are pre-vetted to ensure quality opportunities.`,
  
  "Registration process": `The registration process is simple:
1. Fill out your profile
2. Verify your social media accounts
3. Complete our brief platform training
4. Start sharing opportunities`,
  
  "Payment details": `We offer flexible payment options:
• Direct bank transfers
• Digital wallets
• International payments supported
• Payments processed every 15 days`,
  
  "What type of content should I share?": `You can share:
• Job postings
• Company culture insights
• Interview tips
• Industry insights
All content is provided by us - no need to create your own!`
};

const USER_TYPES = {
  COMPANY: 'company',
  INFLUENCER: 'influencer',
  CANDIDATE: 'candidate'
};

const ChatMessage = ({ message, isUser }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
    <div className={`${isUser ? 'bg-violet-500/20 border-violet-500/50' : 'bg-cyan-500/20 border-cyan-500/50'} 
                     border rounded-lg p-3 max-w-[80%] break-words`}>
      <p className="text-white text-sm whitespace-pre-line">{message}</p>
    </div>
  </div>
);

const ChatOptions = ({ options, onSelect }) => (
  <div className="flex flex-col gap-2 mb-4">
    {options.map((option, index) => (
      <button
        key={index}
        onClick={() => onSelect(option)}
        className="bg-gradient-to-r from-cyan-400/20 to-violet-500/20 border border-cyan-500/50 
                   hover:border-violet-500/50 rounded-lg p-3 text-white text-sm text-left
                   transition-all duration-300 hover:scale-[1.02]"
      >
        {option}
      </button>
    ))}
  </div>
);

const ContactForm = ({ onSubmit, onCancel, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Your Name *"
        required
        className="w-full bg-black/60 border border-slate-700 rounded-lg px-4 py-2 
                  text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
      />
      <input
        type="email"
        placeholder="Email Address *"
        required
        className="w-full bg-black/60 border border-slate-700 rounded-lg px-4 py-2 
                  text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
      />
      <input
        type="tel"
        placeholder="Phone Number *"
        required
        className="w-full bg-black/60 border border-slate-700 rounded-lg px-4 py-2 
                  text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        value={formData.phone}
        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
      />
      <textarea
        placeholder="Your Message *"
        required
        rows={3}
        className="w-full bg-black/60 border border-slate-700 rounded-lg px-4 py-2 
                  text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-lg text-slate-300 
                    hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg px-4 py-2 
                    text-white hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-slate-700 rounded-lg text-slate-300 
                    hover:bg-slate-700/50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [userType, setUserType] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);
  const [optionsHistory, setOptionsHistory] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate typing effect
  const addMessageWithDelay = (message, isUser = false) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: message, isUser }]);
      if (!isUser) {
        setMessageHistory(prev => [...prev, { messages: [...messages, { text: message, isUser }], options: currentOptions }]);
      }
      setIsTyping(false);
    }, 500);
  };
  const handleBack = () => {
    if (messageHistory.length > 0) {
      const previousState = messageHistory[messageHistory.length - 2] || messageHistory[0];
      setMessages(previousState.messages);
      setCurrentOptions(previousState.options);
      setMessageHistory(prev => prev.slice(0, -1));
      setShowContactForm(false);
    } else {
      // Reset to initial state
      setMessages([]);
      setUserType(null);
      addMessageWithDelay("Welcome to Hirecentive! Please select who you are:");
      setCurrentOptions([
        "I'm a company hiring",
        "I'm an influencer",
        "I'm looking for a job"
      ]);
    }
  };
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessageWithDelay("Welcome to Hirecentive! Please select who you are:");
      setCurrentOptions([
        "I'm a company hiring",
        "I'm an influencer",
        "I'm looking for a job"
      ]);
    }
  }, [isOpen]);

  const handleUserTypeSelection = (selection) => {
    let type;
    let response;
    let nextOptions;
    setShowBackButton(true); 
    switch (selection) {
      case "I'm a company hiring":
        type = USER_TYPES.COMPANY;
        response = "Great! You can register your company at register.hirecentive.com/company to start hiring through our network.";
        nextOptions = ["Learn More", "Contact Support", "Close Chat"];
        break;
      case "I'm an influencer":
        type = USER_TYPES.INFLUENCER;
        response = "Welcome! Let me help you understand how you can earn with Hirecentive.";
        nextOptions = [
          "How can I earn?",
          "What companies can I work with?",
          "Registration process",
          "Payment details",
          "What type of content should I share?",
          "Contact Support"
        ];
        break;
      case "I'm looking for a job":
        type = USER_TYPES.CANDIDATE;
        response = "Great! You can register to browse opportunities and connect with our network of influencers.";
        nextOptions = ["Register Now!", "Contact Support", "Close Chat"];
        break;
    }

    setUserType(type);
    addMessageWithDelay(response);
    setCurrentOptions(nextOptions);
  };
  const handleMainMenuReturn = () => {
    setMessages([]);
    setUserType(null);
    setShowContactForm(false);
    setShowBackButton(false);
    addMessageWithDelay("Welcome to Hirecentive! Please select who you are:");
    setCurrentOptions([
      "I'm a company hiring",
      "I'm an influencer",
      "I'm looking for a job"
    ]);
  };
  const handleContactFormSubmit = (formData) => {
    console.log('Contact form submitted:', formData);
    setShowContactForm(false);
    addMessageWithDelay("Thank you for reaching out! We'll contact you soon at " + formData.email);
    setCurrentOptions(["Back to Main Menu", "Close Chat"]);
  };

  const handleOptionSelect = (option) => {
    setMessages(prev => [...prev, { text: option, isUser: true }]);
    
    switch (option) {
      case "Contact Support":
        addMessageWithDelay("Please fill out the form below and we'll get back to you soon.");
        setShowContactForm(true);
        setCurrentOptions([]);
        break;

      case "Back to Main Menu":
        setShowContactForm(false);
        setUserType(null);
        addMessageWithDelay("Welcome back! Please select who you are:");
        setCurrentOptions([
          "I'm a company hiring",
          "I'm an influencer",
          "I'm looking for a job"
        ]);
        break;

      case "Close Chat":
        setIsOpen(false);
        break;

      case "Browse Jobs":
        addMessageWithDelay("You can browse all available jobs at jobs.hirecentive.com");
        setCurrentOptions(["Back to Main Menu", "Contact Support", "Close Chat"]);
        break;

      case "Learn More":
        addMessageWithDelay("Our platform connects you with a network of influencers who can help you find the best candidates. Register at register.hirecentive.com/company to get started.");
        setCurrentOptions(["Back to Main Menu", "Contact Support", "Close Chat"]);
        break;

      default:
        if (FAQS[option]) {
          addMessageWithDelay(FAQS[option]);
          setCurrentOptions([
            ...Object.keys(FAQS).filter(faq => faq !== option),
            "Contact Support"
          ]);
        }
    }
  };
  const [showBackButton, setShowBackButton] = useState(false);
  return (
    <>
      {/* Chat Support Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-900 to-cyan-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 group"
      >
          
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute left-full ml-2 bg-black px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with Support
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] 
        bg-black/90 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl 
        flex flex-col overflow-hidden animate-slide-up z-50 overflow-y-auto scrollbar-none">

          {/* Updated Header */}
          <div className="p-4 border-b border-slate-800 bg-gradient-to-r from-cyan-400/10 to-violet-500/10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                {showBackButton && (
                  <button 
                    onClick={handleMainMenuReturn}
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors bg-black/20 py-1 rounded-lg"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm">Main Menu</span>
                  </button>
                )}
                <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                  Hirecentive Assistant
                </h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message.text} isUser={message.isUser} />
            ))}
            {isTyping && (
              <div className="flex gap-2 text-slate-400 items-center">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
              </div>
            )}
            {showContactForm ? (
              <ContactForm 
                onSubmit={handleContactFormSubmit}
                onCancel={() => {
                  setShowContactForm(false);
                  if (userType === USER_TYPES.INFLUENCER) {
                    setCurrentOptions([
                      "How can I earn?",
                      "What companies can I work with?",
                      "Registration process",
                      "Payment details",
                      "What type of content should I share?",
                      "Contact Support"
                    ]);
                  } else {
                    setCurrentOptions(["Back to Main Menu", "Contact Support", "Close Chat"]);
                  }
                }}
                onBack={handleBack}
              />
            ) : (
              currentOptions.length > 0 && (
                <ChatOptions 
                  options={currentOptions} 
                  onSelect={userType ? handleOptionSelect : handleUserTypeSelection} 
                />
              )
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </>
  );
}