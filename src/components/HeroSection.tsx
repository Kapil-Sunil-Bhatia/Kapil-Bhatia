import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = [
    "Python Developer",
    "Azure OpenAI Expert",
    "Full Stack Engineer",
    "GIS Specialist",
    "Research Enthusiast",
    "AI/ML Engineer",
  ];

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText === currentSkill) {
            setTimeout(() => setIsDeleting(true), 2000);
          } else {
            setDisplayedText(currentSkill.slice(0, displayedText.length + 1));
          }
        } else {
          if (displayedText === "") {
            setIsDeleting(false);
            setSkillIndex((prev) => (prev + 1) % skills.length);
          } else {
            setDisplayedText(currentSkill.slice(0, displayedText.length - 1));
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, skillIndex, isDeleting]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("education");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">KB</span>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-md opacity-50 animate-pulse"></div>
          </div>
        </div>

        {/* Animated Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Kapil Bhatia
          </span>
        </h1>

        {/* Animated Subtitle */}
        <div className="text-xl md:text-2xl text-gray-300 mb-8 min-h-[2rem]">
          <span className="text-blue-400">{displayedText}</span>
          <span className="animate-blink">|</span>
        </div>

        {/* Key Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm">
            🎓 9.2 CGPI Graduate
          </span>
          <span className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-sm">
            🏆 Award Winner
          </span>
          <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
            📚 Published Researcher
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            <a href="/cc.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-gray-900 hover:border-gray-700 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://github.com/Kapil-Sunil-Bhatia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-[#0a66c2] hover:text-white transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://www.linkedin.com/in/kapil-bhatia-06b565242/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <a
              href="mailto:ksbcell12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0.1 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="animate-bounce" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
