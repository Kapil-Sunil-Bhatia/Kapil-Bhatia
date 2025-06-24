import React, { useState } from "react";
import { BookOpen, ExternalLink, Eye, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const [selectedPaper, setSelectedPaper] = useState<number | null>(null);

  const publications = [
    {
      title:
        "Enhancing accessibility with long short-term memory-based sign language detection systems",
      journal:
        "Scopus-indexed IAES International Journal of Artificial Intelligence (IJ-AI)",
      date: "04/2025",
      status: "Published",
      type: "Research Paper",
      abstract:
        "This research focuses on developing advanced sign language detection systems using LSTM neural networks to enhance accessibility for the deaf and hard-of-hearing community. The system demonstrates significant improvements in accuracy and real-time processing capabilities.",
      link: "#",
      color: "blue",
    },
    {
      title:
        "Virtual Simulations Tool for Operating Systems: Advancing E-Learning in Computing Education",
      journal:
        "Scopus-indexed Journal of Information Technology Education: Innovations in Practice (JITE:IIP)",
      date: "11/2024",
      status: "Published",
      type: "Educational Technology",
      abstract:
        "Presents an innovative virtual simulation tool designed to enhance operating systems education through interactive learning experiences. The tool provides students with hands-on experience in OS concepts without requiring physical hardware.",
      link: "#",
      color: "green",
    },
    {
      title:
        "Data Dynamics in Focus: Stakeholders Feedback Analysis and Interpretation",
      journal:
        "Scopus-indexed International Conference on Emerging Innovations and Advanced Computing (INNOCOMP 2024)",
      date: "05/2024",
      status: "Published",
      type: "Conference Paper",
      abstract:
        "Explores advanced data analytics techniques for stakeholder feedback analysis, providing insights into improving institutional processes and decision-making through comprehensive data interpretation methodologies.",
      link: "#",
      color: "purple",
    },
    {
      title:
        "Empowering Communities: Smart Technologies for Housing Society Governance",
      journal:
        "UGC CARE recognized South India Journal of Social Sciences (in Print Mode)",
      date: "05/2024",
      status: "Published",
      type: "Social Technology",
      abstract:
        "Investigates the implementation of smart technologies in housing society management, focusing on community empowerment through digital transformation and improved governance structures.",
      link: "#",
      color: "cyan",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      green: "bg-green-500/20 text-green-400 border-green-500/30",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section
      id="publications"
      className="py-12 sm:py-16 lg:py-20 px-4 bg-slate-800/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Publications & Research
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Contributing to academic knowledge and innovation
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {publications.map((paper, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 sm:p-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                    <div
                      className={`p-2 sm:p-3 rounded-lg self-start ${getColorClasses(
                        paper.color
                      )}`}
                    >
                      <BookOpen size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                        {paper.title}
                      </h3>
                      <p className="text-blue-400 font-semibold mb-1 text-sm sm:text-base">
                        {paper.journal}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {paper.date}
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getColorClasses(
                            paper.color
                          )}`}
                        >
                          {paper.type}
                        </span>
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400">
                          {paper.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Abstract Preview */}
                  {selectedPaper === index && (
                    <div className="bg-slate-700/30 rounded-lg p-4 mb-4 border-l-4 border-blue-500">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                        Abstract
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {paper.abstract}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row xl:flex-col gap-2 xl:gap-2 xl:ml-6">
                  <Button
                    size="sm"
                    onClick={() =>
                      setSelectedPaper(selectedPaper === index ? null : index)
                    }
                    variant="outline"
                    className="bg-slate-800/30 border-blue-500/30 text-blue-400 hover:bg-blue-600/20 text-xs sm:text-sm flex-1 xl:flex-none"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    {selectedPaper === index ? "Hide" : "Preview"}
                  </Button>
                  {paper.link !== "#" && (
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm flex-1 xl:flex-none"
                      onClick={() => window.open(paper.link, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Read Paper
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          <div className="text-center bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
              4+
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              Published Papers
            </div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
              3
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              Scopus Indexed
            </div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
              2
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              Conference Papers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
