import React, { useState } from "react";
import {
  Copyright,
  ChevronDown,
  ChevronUp,
  FileText,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Copyrights = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const copyrights = [
    {
      title:
        "Smart Optical Character Recognition System for Certificate Management",
      diaryNumber: "24397/2024-CO/SW",
      date: "10/2024",
      type: "Software",
      description:
        "An intelligent OCR system designed for automated certificate management and data extraction, streamlining administrative processes in educational institutions.",
      image: "/copyrights/copyright-ocr.jpg", // Replace with actual certificate image path
    },
    {
      title: "Software of CivicSynergy Streamlining Housing Society Management",
      diaryNumber: "9135/2024-CO/SW",
      date: "06/2024",
      type: "Software",
      description:
        "Comprehensive housing society management software that handles resident records, maintenance payments, complaints, and visitor management for enhanced community governance.",
      image: "/copyrights/copyright-moraj.jpg", // Replace with actual certificate image path
    },
    {
      title: "User Manual of Virtual Lab of Operating Systems",
      diaryNumber: "24284/2023-CO/L",
      date: "03/2024",
      type: "Manual",
      description:
        "Detailed user manual for the virtual operating systems lab, providing comprehensive guidance for students and educators on utilizing the interactive learning platform.",
      image: "/copyrights/copyright-vlab.jpg", // Replace with actual certificate image path
    },
    {
      title: "User Manual of KJSIT's Stakeholders Feedback Analysis Portal",
      diaryNumber: "356/2024-CO/L",
      date: "02/2024",
      type: "Manual",
      description:
        "User guide for the stakeholder feedback analysis portal, enabling effective collection and analysis of institutional feedback for accreditation and improvement purposes.",
      image: "/copyrights/copyright-feedback.jpg", // Replace with actual certificate image path
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="copyrights" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Intellectual Property
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Registered copyrights and intellectual contributions
          </p>
        </div>

        <div className="space-y-4">
          {copyrights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div
                      className={`p-3 rounded-lg ${
                        item.type === "Software"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {item.type === "Software" ? (
                        <Code size={24} />
                      ) : (
                        <FileText size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Copyright size={14} className="mr-1" />
                          {item.diaryNumber}
                        </div>
                        <span>{item.date}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            item.type === "Software"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-slate-800/30 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
                        >
                          View Certificate
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl bg-slate-900 border-slate-700 ">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold text-white mb-4">
                            {item.title} - Copyright Certificate
                          </DialogTitle>
                        </DialogHeader>
                        <div className="flex justify-center">
                          <img
                            src={item.image}
                            alt={`${item.title} Copyright Certificate`}
                            className="max-w-full h-auto rounded-lg border border-slate-600"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(index)}
                      className="text-gray-400 hover:text-white hover:bg-transparent"
                    >
                      {expandedItems.includes(index) ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </Button>
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedItems.includes(index)
                      ? "max-h-40 opacity-100 mt-4 pt-4 border-t border-slate-700"
                      : "max-h-0 opacity-0"
                  }`}
                  style={{
                    // fallback for maxHeight if content is larger
                    transitionProperty:
                      "max-height, opacity, margin-top, padding-top",
                  }}
                >
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright Stats */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="text-center bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
            <div className="text-gray-300">Software Copyrights</div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-green-400 mb-2">2</div>
            <div className="text-gray-300">Manual Copyrights</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copyrights;
