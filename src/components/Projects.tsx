import React from "react";
import { ExternalLink, Github, Trophy, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Virtual Lab for Operating Systems",
      description:
        "Developed an interactive web-based virtual lab to help students understand OS concepts through simulations, quizzes, flowcharts, and code execution. Includes email-based login/signup, discussion forum, and feedback system.",
      impact: "300+ students benefited across the institute",
      technologies: [
        "Web Development",
        "Interactive Simulations",
        "Educational Technology",
        "AI-ML",
        "Discussion Forum",
        "Feedback System",
        "Flowcharts",
        "Operating Systems",
        "Code Execution",
        "Virtual Lab",
      ],
      liveLink: "https://vlabcomp.kjsieit.in",
      github:
        "https://github.com/Kapil-Sunil-Bhatia/Virtual-Lab-of-Operating-System",
      award: null,
      icon: "🔬",
      color: "blue",
    },
    {
      title: "Stakeholders Feedback Analysis Portal",
      description:
        "Designed and deployed a web portal for collecting and analyzing feedback from students, faculty, alumni, and other stakeholders. Integrated with Power BI to visualize 900+ responses using charts and dashboards.",
      impact: "900+ responses analyzed for NBA and NAAC accreditation",
      technologies: [
        "Web Portal",
        "Power BI",
        "Data Visualization",
        "Analytics",
        "Feedback System",
        "Stakeholder Engagement",
        "AI-ML",
        "Data Analysis",
        "Data Processing",
        "Data Management",
        "Data Visualization",
        "Data Insights",
      ],
      liveLink: "https://feedbackportal.kjsieit.in/new",
      github:
        "https://github.com/Kapil-Sunil-Bhatia/KJSIT-Stakeholder-Feedback-Analaysis-Portal",
      award: null,
      icon: "📊",
      color: "green",
    },
    {
      title: "Student Achievement & OCR Portal",
      description:
        "Created a portal to streamline certificate submission by students and automate data entry using Optical Character Recognition (OCR). Simplified administration and tracking of student achievements.",
      impact: "Streamlined certificate processing for entire institute",
      technologies: [
        "OCR",
        "Tesseract",
        "Flask",
        "Data Processing",
        "Automation",
        "Web Development",
        "AI-ML",
      ],
      liveLink: "#",
      github:
        "https://github.com/Kapil-Sunil-Bhatia/KJSIT-Achievement-Portal-and-OCR-Tool",
      award: null,
      icon: "🏆",
      color: "purple",
    },
    {
      title: "CivicSynergy: Housing Society Management",
      description:
        "Developed an all-in-one platform to manage resident records, maintenance collection via payment gateway, complaints, visitor logs, and rent/renovation applications. Designed for 800+ residents.",
      impact: "Enhanced society operations and transparency for 800+ residents",
      technologies: [
        "Full Stack",
        "Payment Gateway",
        "Management System",
        "Web Development",
        "Community Management",
      ],
      liveLink: "https://morajresidency.co.in",
      github: "https://github.com/Kapil-Sunil-Bhatia/Moraj-Residency-Website",
      award: "🏆 Special Prize Winner - INTECH 2K24",
      icon: "🏘️",
      color: "cyan",
    },
    {
      title: "IoT-based Water Tank Monitoring System",
      description:
        "Built an IoT solution using Arduino UNO WiFi Rev 2 to monitor water parameters (pH, turbidity, temperature, conductivity, water level). Enabled real-time alerts via SMS to ensure cleanliness and maintenance.",
      impact: "Addressed civic challenge for water quality monitoring",
      technologies: [
        "IoT",
        "Arduino",
        "Sensors",
        "Real-time Monitoring",
        "AI-ML",
        "Water Quality Management",
      ],
      liveLink: "#",
      github:
        "https://github.com/Kapil-Sunil-Bhatia/IoT-based-Water-Tank-Monitoring-System",
      award: "🥈 Finalist - Aavishkar 2023-24",
      icon: "💧",
      color: "teal",
    },
    {
      title: "LULC Impact on Air Quality Research",
      description:
        "Research project exploring the impact of Land Use Land Cover (LULC) on air quality using hybrid deep learning models on satellite data. Employed SHAP and LIME for interpretability, and GPR to estimate disease risk.",
      impact:
        "Forecasted AQI trends from 2017 to 2035, highlighting urbanization effects",
      technologies: [
        "GIS",
        "AI Integration",
        "Deep Learning",
        "Satellite Data",
        "Research",
        "Environmental Science",
        "Air Quality Management",
        "Explainable AI",
      ],
      liveLink: "#",
      github: "https://github.com/Kapil-Sunil-Bhatia/LULC-Major-Project-files",
      award: null,
      icon: "🌍",
      color: "emerald",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600 border-blue-500/30",
      green: "from-green-500 to-green-600 border-green-500/30",
      purple: "from-purple-500 to-purple-600 border-purple-500/30",
      cyan: "from-cyan-500 to-cyan-600 border-cyan-500/30",
      teal: "from-teal-500 to-teal-600 border-teal-500/30",
      emerald: "from-emerald-500 to-emerald-600 border-emerald-500/30",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Major Projects
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Innovative solutions with real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-slate-800/50 backdrop-blur-sm border rounded-xl p-4 sm:p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                project.color
                  ? `hover:border-${project.color}-500/50`
                  : "hover:border-blue-500/50"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`text-2xl sm:text-3xl p-2 sm:p-3 rounded-lg bg-gradient-to-r ${getColorClasses(
                      project.color
                    )}`}
                  >
                    {project.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    {project.award && (
                      <div className="flex items-center mt-1">
                        <Trophy size={14} className="text-yellow-400 mr-1" />
                        <span className="text-xs text-yellow-400 font-semibold">
                          {project.award}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>

              {/* Impact */}
              <div
                className={`flex items-center space-x-2 mb-4 p-3 rounded-lg bg-gradient-to-r ${getColorClasses(
                  project.color
                )} bg-opacity-10`}
              >
                <Zap size={16} className="text-yellow-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">
                  {project.impact}
                </span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="bg-slate-700/50 text-gray-300 border-slate-600 hover:border-blue-500/50 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                {project.liveLink !== "#" && (
                  <Button
                    size="sm"
                    className={`bg-gradient-to-r ${getColorClasses(
                      project.color
                    )} hover:scale-105 transition-transform text-xs sm:text-sm`}
                    onClick={() => window.open(project.liveLink, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black-500 border-gray-600 text-gray-300 hover:bg-gray-700 hover:scale-105 transition-transform text-xs sm:text-sm"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
