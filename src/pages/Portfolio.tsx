
import React from 'react';
import HeroSection from '../components/HeroSection';
import EducationTimeline from '../components/EducationTimeline';
import InternshipExperience from '../components/InternshipExperience';
import TechnicalSkills from '../components/TechnicalSkills';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Copyrights from '../components/Copyrights';
import Achievements from '../components/Achievements';
import Leadership from '../components/Leadership';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <HeroSection />
      <EducationTimeline />
      <InternshipExperience />
      <TechnicalSkills />
      <Certifications />
      <Projects />
      <Publications />
      <Copyrights />
      <Achievements />
      <Leadership />
      <ContactSection />
    </div>
  );
};

export default Portfolio;
