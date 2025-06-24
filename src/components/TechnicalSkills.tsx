import React, { useState } from "react";
import { Code, Database, Globe, Palette, Server, Brain } from "lucide-react";

const TechnicalSkills = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: [
        {
          name: "Python",
          level: 95,
          projects: "AI/ML, Web Scraping, Data Analysis",
        },
        {
          name: "Java",
          level: 85,
          projects: "Enterprise Applications, Android Development",
        },
        {
          name: "JavaScript",
          level: 80,
          projects: "Full Stack Web Development",
        },
        {
          name: "PHP",
          level: 85,
          projects: "Laravel Applications, Backend Development",
        },
        {
          name: "C/C++",
          level: 75,
          projects: "System Programming, Algorithms",
        },
        {
          name: "HTML/CSS",
          level: 90,
          projects: "Frontend Development, UI Design",
        },
      ],
    },
    frameworks: {
      title: "Frameworks & Libraries",
      icon: Server,
      color: "green",
      skills: [
        { name: "Laravel", level: 90, projects: "Booking Management, HSMS" },
        { name: "Flask", level: 85, projects: "AI APIs, Microservices" },
        { name: "React.js", level: 80, projects: "Frontend Applications" },
        { name: "Bootstrap", level: 85, projects: "Responsive Design" },
        { name: "Java Swing", level: 75, projects: "Desktop Applications" },
      ],
    },
    tools: {
      title: "Tools & Platforms",
      icon: Database,
      color: "purple",
      skills: [
        { name: "Azure OpenAI", level: 90, projects: "AI Solutions, Chatbots" },
        {
          name: "Power BI",
          level: 85,
          projects: "Data Visualization, Analytics",
        },
        { name: "GIS", level: 80, projects: "Geospatial Analysis" },
        { name: "MySQL", level: 85, projects: "Database Management" },
        { name: "Git/GitHub", level: 90, projects: "Version Control" },
        { name: "FAISS", level: 75, projects: "Vector Search, AI" },
      ],
    },
    design: {
      title: "Design & Productivity",
      icon: Palette,
      color: "pink",
      skills: [
        { name: "Figma", level: 85, projects: "UI/UX Design, Prototyping" },
        { name: "Canva", level: 90, projects: "Graphics, Presentations" },
        { name: "MS Office", level: 95, projects: "Documentation, Analysis" },
        { name: "Microsoft ClipChamp", level: 70, projects: "Graphic Design" },
      ],
    },
    domains: {
      title: "Domain Expertise",
      icon: Brain,
      color: "cyan",
      skills: [
        {
          name: "Machine Learning",
          level: 90,
          projects: "Predictive Models, AI Solutions",
        },
        { name: "Data Analysis", level: 85, projects: "Research, Insights" },
        {
          name: "Web Development",
          level: 90,
          projects: "Full Stack Applications",
        },
        { name: "API Integration", level: 85, projects: "System Connections" },
        {
          name: "Database Design",
          level: 80,
          projects: "Schema Design, Optimization",
        },
      ],
    },
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      green: "bg-green-500/20 text-green-400 border-green-500/30",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getProgressColor = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      pink: "from-pink-500 to-pink-600",
      cyan: "from-cyan-500 to-cyan-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Comprehensive technology stack and expertise
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg border transition-all duration-300 text-xs sm:text-sm ${
                  activeCategory === key
                    ? getColorClasses(category.color)
                    : "bg-slate-800/50 text-gray-400 border-slate-600 hover:border-slate-500"
                }`}
              >
                <IconComponent size={16} className="sm:w-5 sm:h-5" />
                <span className="font-medium hidden sm:inline">
                  {category.title}
                </span>
                <span className="font-medium sm:hidden">
                  {category.title.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {skillCategories[
              activeCategory as keyof typeof skillCategories
            ].skills.map((skill, index) => (
              <div
                key={index}
                className="group hover:bg-slate-700/30 p-3 sm:p-4 rounded-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span
                    className={`text-sm font-bold ${
                      skillCategories[
                        activeCategory as keyof typeof skillCategories
                      ].color === "blue"
                        ? "text-blue-400"
                        : skillCategories[
                            activeCategory as keyof typeof skillCategories
                          ].color === "green"
                        ? "text-green-400"
                        : skillCategories[
                            activeCategory as keyof typeof skillCategories
                          ].color === "purple"
                        ? "text-purple-400"
                        : skillCategories[
                            activeCategory as keyof typeof skillCategories
                          ].color === "pink"
                        ? "text-pink-400"
                        : "text-cyan-400"
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${getProgressColor(
                      skillCategories[
                        activeCategory as keyof typeof skillCategories
                      ].color
                    )} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm">
                  {skill.projects}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
