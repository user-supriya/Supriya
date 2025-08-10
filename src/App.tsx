import { motion } from 'framer-motion';
import { Code, Palette, Coffee, Mail, Github, Linkedin, ExternalLink, Heart, XIcon } from 'lucide-react';
import { GradientBackground } from './components/GradientBackground';
import { FloatingElement } from './components/FloatingElement';
import { SkillCard } from './components/SkillCard';
import './App.css';
import { MorphingDialog, MorphingDialogContainer, MorphingDialogContent, MorphingDialogTrigger } from './components/MorphingDialog';
import profile from './assets/profile.jpg';
const App = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing my projects and skills. Built with modern frontend technologies and featuring smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Git"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Student Management System",
      description: "A Java-based application for managing student records with features for adding, updating, and viewing student information efficiently.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      technologies: ["Java", "HTML", "CSS", "Git", "GitHub"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Interactive Calculator",
      description: "A web-based calculator application with a clean interface and responsive design. Supports basic arithmetic operations and memory functions.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS", "GitHub"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "College Event Portal",
      description: "A frontend application for college events management featuring event listings, registration forms, and responsive design for mobile devices.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
      technologies: ["React", "JavaScript", "CSS", "Git", "JIRA"],
      liveUrl: "",
      githubUrl: "",
    },
  ];

  const skills = [
    {
      icon: <Code size={32} />,
      title: "Frontend Development",
      description: "Building responsive web applications with modern frameworks.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      icon: <Palette size={32} />,
      title: "Programming Languages",
      description: "Strong foundation in programming and exploring modern technologies.",
      technologies: ["C++", "C", "Java", "JavaScript",],
    },
    {
      icon: <Coffee size={32} />,
      title: "Development Tools",
      description: "Experienced with version control and project management tools.",
      technologies: ["Git", "GitHub", "JIRA", "Figma"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <GradientBackground />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-6"
      >
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            Supriya
          </motion.div>
          <div className="flex items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:supriyasaloni69@gmail.com "
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-pink-300/50 transition-all"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/supriyasaloni9"
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-pink-300/50 transition-all"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/supriya-salonii/"
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-pink-300/50 transition-all"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <FloatingElement>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <img
                  src={profile}
                  alt="Supriya"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </motion.div>
          </FloatingElement>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Frontend Developer &{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Creative Designer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Computer Science student at Techno India College of Technology with a passion for frontend development.
            Creating beautiful web experiences while mastering modern technologies and building innovative projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
           <a href="/Supriya.pdf" download>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all"
  >
    Download Resume
  </motion.button>
</a>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/20 rounded-full font-semibold hover:border-pink-300/50 transition-all"
            >
              Get In Touch
            </motion.button> */}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <MorphingDialog
                  transition={{
                    type: "spring",
                    bounce: 0.05,
                    duration: 0.25,
                  }}
                >
                  <MorphingDialogTrigger
                    style={{ borderRadius: "16px" }}
                    className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-300/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </MorphingDialogTrigger>

                  <MorphingDialogContainer>
                    <MorphingDialogContent
                      style={{ borderRadius: "24px" }}
                      className="pointer-events-auto relative flex h-auto w-full max-w-2xl flex-col overflow-hidden bg-gray-900/95 backdrop-blur-xl border border-white/10"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-64 w-full object-cover"
                      />
                      <div className="p-8">
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full border border-pink-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors"
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                            >
                              <Github size={16} />
                              View Code
                            </a>
                          )}
                        </div>
                      </div>
                      <button
                        className="absolute right-6 top-6 text-white hover:text-pink-300 transition-colors"
                      >
                        <XIcon size={24} />
                      </button>
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative z-10 px-0 py-20 bg-gradient-to-r from-pink-900/10 via-purple-900/10 to-indigo-900/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Education Journey
          </motion.h2>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-pink-400 via-purple-400 to-indigo-400"></div>

            {/* Current Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center mb-12"
            >
              <div className="w-1/2 pr-8 text-right">
                <div className="p-6 bg-white/10 backdrop-blur-lg border border-pink-300/30 rounded-xl hover:border-pink-400/50 transition-all duration-300">
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white">Techno India College Of Technology</h3>
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      TI
                    </div>
                  </div>
                  <p className="text-pink-300 font-medium mb-2">Bachelor of Technology - Computer Science</p>
                  <p className="text-gray-300 text-sm mb-3">Aug 2023 - Jun 2027</p>
                  <div className="flex justify-end flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-400/30">Coding</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30">Elocution</span>
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-400/30">Sports</span>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-4 border-black"></div>

              <div className="w-1/2 pl-8">
                <div className="text-sm text-gray-400">
                  <span className="inline-block px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Current</span>
                </div>
              </div>
            </motion.div>

            {/* Previous Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center"
            >
              <div className="w-1/2 pr-8">
                <div className="text-sm text-gray-400 text-right">
                  <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Completed</span>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full border-4 border-black"></div>

              <div className="w-1/2 pl-8">
                <div className="p-6 bg-white/10 backdrop-blur-lg border border-purple-300/30 rounded-xl hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      KV
                    </div>
                    <h3 className="text-xl font-bold text-white">Kendriya Vidyalaya</h3>
                  </div>
                  <p className="text-purple-300 font-medium mb-2">Higher Secondary Education</p>
                  <p className="text-gray-300 text-sm mb-3">Aug 2020 - Jun 2022</p>
                  <div className="inline-block px-3 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 rounded-lg border border-yellow-400/30">
                    <span className="font-bold">Grade: 83.4%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold mb-4">Let's Connect & Build Together</h3>
            <p className="text-gray-300 mb-6">
              Currently pursuing Computer Science and always eager to learn new technologies and work on exciting projects.
            </p>
            <a
              href="https://www.linkedin.com/in/supriya-salonii/"
              className='text-white  hover:text-white'
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all"
              >
                Work Together
              </motion.button>
            </a>
          </motion.div>

          <div className="flex justify-center items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-pink-400" />
            <span>by Supriya</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
