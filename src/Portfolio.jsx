import React from 'react';
import { useState, useEffect } from 'react';
import AudioPlayer from './components/AudioPlayer'; 
import { Menu, X, Mail, Github, Linkedin, Twitter, ExternalLink, Moon, Sun, ArrowRight, User, Briefcase, Code, BookOpen, Award, ChevronUp } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Monitor scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      // Determine active section for nav highlighting
      const sections = ['about', 'projects', 'skills', 'experience', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Dark mode implementation
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation of form submission
    console.log("Form submitted with:", { name, email, message });
    alert("Thank you for your message! I'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  const projects = [
    {
      title: "Akana Pay",
      description: "Aplikasi android menggunakan flutter untuk sistem pembayaran kasir sekolah",
      tech: ["Flutter", "Python", "PostgreSQL"],
      image: "/assets/akanapay.png",
      link: "https://project1-link.com"
    },
    {
      title: "SIPA - Sistem Pelaporan Kekerasan Kekerasan Ibu dan Anak",
      description: "Aplikasi yang dibuat dengan React JS dalam tugas Capstone Coding Camp 2025",
      tech: ["React JS", "Express JS", "MySQL", "Tailwind CSS", "Machine Learning"],
      image: "/assets/sipadashborad.png",
      link: "https://sipa-capstone.vercel.app/"
    },
    {
      title: "Website Sekolah",
      description: "Website Sekolah yang dibuat dalam tugas Uji Kompetensi",
      tech: ["Laravel", "MySQL"],
      image: "/assets/websitesekolah.png",
      link: "https://github.com/kamilaap/frontend_galerisekolah"
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 70 },
    { name: "Backend Development", level: 60 },
    { name: "UI/UX Design", level: 85 },
    { name: "Database Management", level: 85 },
    { name: "DevOps", level: 70 }
  ];

  const experiences = [
    {
      company: "PT. Indotech Suryatama Abadi",
      position: "Praktik Kerja Lapangan",
      period: "Januari 2025 - Mei 2025",
      description: "Sebagai Junior Frontend Mobile Developer membuat projek aplikasi andorid menggunakan flutter serta membuat dan mengelola database menggunakan PostgreSQL."
    },
    {
      company: "Coding Camp 2025 powerd by DBS Foundation",
      position: "Frontend dan Backend Developer",
      period: "Januari 2025 - April 2025",
      description: "Mempelajari Frontend dan Backend Developer serta aktif dalam pembuatan projek Capstone."
    },
    {
      company: "Extracuricular Junior Red Cross",
      position: "Ketua Umum",
      period: "Januari 2024 - Desember 2024",
      description: "Memimpin serta mengorganisir ekstrakurikuler."
    },
  ];

  // Function to determine if a nav item is active
  const isActive = (section) => activeSection === section;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900 border-b border-gray-800' : 'bg-white shadow-gray-200 shadow-md'} transition-all duration-300`}>
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold flex items-center">
            <span className="text-blue-500 dark:text-blue-400">Port</span>
            <span>folio</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className={`transition-colors ${isActive('about') ? 'text-blue-500 dark:text-blue-400' : 'hover:text-blue-500 dark:hover:text-blue-400'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className={`transition-colors ${isActive('projects') ? 'text-blue-500 dark:text-blue-400' : 'hover:text-blue-500 dark:hover:text-blue-400'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={`transition-colors ${isActive('skills') ? 'text-blue-500 dark:text-blue-400' : 'hover:text-blue-500 dark:hover:text-blue-400'}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className={`transition-colors ${isActive('experience') ? 'text-blue-500 dark:text-blue-400' : 'hover:text-blue-500 dark:hover:text-blue-400'}`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`transition-colors ${isActive('contact') ? 'text-blue-500 dark:text-blue-400' : 'hover:text-blue-500 dark:hover:text-blue-400'}`}
            >
              Contact
            </button>
            <AudioPlayer />
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? 
                <Sun size={20} className="text-yellow-400" /> : 
                <Moon size={20} className="text-gray-600" />
              }
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
  <AudioPlayer /> {/* Add AudioPlayer component here */}
  <button 
    onClick={toggleDarkMode} 
    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
  >
    {darkMode ? 
      <Sun size={20} className="text-yellow-400" /> : 
      <Moon size={20} />
    }
  </button>
  <button 
    onClick={toggleMenu} 
    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
  >
    {menuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden fixed inset-0 z-40 ${darkMode ? 'bg-gray-800' : 'bg-white'} pt-20`}>
            <div className="flex flex-col items-center space-y-6 p-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className={`text-xl transition-colors ${isActive('about') ? 'text-blue-500 dark:text-blue-400' : 'hover:text-blue-500 dark:hover:text-blue-400'}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className={`text-xl transition-colors ${isActive('projects') ? 'text-blue-500 dark:text-blue-400' : 'hover:text-blue-500 dark:hover:text-blue-400'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className={`text-xl transition-colors ${isActive('skills') ? 'text-blue-500 dark:text-blue-400' : 'hover:text-blue-500 dark:hover:text-blue-400'}`}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className={`text-xl transition-colors ${isActive('experience') ? 'text-blue-500 dark:text-blue-400' : 'hover:text-blue-500 dark:hover:text-blue-400'}`}
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`text-xl transition-colors ${isActive('contact') ? 'text-blue-500 dark:text-blue-400' : 'hover:text-blue-500 dark:hover:text-blue-400'}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 transition-all transform hover:scale-110 ${
            darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-500 dark:text-blue-400 relative">
                Kamila Putri Herlambang
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg mb-8">
              I build exceptional and accessible digital experiences for the web.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md flex items-center transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Me <ArrowRight size={18} className="ml-2" />
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-all transform hover:-translate-y-1"
              >
                View Work
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-2xl transform transition-transform hover:scale-105">
              <img 
                src="/assets/kamila.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 md:py-24 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-12">
            <User size={24} className="text-blue-500 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Who am I?</h3>
              <p className="font-normal">
                <span className="text-blue-400 dark:text-blue-400">Kamila</span> tertarik dengan Frontend Developer semenjak sering mengerjakan projek bagian frontend. Saya suka ketika mendesain aplikasi terutama aplikasi yang interaktif dan bermanfaat bagi user. Sehingga, saya bercita-cita sebagai seorang Frontend Developer.
              </p>
              <br />
              <p className="font-normal">
              <span className="text-blue-400 dark:text-blue-400">Selain itu,</span> saat ini Kamila sebagai fresh graduate lulusan tahun 2025 sedang mencari pekerjaan sesuai kemampuannya. 
              </p>
              <br />
              <div className="grid grid-cols-2 gap-4">
                <div className="transform transition-transform hover:translate-x-2">
                  <h4 className="font-semibold mb-2">Name:</h4>
                  <p className="font-normal">Kamila Putri Herlambang</p>
                </div>
                <div className="transform transition-transform hover:translate-x-2">
                  <h4 className="font-semibold mb-2">Email:</h4>
                  <p className="font-normal">kp.herlambang@gmail.com</p>
                </div>
                <div className="transform transition-transform hover:translate-x-2">
                  <h4 className="font-semibold mb-2">Location:</h4>
                  <p className="font-normal">Bogor, Indonesia</p>
                </div>
                <div className="transform transition-transform hover:translate-x-2">
                  <h4 className="font-semibold mb-2">Availability:</h4>
                  <p className="text-blue-500 dark:text-blue-400 font-medium">Open to opportunities</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Professional Summary</h3>
              <ul className="space-y-4">
                <li className="flex group transition-all">
                  <div className="mr-4 mt-1">
                    <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full transform transition-transform group-hover:scale-125"></div>
                  </div>
                  <div className="transform transition-all group-hover:translate-x-2">
                    <h4 className="font-semibold">Frontend Development</h4>
                    <p className="font-normal">
                      Expertise in React.js and modern CSS frameworks including Tailwind CSS.
                    </p>
                  </div>
                </li>
                <li className="flex group transition-all">
                  <div className="mr-4 mt-1">
                    <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full transform transition-transform group-hover:scale-125"></div>
                  </div>
                  <div className="transform transition-all group-hover:translate-x-2">
                    <h4 className="font-semibold">Backend Development</h4>
                    <p className="font-normalgray-300">
                      Experience with Node.js, Express, PostgreSQL, and RESTful API.
                    </p>
                  </div>
                </li>
                <li className="flex group transition-all">
                  <div className="mr-4 mt-1">
                    <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full transform transition-transform group-hover:scale-125"></div>
                  </div>
                  <div className="transform transition-all group-hover:translate-x-2">
                    <h4 className="font-semibold">UI/UX Design</h4>
                    <p className="font-normal">
                      Creating user-centered designs with Figma and implementing accessible interfaces.
                    </p>
                  </div>
                </li>
                <li className="flex group transition-all">
                  <div className="mr-4 mt-1">
                    <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full transform transition-transform group-hover:scale-125"></div>
                  </div>
                  <div className="transform transition-all group-hover:translate-x-2">
                    <h4 className="font-semibold">Deployment</h4>
                    <p className="font-normal">
                     Deployment with Vercel, Netfliy and Github Pages.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     {/* Projects Section */}
<section id="projects" className="py-16 md:py-24 px-6">
  <div className="container mx-auto max-w-6xl">
    <div className="flex items-center mb-12">
      <Code size={24} className="text-blue-500 dark:text-blue-400 mr-3" />
      <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 ${
            darkMode ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700' : 'bg-white'
          }`}
        >
          <div className="relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover transition-transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
              <span className="text-white p-4 font-bold">View Details</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="font-normal mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button className="flex items-center text-blue-500 dark:text-blue-400 hover:underline transform transition-transform hover:translate-x-2">
              <a href={project.link}>View Project <ExternalLink size={16} className="ml-1" />
            </a>
            </button>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-8">
      <a 
        href="https://github.com/kamilaap?tab=repositories" target="_blank"
        className="inline-flex items-center px-6 py-3 border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-transform hover:-translate-y-1"
      >
        View More Project <ArrowRight size={16} className="ml-2" />
      </a>
    </div>
  </div>
</section>
      {/* Skills Section */}
      <section id="skills" className={`py-16 md:py-24 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-12">
            <Award size={24} className="text-blue-500 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              {skills.map((skill, index) => (
                <div key={index} className="mb-6 group">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{skill.name}</span>
                    <span className="group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-1000 ease-out group-hover:bg-gradient-to-r from-blue-500 to-purple-500 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Technical Toolkit</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4 transform transition-all hover:-translate-y-1">
                  <h4 className="font-semibold mb-2 text-blue-500 dark:text-blue-400">Frontend</h4>
                  <ul className="space-y-1 font-normal">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      React.js / Next.js
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      TypeScript
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      Flutter/Dart
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      Laravel
                    </li>
                  </ul>
                </div>
                <div className="mb-4 transform transition-all hover:-translate-y-1">
                  <h4 className="font-semibold mb-2 text-blue-500 dark:text-blue-400">Backend</h4>
                  <ul className="space-y-1 font-normal">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      Node.js / Express
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      MySQL / PostgreSQL
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      REST API 
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      Authentication / Security
                    </li>
                  </ul>
                </div>
                <div className="mb-4 transform transition-all hover:-translate-y-1">
                  <h4 className="font-semibold mb-2 text-blue-500 dark:text-blue-400">Tools & Methods</h4>
                  <ul className="space-y-1 font-normal">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      Git / GitHub
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      CI/CD
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      Agile / Scrum
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      Unit & Integration Testing
                    </li>
                  </ul>
                </div>
                <div className="mb-4 transform transition-all hover:-translate-y-1">
                  <h4 className="font-semibold mb-2 text-blue-500 dark:text-blue-400">Design</h4>
                  <ul className="space-y-1 font-normal">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      Figma
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      UI/UX Principles
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      Responsive Design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      Web Accessibility
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-12">
            <Briefcase size={24} className="text-blue-500 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          </div>
          <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`mb-12 relative ${
                  darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-blue-50'
                } p-6 rounded-lg transition-all transform hover:-translate-y-1`}
              >
                <div className="absolute -left-12 w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center border-4 border-white dark:border-gray-900">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <span className="text-blue-500 dark:text-blue-400 font-medium">{exp.period}</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 ">{exp.company}</h4>
                <p className="font-normal">{exp.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
  <a 
    href="/assets/CV Kamila.pdf" 
    download="CV Kamila.pdf"
    className="inline-flex items-center px-6 py-3 border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-transform hover:-translate-y-1"
  >
    Download Resume <ArrowRight size={16} className="ml-2" />
  </a>
</div>
        </div>
      </section>

      {/* Education Section */}
      <section className={`py-16 md:py-24 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-12">
            <BookOpen size={24} className="text-blue-500 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
          <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700 hover:bg-gray-750' : 'bg-white hover:bg-blue-50'} transition-all transform hover:-translate-y-1`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">SMKN 4 Kota Bogor</h3>
                <span className="text-blue-500 dark:text-blue-400">2022-2025</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">Software Engineer and Game Development</h4>
              <p className="font-normal mb-4">
               Selama 3 tahun, saya belajar berbagai macam bahasa pemrograman dan lulus setelah mengikuti Uji Kompetensi dan Praktik Kerja Lapangan. Selain itu, saya juga mengikuti organisasi Palang Merah Remaja dan terpilih sebagai Ketua Umum. Dari sini terbentuk Soft Skills dan Hard Skills.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="px-3 py-1 text-sm bg-blue-100  dark:bg-blue-900/50 text-blue-800 dark:text-white rounded-full">
                  HTML
                </li>
                <li className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-white dark:text-white rounded-full">
                 CSS
                </li>
                <li className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-white dark:text-white rounded-full">
                  JavaScript
                </li>
                <li className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-white dark:text-white rounded-full">
                  Java
                </li>
                <li className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-white dark:text-white rounded-full">
                  Dart/Flutter
                </li>
                <li className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-white dark:text-white rounded-full">
                  PHP/Laravel/CI4
                </li>
                <li className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-white dark:text-white rounded-full">
                 MySQL/PostgreSQL
                </li>
                <li className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-white dark:text-white rounded-full">
                  Express JS/Node JS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-12">
            <Mail size={24} className="text-blue-500 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="font-normal mb-6">
                Feel free to reach out for collaborations, opportunities, or even just a tech chat. 
                I'm currently open to new projects and job opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <Mail size={20} className="text-blue-500 dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:kp.herlambang@gmail.com" className="text-blue-500 dark:text-blue-400 hover:underline">kp.herlambang@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900  flex items-center justify-center mr-4">
                    <Github size={20} className="text-blue-500 dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <a href="https://github.com/kamilaap" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">kamilaap</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <Linkedin size={20} className="text-blue-500 dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <a href="https://linkedin.com/in/kamila-putri-herlambang" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">kamila-putri-herlambang</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900  flex items-center justify-center mr-4">
                    <Twitter size={20} className="text-blue-500 dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Twitter</h4>
                    <a href="https://x.com/kamilaputr58026" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">kamilaputr58026</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}>
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full p-3 rounded-md border ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Kamila Putri Herlambang" 
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-3 rounded-md border ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300' 
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="kp.herlambang@gmail.com" 
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5" 
                    className={`w-full p-3 rounded-md border ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Hi Kamila, I'd like to talk about..." 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md transition-colors shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}>
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-xl font-bold flex items-center">
                <span className="text-blue-500 dark:text-blue-400">Port</span>
                <span>folio</span>
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Building digital experiences with passion</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/kamilaap" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                <Github size={18} className="text-gray-700 dark:text-gray-200" />
              </a>
              <a 
                href="https://linkedin.com/in/kamila-putri-herlambang" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                <Linkedin size={18} className="text-gray-700 dark:text-gray-200" />
              </a>
              <a 
                href="https://x.com/kamilaputr58026" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                <Twitter size={18} className="text-gray-700 dark:text-gray-200" />
              </a>
              <a 
                href="mailto:kp.herlambang@gmail.com" 
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                <Mail size={18} className="text-gray-700 dark:text-gray-200" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Portofolio Kamila. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}