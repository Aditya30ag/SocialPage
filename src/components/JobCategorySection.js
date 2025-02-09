import React from 'react';
import { ArrowRight } from 'lucide-react';

const JobCategoriesSection = () => {
  const localJobs = [
    {
      category: "Retail & Shops",
      roles: ["Store Staff", "Cashiers", "Inventory Managers"],
      icon: "🏪",
      count: "2,000+ jobs"
    },
    {
      category: "Hospitality",
      roles: ["Restaurant Staff", "Hotel Staff", "Cafe Workers"],
      icon: "🏨",
      count: "1,500+ jobs"
    },
    {
      category: "Local Services",
      roles: ["Delivery Partners", "Field Sales", "Customer Service"],
      icon: "🛵",
      count: "3,000+ jobs"
    },
    {
      category: "Office Jobs",
      roles: ["Data Entry", "Back Office", "Reception"],
      icon: "💼",
      count: "1,000+ jobs"
    },
    {
      category: "Manufacturing",
      roles: ["Factory Workers", "Supervisors", "Quality Check"],
      icon: "🏭",
      count: "2,500+ jobs"
    },
    {
      category: "Education & Tutoring",
      roles: ["Home Tutors", "Coaching Staff", "School Assistants"],
      icon: "📚",
      count: "800+ jobs"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-24 relative font-sans">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
      <h2 className="relative text-4xl md:text-6xl font-bold text-center mb-24 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
          Local Jobs Near You
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-400 text-center mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          Find opportunities in your neighborhood. No complex requirements, start working within 48 hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {localJobs.map((job, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              
              <div className="relative bg-black rounded-xl p-8 border border-slate-800 hover:scale-105 transition-all duration-300 backdrop-blur-xl h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl">{job.icon}</div>
                  <div className="text-sm font-medium text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full">
                    {job.count}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                  {job.category}
                </h3>
                
                <ul className="space-y-3 flex-grow">
                  {job.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="text-slate-300 flex items-center group/item">
                      <ArrowRight className="w-4 h-4 mr-2 text-cyan-400 transition-transform group-hover/item:translate-x-1" />
                      <span className="font-medium">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <button className="group relative px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 ease-out hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl"></div>
            <div className="absolute inset-0.5 bg-black rounded-xl"></div>
            <span className="relative z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              View All Categories
              <ArrowRight className="w-5 h-5 text-cyan-400 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default JobCategoriesSection;