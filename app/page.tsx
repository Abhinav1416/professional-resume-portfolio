"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Server,
  Shield,
  Zap,
  Globe,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

// Custom hook for mouse follow effect
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return mousePosition
}

// Animated section wrapper
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Wave divider component
function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          className="fill-current text-blue-50 dark:text-slate-800"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          className="fill-current text-blue-100 dark:text-slate-700"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className="fill-current text-blue-200 dark:text-slate-600"
        />
      </svg>
    </div>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mousePosition = useMousePosition()

  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Navigation sections
  const sections = [
    { id: "hero", label: "Home" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ]

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "education", "projects", "skills", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-x-hidden">
      {/* Mouse follow glow effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />

      {/* Sticky Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-white/20"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              SA
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 space-y-2"
              >
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {section.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />

        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              >
                Gudipudi Sasanka Abhinav
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-3xl text-muted-foreground font-medium"
              >
                Full-Stack Developer & Software Engineer
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="max-w-4xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Building scalable, secure full-stack systems with Java Spring Boot and React.js. Specialized in
              microservices architecture, real-time applications, and modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-4 pt-8"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Zap className="w-5 h-5" />
                  View My Projects
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                >
                  <a href="mailto:gudipudiabhinav2005@gmail.com">
                    <Mail className="w-4 h-4" />
                    Get In Touch
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center gap-6 pt-8"
            >
              {[
                { icon: Github, href: "https://github.com/Abhinav1416", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/gudipudi-abhinav-a04a1728b", label: "LinkedIn" },
                { icon: Phone, href: "tel:+917382987369", label: "Phone" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <WaveDivider className="absolute bottom-0 h-24" />
      </section>

      <main className="relative z-10">
        {/* Education Section */}
        <section id="education" className="py-24 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection className="text-center space-y-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.5 }}
              >
                Education
              </motion.h2>

              <motion.div whileHover={{ y: -8, rotateY: 5 }} className="max-w-3xl mx-auto">
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardHeader className="text-center space-y-4">
                    <CardTitle className="text-2xl md:text-3xl font-bold">
                      International Institute of Information Technology, Naya Raipur
                    </CardTitle>
                    <CardDescription className="text-lg md:text-xl">
                      B.Tech in Data Science and Artificial Intelligence
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <span className="text-muted-foreground text-lg">Aug 2023 - May 2027 (Expected)</span>
                      <motion.div whileHover={{ scale: 1.1 }} className="relative">
                        <Badge
                          variant="secondary"
                          className="text-lg px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30"
                        >
                          CGPA: 7.54/10
                        </Badge>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        <WaveDivider className="h-24" />

        {/* Projects Section */}
        <section
          id="projects"
          className="py-24 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-900/50"
        >
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection className="space-y-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.5 }}
              >
                Featured Projects
              </motion.h2>

              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "CommerceCore",
                    description: "Modular E-commerce Microservices Platform",
                    github: "https://github.com/Abhinav1416/CommerceCore-Microservices",
                    tech: ["Spring Boot", "PostgreSQL", "Apache Kafka", "Docker", "Keycloak", "Redis"],
                    features: [
                      "Architected modular microservices for products, users, orders, reviews, and cart",
                      "Implemented Event-Driven Architecture with Kafka for asynchronous workflows",
                      "Applied Resilience4j patterns (CircuitBreaker, Retry, RateLimiter) for service resilience",
                      "Secured APIs with Keycloak, OAuth2, and JWT authentication",
                      "Optimized performance with Redis caching for product metadata",
                    ],
                  },
                  {
                    title: "LinkSphere",
                    description: "Real-time Social Platform with WebSockets",
                    github: "https://github.com/Abhinav1416/LinkSphere",
                    tech: ["React.js", "Tailwind CSS", "Spring Boot", "WebSockets", "PostgreSQL", "Apache Lucene"],
                    features: [
                      "Implemented Google OAuth authentication with JWT access/refresh tokens",
                      "Built real-time messaging using STOMP over WebSockets with presence tracking",
                      "Designed responsive frontend with React.js and Tailwind CSS",
                      "Integrated Apache Lucene for advanced search capabilities",
                    ],
                  },
                  {
                    title: "AI Resume Analyzer",
                    description: "AI-Powered ATS Resume Analysis Tool",
                    github: "https://github.com/Abhinav1416/ats-analyzer",
                    live: "https://ats-analyzer-v1.vercel.app",
                    tech: ["React.js", "TypeScript", "Tailwind CSS", "Puter.js", "Zustand", "Vite"],
                    features: [
                      "Developed AI-powered resume analyzer with in-browser authentication",
                      "Implemented secure resume upload/storage using Puter.js APIs",
                      "Built responsive UI with React.js, TypeScript, and Zustand state management",
                      "Deployed scalable application with cross-device compatibility",
                    ],
                  },
                  {
                    title: "EventVault",
                    description: "Event Management System with QR Validation",
                    github: "https://github.com/Abhinav1416/EventVault",
                    tech: ["React.js", "Tailwind CSS", "Spring Boot", "Keycloak", "ZXing", "PostgreSQL"],
                    features: [
                      "Generated encrypted QR codes with ZXing for secure ticket validation",
                      "Implemented role-based access control with Keycloak for organizers",
                      "Built interactive dashboards with live data rendering and role-based views",
                      "Designed smooth form interactions and API integrations",
                    ],
                  },
                ].map((project, index) => (
                  <AnimatedSection key={project.title} delay={index * 0.2}>
                    <motion.div whileHover={{ y: -12, rotateY: 2 }} className="h-full group">
                      <Card className="h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <CardHeader className="relative z-10">
                          <div className="flex justify-between items-start">
                            <div className="space-y-2">
                              <CardTitle className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="text-lg">{project.description}</CardDescription>
                            </div>
                            <div className="flex gap-2">
                              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                                <Button
                                  asChild
                                  variant="outline"
                                  size="sm"
                                  className="hover:bg-blue-50 dark:hover:bg-blue-900/20 bg-transparent"
                                >
                                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4" />
                                  </a>
                                </Button>
                              </motion.div>
                              {project.live && (
                                <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                                  <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="hover:bg-green-50 dark:hover:bg-green-900/20 bg-transparent"
                                  >
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="w-4 h-4" />
                                    </a>
                                  </Button>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="relative z-10 space-y-6">
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: techIndex * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>

                          <ul className="space-y-3">
                            {project.features.map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <motion.div
                                  className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                  whileHover={{ scale: 1.5 }}
                                />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection className="space-y-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.5 }}
              >
                Technical Skills
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Languages",
                    icon: Code,
                    color: "text-blue-600",
                    skills: ["Java", "TypeScript", "Python", "C++", "SQL"],
                  },
                  {
                    title: "Frontend",
                    icon: Globe,
                    color: "text-green-600",
                    skills: ["React.js", "Puter.js", "Tailwind CSS", "HTML"],
                  },
                  {
                    title: "Backend",
                    icon: Server,
                    color: "text-purple-600",
                    skills: ["Spring Boot", "Spring Security", "Hibernate", "REST APIs", "WebSocket", "Apache Kafka"],
                  },
                  {
                    title: "Authentication",
                    icon: Shield,
                    color: "text-red-600",
                    skills: ["Keycloak", "OAuth 2.0", "JWT"],
                  },
                  {
                    title: "Databases",
                    icon: Database,
                    color: "text-orange-600",
                    skills: ["PostgreSQL", "Redis", "Apache Lucene"],
                  },
                  {
                    title: "DevOps & Tools",
                    icon: Zap,
                    color: "text-yellow-600",
                    skills: ["Docker", "Git", "Maven", "Gradle", "Postman"],
                  },
                ].map((category, index) => (
                  <AnimatedSection key={category.title} delay={index * 0.1}>
                    <motion.div whileHover={{ y: -8, scale: 1.02 }} className="h-full">
                      <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3 text-xl">
                            <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                              <category.icon className={`w-6 h-6 ${category.color}`} />
                            </motion.div>
                            {category.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: skillIndex * 0.1 }}
                              whileHover={{ x: 4 }}
                              className="flex items-center gap-2"
                            >
                              <motion.div
                                className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                              />
                              <span className="text-sm font-medium">{skill}</span>
                            </motion.div>
                          ))}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection className="space-y-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.5 }}
              >
                Achievements
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {[
                  {
                    platform: "Codeforces",
                    rating: "1336",
                    subtitle: "Max Rating (Pupil)",
                    color: "text-blue-600",
                    bgColor: "from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30",
                  },
                  {
                    platform: "LeetCode",
                    rating: "1731",
                    subtitle: "Max Rating (Top 10% globally)",
                    color: "text-orange-600",
                    bgColor: "from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30",
                  },
                ].map((achievement, index) => (
                  <AnimatedSection key={achievement.platform} delay={index * 0.2}>
                    <motion.div whileHover={{ y: -8, scale: 1.05 }} className="group">
                      <Card className="text-center bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />

                        <CardHeader className="relative z-10">
                          <CardTitle className="text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                            {achievement.platform}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="relative z-10 space-y-4">
                          <motion.div
                            className={`text-5xl font-bold ${achievement.color}`}
                            whileHover={{ scale: 1.1 }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            {achievement.rating}
                          </motion.div>
                          <div className="text-muted-foreground font-medium">{achievement.subtitle}</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Coursework */}
              <AnimatedSection delay={0.4} className="space-y-8">
                <motion.h3
                  className="text-3xl font-bold text-center"
                  whileInView={{ scale: [0.9, 1.05, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  Relevant Coursework
                </motion.h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                  {[
                    "Data Structures and Algorithms",
                    "Distributed Systems",
                    "Database Management Systems",
                    "Operating Systems",
                    "Object-Oriented Programming",
                    "Computer Networks",
                  ].map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <Card className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-300">
                        <CardContent className="pt-6">
                          <div className="text-sm font-medium">{course}</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </section>

        <WaveDivider className="h-24 rotate-180" />

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center space-y-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.5 }}
              >
                Let's Connect
              </motion.h2>

              <motion.p
                className="text-xl text-blue-100 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Interested in collaborating or discussing opportunities? I'd love to hear from you!
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {[
                  {
                    icon: Mail,
                    href: "mailto:gudipudiabhinav2005@gmail.com",
                    label: "Email Me",
                    color: "hover:bg-red-500",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/gudipudi-abhinav-a04a1728b",
                    label: "LinkedIn",
                    color: "hover:bg-blue-600",
                  },
                  { icon: Github, href: "https://github.com/Abhinav1416", label: "GitHub", color: "hover:bg-gray-700" },
                  { icon: Phone, href: "tel:+917382987369", label: "Call Me", color: "hover:bg-green-500" },
                ].map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full ${contact.color} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <contact.icon className="w-5 h-5" />
                    {contact.label}
                  </motion.a>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  )
}
