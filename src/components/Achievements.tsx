import React from "react";
import { Trophy, Award, Star, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Achievements = () => {
  const achievements = [
    {
      title:
        "Special Prize Awardee for developing CivicSynergy Streamlining Housing Society Management System in INTECH 2K24",
      organization:
        "Institution of Engineering and Technology (IET) Mumbai Local Network and K. J. Somaiya Institute of Technology",
      date: "02/2024",
      type: "Competition Award",
      icon: Trophy,
      color: "yellow",
      image: "/placeholder.svg", // Replace with actual certificate image path
    },
    {
      title: "Student Champion of the Year",
      organization: "Institution of Engineering and Technology (IET)",
      date: "12/2023",
      type: "Leadership Award",
      icon: Star,
      color: "purple",
      image: "/placeholder.svg", // Replace with actual certificate image path
    },
    {
      title:
        "Letter of Appreciation for developing websites: Virtual Lab of Operating Systems; KJSIT's Stakeholders Feedback Analysis Portal; CivicSynergy: Streamlining Housing Society Management System",
      organization: "K. J. Somaiya Institute of Technology, Sion, Mumbai",
      date: "10/2023",
      type: "Recognition",
      icon: Award,
      color: "blue",
      image: "/placeholder.svg", // Replace with actual certificate image path
    },
    {
      title: "Topped the class XII in my college – Board Examination",
      organization: "Hansraj Morarji Public School and Junior College",
      date: "06/2021",
      type: "Academic Excellence",
      icon: Medal,
      color: "green",
      image: "/placeholder.svg", // Replace with actual certificate image path
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      yellow: "from-yellow-500 to-orange-500",
      purple: "from-purple-500 to-pink-500",
      blue: "from-blue-500 to-cyan-500",
      green: "from-green-500 to-teal-500",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      yellow: "text-yellow-400",
      purple: "text-purple-400",
      blue: "text-blue-400",
      green: "text-green-400",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="achievements" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Awards & Recognition
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Celebrating excellence and outstanding contributions
          </p>
        </div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-6">
                <div
                  className={`p-4 rounded-full bg-gradient-to-r ${getColorClasses(
                    achievement.color
                  )} flex-shrink-0`}
                >
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <p
                        className={`font-semibold mb-1 ${getIconColor(
                          achievement.color
                        )}`}
                      >
                        {achievement.organization}
                      </p>
                    </div>
                    <div className="text-right flex flex-col items-end space-y-2">
                      <div className="text-gray-400 text-sm">
                        {achievement.date}
                      </div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getColorClasses(
                          achievement.color
                        )} text-white`}
                      >
                        {achievement.type}
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-blue-400 bg-slate-800/30 border-blue-400 hover:bg-blue-400 hover:text-white mt-2"
                          >
                            View Certificate
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl bg-slate-900 border-slate-700">
                          <DialogHeader>
                            <DialogTitle className="text-xl font-bold text-white mb-4">
                              {achievement.title} - Certificate
                            </DialogTitle>
                          </DialogHeader>
                          <div className="flex justify-center">
                            <img
                              src={achievement.image}
                              alt={`${achievement.title} Certificate`}
                              className="max-w-full h-auto rounded-lg border border-slate-600"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
            <div className="text-gray-300">Competition Awards</div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
            <div className="text-gray-300">Leadership Recognition</div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
            <div className="text-gray-300">Appreciation Letters</div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-green-400 mb-2">1</div>
            <div className="text-gray-300">Academic Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
