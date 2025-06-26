import React from "react";
import { GraduationCap, Trophy, Calendar } from "lucide-react";

const EducationTimeline = () => {
  const educationData = [
    {
      id: 1,
      degree:
        "Bachelor of Technology in Computer Engineering with Honors in AI/ML",
      institution: "K. J. Somaiya Institute of Technology",
      location: "Sion, Mumbai",
      duration: "2021 - 2025",
      cgpi: "9.2 CGPI (All 8 Semesters)",
      description: "Specialized in AI/ML, Full Stack Development, and Research",
      icon: GraduationCap,
      color: "blue",
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Hansraj Morarji Public School and Junior College",
      location: "Andheri, Mumbai",
      duration: "2019 - 2021",
      cgpi: "93.33%",
      description: "Science Stream with Mathematics and Computer Science",
      icon: Trophy,
      color: "green",
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Bhavans A.H. Wadia High School",
      location: "Andheri, Mumbai",
      duration: "2019",
      cgpi: "87.80%",
      description: "Strong foundation in Mathematics and Science",
      icon: Calendar,
      color: "purple",
    },
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education Journey
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            Academic excellence and continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Now visible on all screens */}
          <div className="absolute left-6 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>

          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex flex-row lg:flex-row items-start mb-6 sm:mb-8 lg:mb-12 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 flex-shrink-0 mr-4 lg:mr-0">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r ${
                    item.color === "blue"
                      ? "from-blue-500 to-blue-600"
                      : item.color === "green"
                      ? "from-green-500 to-green-600"
                      : "from-purple-500 to-purple-600"
                  } flex items-center justify-center shadow-lg`}
                >
                  <item.icon className="text-white" size={16} />
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                }`}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-3 sm:p-4 lg:p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-3 gap-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.color === "blue"
                          ? "bg-blue-600/20 text-blue-400"
                          : item.color === "green"
                          ? "bg-green-600/20 text-green-400"
                          : "bg-purple-600/20 text-purple-400"
                      }`}
                    >
                      {item.duration}
                    </span>
                    <div
                      className={`text-base sm:text-lg lg:text-2xl font-bold ${
                        item.color === "blue"
                          ? "text-blue-400"
                          : item.color === "green"
                          ? "text-green-400"
                          : "text-purple-400"
                      }`}
                    >
                      {item.cgpi}
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                    {item.degree}
                  </h3>
                  <h4 className="text-blue-400 font-semibold mb-1 text-xs sm:text-sm leading-tight">
                    {item.institution}
                  </h4>
                  <p className="text-gray-400 text-xs mb-1 sm:mb-2">
                    {item.location}
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Empty space for opposite side - Only on desktop */}
              <div className="hidden lg:block lg:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
