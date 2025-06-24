import React, { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Certifications = () => {
  const certifications = [
    {
      title: "Cloud Foundation Course",
      provider: "AWS Academy",
      year: "2024",
      type: "Cloud Computing",
      color: "orange",
      image: "/1.jpg", // Replace with actual certificate image path
    },
    {
      title: "AI Hackathon Oracle Service Line",
      provider: "Mastek",
      year: "2024",
      type: "Artificial Intelligence",
      color: "red",
      image: "/placeholder.svg", // Replace with actual certificate image path
    },
    {
      title: "Python and Java Spoken Tutorial",
      provider: "IIT Bombay",
      year: "2023",
      type: "Programming",
      color: "blue",
      image: "/placeholder.svg", // Replace with actual certificate image path
    },
    {
      title: "Complete Web Development Bootcamp",
      provider: "Udemy (Angela Yu)",
      year: "2023",
      type: "Web Development",
      color: "green",
      image: "/placeholder.svg", // Replace with actual certificate image path
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: "from-orange-500 to-red-500",
      red: "from-red-500 to-pink-500",
      blue: "from-blue-500 to-cyan-500",
      green: "from-green-500 to-teal-500",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="text-center">
                    <div
                      className={`inline-flex p-4 rounded-full bg-gradient-to-r ${getColorClasses(
                        cert.color
                      )} mb-4`}
                    >
                      <Award className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-blue-400 font-semibold mb-1">
                      {cert.provider}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">{cert.year}</p>

                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getColorClasses(
                        cert.color
                      )} text-white`}
                    >
                      {cert.type}
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-slate-900 border-slate-700">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-white mb-4">
                    {cert.title} - {cert.provider}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex justify-center">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="max-w-full h-auto rounded-lg border border-slate-600"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
