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
      type: "Scopus Indexed Research Paper",
      abstract:
        "Individuals who are deaf or experience difficulties with hearing and speech predominantly rely on sign language as their medium to communicate, which is not universally comprehended leading to obstacles in achieving effective communication. Advances in deep learning technologies in recent years have enabled the development of systems intended to autonomously interpret gestures in sign language and translate them into spoken language. This paper introduces a system built on deep learning methodologies for recognizing sign language. It uses long short-term memory (LSTM) architecture to distinguish and classify hand gestures which are static and dynamic. The system is divided into three primary components, including dataset collection, neural network assessment, and sign detection component that encompasses hand gesture extraction and sign language classification. The module to extract hand gestures makes use of recurrent neural networks (RNNs) for the detection and tracking of hand movements in video sequences. Another RNN that is incorporated by classification module categorizes these gestures into established sign language classes. Upon evaluation on a custom dataset, the proposed system attains an accuracy rate of 99.42%, thus making it visualize its promise as an assistive technology for handicapped hearing individuals. This system can further be enhanced by including further classes on sign language and real-time gesture interpretation.",
      link: "https://doi.org/10.11591/ijai.v14.i2.pp1355-1362",
      color: "blue",
    },
    {
      title:
        "Virtual Simulations Tool for Operating Systems: Advancing E-Learning in Computing Education",
      journal:
        "Scopus-indexed Journal of Information Technology Education: Innovations in Practice (JITE:IIP)",
      date: "11/2024",
      status: "Published",
      type: "Scopus Indexed Research Paper",
      abstract:
        "This paper introduces an innovative online e-learning tool designed to enhance the teaching and understanding of complex operating system algorithms in engineering education. Traditional teaching methods often fall short in effectively conveying intricate algorithmic concepts. To bridge this gap, the developed tool offers interactive simulations for 13 key operating system algorithms, including Process Scheduling, Disk Scheduling, and Banker’s Algorithm. These simulations provide visual, hands-on learning experiences, aiding student comprehension and engagement. Developing the tool involved overcoming challenges such as implementing step-by-step computations, managing edge cases, generating dynamic visualizations like Gantt charts and disk scheduling graphs, and ensuring robust input validation and user customization. Despite its effectiveness, the tool has limitations. For example, the Process Scheduling module lacks context switching overhead modeling, and Disk Scheduling could benefit from additional evaluation metrics like fairness and starvation avoidance. The Banker’s Algorithm simulator may be further enhanced to handle deadlocks and resource exhaustion. An analysis of feedback from 276 students showed significant improvements in understanding and interest, highlighting the tool’s impact on learning outcomes. Educators are encouraged to integrate this tool into their curriculum to foster deeper learning. Researchers are recommended to expand its algorithmic coverage and explore its applicability in other computer science areas. Operating system algorithms are essential for creating efficient and secure systems that support modern life. By equipping students with practical algorithmic knowledge, this tool contributes to societal advancement through better software development. Future research should explore similar e-learning tools across various engineering disciplines and assess their educational effectiveness.",
      link: "https://doi.org/10.28945/5404",
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
        "Feedback collection and its report generation is an important aspect of any organization to improve its effectiveness by analyzing the responses received from its stakeholders. It helps to improve their operation and better serve their stakeholders. Traditionally, many institutions opted for manual report generation from the feedbacks received from their stakeholders using Google Forms which generated reports on the basis of static data collected after the successful submission of the google forms. However, this approach lacks efficiency and flexibility in analyzing stakeholder responses. The Stakeholders Feedback Analysis is a platform developed to ease the feedback collection and report generation process. It collects feedbacks from the stakeholders and generates reports dynamically using a data analysis tool which aids organizations to gain valuable insights into stakeholder preferences, concerns, and areas for improvement. The dynamic capabilities of the platform and its integration with data analysis tool underscore its significance in fostering transparency, accountability, and stakeholder satisfaction within organizations.",
      link: "https://doi.org/10.1109/innocomp63224.2024.00060",
      color: "purple",
    },
    {
      title:
        "Empowering Communities: Smart Technologies for Housing Society Governance",
      journal:
        "UGC CARE recognized South India Journal of Social Sciences (in Print Mode)",
      date: "05/2024",
      status: "Press Print",
      type: "Social Technology",
      abstract:
        "The Housing Society Management System (HSMS) is an innovative online platform that transforms residential community management. It uses modern web technology to simplify administrative tasks and improve residents’ experiences. The system is a central hub for storing resident information, managing maintenance activities, and facilitating communication. Admins have powerful tools that help them manage housing society operations efficiently. By storing resident data in a centralized place, the system makes it easy to access important information, which helps with decision-making and strengthens community involvement. The HSMS enhances communication within communities. It provides tools that allow residents, administrators, and providers to stay informed. These tools make sure that important updates and announcements reach everyone effectively. The HSMS emphasizes efficiency and transparency, leading to greater resident satisfaction. By utilizing the latest technologies, it modernizes residential community management, improving the quality of life for residents in the digital age.",
      link: "https://drive.google.com/file/d/1KkPZ5phn3AqustU3Ygx3kUURq33MjkTc/view",
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
                  <div
                    style={{
                      maxHeight: selectedPaper === index ? 500 : 0,
                      opacity: selectedPaper === index ? 1 : 0,
                      marginBottom: selectedPaper === index ? 16 : 0,
                      transition:
                        "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s, margin-bottom 0.3s",
                      overflow: "hidden",
                    }}
                    className="bg-slate-700/30 rounded-lg p-4 border-l-4 border-blue-500"
                  >
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Abstract
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-justify">
                      {paper.abstract}
                    </p>
                  </div>
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
              4
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              Published Papers
            </div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
              2
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
