import React, { useState } from "react";
import { Building, Calendar, Code, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const InternshipExperience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const internships = [
    {
      id: 1,
      company: "Mastek Ltd.",
      duration: "04/2025",
      role: "Innovation Lab Intern",
      type: "Current",
      description:
        "Interned at Mastek Ltd.'s Innovation Lab-aaS, contributing to AI-driven solutions including fraud detection, intelligent chatbots, and document automation using Python, Flask, Azure OpenAI, and FAISS.",
      technologies: [
        "Python",
        "Flask",
        "Azure OpenAI",
        "FAISS",
        "AI/ML",
        "Chatbots",
      ],
      highlights: [
        "Developed fraud detection systems using machine learning",
        "Built intelligent chatbots with natural language processing",
        "Implemented document automation solutions",
        "Worked with Azure OpenAI for advanced AI capabilities",
      ],
      color: "blue",
    },
    {
      id: 2,
      company: "1stop.ai",
      duration: "05/2023",
      role: "Backend Developer",
      type: "Completed",
      description:
        "Actively participated in the development of the 'Laravel Booking Management System' project, focusing on backend web application development with API integration.",
      technologies: [
        "Laravel",
        "PHP",
        "API Integration",
        "Backend Development",
        "Database Management",
      ],
      highlights: [
        "Developed comprehensive booking management system",
        "Integrated multiple APIs for seamless functionality",
        "Implemented robust backend architecture",
        "Optimized database performance and queries",
      ],
      color: "green",
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-20 px-4 bg-slate-800/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Internship Experience
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Professional development and real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                internship.color === "blue"
                  ? "border-blue-500/30 hover:border-blue-500/50"
                  : "border-green-500/30 hover:border-green-500/50"
              }`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 sm:p-3 rounded-lg ${
                      internship.color === "blue"
                        ? "bg-blue-600/20"
                        : "bg-green-600/20"
                    }`}
                  >
                    <Building
                      className={`h-5 w-5 sm:h-6 sm:w-6 ${
                        internship.color === "blue"
                          ? "text-blue-400"
                          : "text-green-400"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {internship.company}
                    </h3>
                    <p
                      className={`text-sm font-semibold ${
                        internship.color === "blue"
                          ? "text-blue-400"
                          : "text-green-400"
                      }`}
                    >
                      {internship.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {internship.duration}
                  </div>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      internship.type === "Current"
                        ? "bg-blue-600/20 text-blue-400"
                        : "bg-gray-600/20 text-gray-400"
                    }`}
                  >
                    {internship.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                {internship.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {internship.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                      internship.color === "blue"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "bg-green-500/20 text-green-300 border border-green-500/30"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expandable Section */}
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpand(internship.id)}
                  className={`w-full justify-between text-sm hover:bg-slate-900/30 ${
                    internship.color === "blue"
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-green-400 hover:text-green-300"
                  }`}
                >
                  <span>Key Highlights</span>
                  {expandedCard === internship.id ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </Button>

                {expandedCard === internship.id && (
                  <div className="mt-4 pl-4 border-l-2 border-gray-600">
                    <ul className="space-y-2">
                      {internship.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="text-gray-300 text-sm flex items-start"
                        >
                          <Code
                            className={`h-4 w-4 mr-2 mt-0.5 flex-shrink-0 ${
                              internship.color === "blue"
                                ? "text-blue-400"
                                : "text-green-400"
                            }`}
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipExperience;
