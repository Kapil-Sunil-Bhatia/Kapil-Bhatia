
import React from 'react';
import { Users, Heart, Target, Zap } from 'lucide-react';

const Leadership = () => {
  const leadershipRole = {
    title: "Vice Chairperson",
    organization: "Institution of Engineering and Technology (IET) & K. J. Somaiya Institute of Technology",
    location: "Mumbai",
    duration: "06/2024 - Present",
    description: "Leading strategic initiatives and community outreach programs to foster technological innovation and student development.",
    responsibilities: [
      "Strategic planning and execution of technical events and workshops",
      "Mentoring junior students in technology and career development",
      "Coordinating with industry professionals for knowledge sharing sessions",
      "Organizing community outreach programs and technical competitions"
    ]
  };

  const activities = [
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading diverse teams of students and faculty members",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Organizing programs for societal benefit and awareness",
      color: "red"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Developing and implementing institutional growth strategies",
      color: "green"
    },
    {
      icon: Zap,
      title: "Innovation Drive",
      description: "Promoting technological innovation and research initiatives",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      red: "bg-red-500/20 text-red-400 border-red-500/30",
      green: "bg-green-500/20 text-green-400 border-green-500/30",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="leadership" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Leadership & Volunteering
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">Driving positive change through leadership and community service</p>
        </div>

        {/* Current Role */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 sm:p-8 mb-8 sm:mb-12 hover:bg-slate-800/70 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 self-start lg:self-auto">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{leadershipRole.title}</h3>
                  <p className="text-blue-400 font-semibold text-base sm:text-lg mb-1">{leadershipRole.organization}</p>
                  <p className="text-gray-400 text-sm sm:text-base">{leadershipRole.location}</p>
                </div>
                <div className="lg:text-right">
                  <span className="inline-block px-3 sm:px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-xs sm:text-sm font-semibold text-indigo-400">
                    {leadershipRole.duration}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{leadershipRole.description}</p>
              
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {leadershipRole.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start text-gray-300 text-sm sm:text-base">
                      <span className="text-indigo-400 mr-2">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Activities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-4 sm:p-6 text-center hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 ${getColorClasses(activity.color)}`}
            >
              <div className="flex justify-center mb-4">
                <activity.icon size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{activity.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{activity.description}</p>
            </div>
          ))}
        </div>

        {/* Leadership Impact */}
        <div className="mt-12 sm:mt-16 text-center bg-slate-800/50 rounded-xl p-6 sm:p-8 border border-slate-700">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Leadership Impact</h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            Through my role as Vice Chairperson, I have been instrumental in fostering a culture of innovation and collaboration. 
            My leadership approach focuses on empowering team members, driving technological advancement, and creating meaningful 
            connections between academia and industry to benefit the entire community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
