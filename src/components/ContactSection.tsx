
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 77108 86248",
      link: "tel:+917710886248",
      color: "green"
    },
    {
      icon: Mail,
      label: "Email",
      value: "ksbcelll2@gmail.com",
      link: "mailto:ksbcelll2@gmail.com",
      color: "blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kapil-bhatia-06b565242",
      link: "https://linkedin.com/in/kapil-bhatia-06b565242",
      color: "blue"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Kapil-Sunil-Bhatia",
      link: "https://github.com/Kapil-Sunil-Bhatia",
      color: "gray"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Navi Mumbai, Maharashtra",
      link: "",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-500/20 text-green-400",
      blue: "bg-blue-500/20 text-blue-400",
      gray: "bg-gray-500/20 text-gray-400",
      red: "bg-red-500/20 text-red-400"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Let's collaborate on innovative projects and research opportunities</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${getColorClasses(info.color)}`}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ORCID */}
            <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-2">Academic Profile</h4>
              <p className="text-gray-400 text-sm mb-2">ORCID</p>
              <a
                href="https://orcid.org/0009-0003-2930-3179"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors font-medium"
              >
                https://orcid.org/0009-0003-2930-3179
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Kapil Bhatia. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            {contactInfo.filter(info => info.link && info.label !== 'Phone' && info.label !== 'Email' && info.label !== 'Location').map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
