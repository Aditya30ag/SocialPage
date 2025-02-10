import React from "react";
import { ArrowRight } from "lucide-react";

const JobCategoriesSection = () => {
  const localJobs = [
    {
      category: "Retail & Shops",
      roles: ["Store Staff", "Cashiers", "Inventory Managers"],
      icon: "🏪",
      count: "2,000+ jobs",
    },
    {
      category: "Hospitality",
      roles: ["Restaurant Staff", "Hotel Staff", "Cafe Workers"],
      icon: "🏨",
      count: "1,500+ jobs",
    },
    {
      category: "Local Services",
      roles: ["Delivery Partners", "Field Sales", "Customer Service"],
      icon: "🛵",
      count: "3,000+ jobs",
    },
    {
      category: "Office Jobs",
      roles: ["Data Entry", "Back Office", "Reception"],
      icon: "💼",
      count: "1,000+ jobs",
    },
    {
      category: "Manufacturing",
      roles: ["Factory Workers", "Supervisors", "Quality Check"],
      icon: "🏭",
      count: "2,500+ jobs",
    },
    {
      category: "Education & Tutoring",
      roles: ["Home Tutors", "Coaching Staff", "School Assistants"],
      icon: "📚",
      count: "800+ jobs",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-16 lg:px-24 relative font-sans">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
          Local Jobs Near You
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 text-center mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Find opportunities in your neighborhood. No complex requirements,
          start working within 48 hours.
        </p>

        {/* Job Cards - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {localJobs.map((job, index) => (
            <div key={index} className="group relative">
              {/* Gradient Background Hover Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>

              {/* Card */}
              <div className="relative bg-black rounded-xl p-6 md:p-8 border border-slate-800 hover:scale-[1.03] transition-all duration-300 backdrop-blur-lg shadow-md h-full flex flex-col">
                {/* Top Section */}
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl md:text-3xl">{job.icon}</div>
                  <div className="text-[10px] md:text-xs font-medium text-slate-400 bg-slate-800/50 px-2 py-1 rounded-full">
                    {job.count}
                  </div>
                </div>

                {/* Job Category */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                  {job.category}
                </h3>

                {/* Job Roles */}
                <ul className="space-y-2 md:space-y-3 flex-grow">
                  {job.roles.map((role, roleIndex) => (
                    <li
                      key={roleIndex}
                      className="text-slate-300 flex items-center group/item"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-cyan-400 transition-transform group-hover/item:translate-x-1" />
                      <span className="font-medium text-sm md:text-base">
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategoriesSection;
