"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Server, 
  Cloud, 
  Trophy, 
  Briefcase, 
  GraduationCap,
  Database,
  Terminal,
  BarChart3
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-blue-100">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur-lg dark:bg-slate-950/70">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-end">
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20 space-y-28">
        
        {/* Hero Section */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Gudipudi Sasanka Abhinav
            </h1>
            <p className="text-xl text-blue-600 font-semibold tracking-tight">
              Software Engineer
            </p>
          </div>
          
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            I focus on engineering high performance backend systems with Java Spring Boot and orchestrating scalable cloud infrastructure on AWS.
          </p>

          {/* Highly Visible Social & Profile Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="https://github.com/Abhinav1416/" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-bold hover:border-blue-600 transition-all">
              <Github className="w-4 h-4"/> GitHub
            </a>
            <a href="https://www.linkedin.com/in/gudipudi-abhinav-a04a1728b/" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-bold hover:border-blue-600 transition-all">
              <Linkedin className="w-4 h-4"/> LinkedIn
            </a>
            <a href="https://leetcode.com/u/HashMap1416/" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800 rounded-full text-xs font-bold text-orange-700 dark:text-orange-400 hover:scale-105 transition-all">
              <Code2 className="w-4 h-4"/> LeetCode (Knight)
            </a>
            <a href="https://codeforces.com/profile/HashMap1416" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-full text-xs font-bold text-blue-700 dark:text-blue-400 hover:scale-105 transition-all">
              <BarChart3 className="w-4 h-4"/> Codeforces (Specialist)
            </a>
            <a href="mailto:gudipudiabhinav2005@gmail.com" className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5"/>
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-10">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b pb-4">Experience</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-10">
              <div className="text-sm font-bold text-slate-400">Oct 2025 — Dec 2025</div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">PrimeVacations</h3>
                  <p className="text-blue-600 font-bold text-sm italic">Full Stack Intern (Remote)</p>
                </div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed list-none">
                  <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-600 before:rounded-full">
                    Engineered a scalable media pipeline using <strong>AWS S3 pre-signed URLs</strong> and MongoDB, improving rendering to <strong>sub-400ms</strong>.
                  </li>
                  <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-600 before:rounded-full">
                    Developed an AI-powered itinerary engine using <strong>Groq API</strong>, reducing manual entry by <strong>30–40%</strong>.
                  </li>
                  <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-600 before:rounded-full">
                    Implemented concurrent AI extraction with <strong>Promise.all</strong> and <strong>Zod</strong> validation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-10">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b pb-4">Projects</h2>
          <div className="grid gap-8">
            {/* CodeDuels */}
            <div className="group relative border-l-4 border-slate-200 pl-8 py-2 hover:border-blue-600 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">CodeDuels</h3>
                <a href="https://github.com/Abhinav1416/coding-platform" target="_blank" className="text-slate-400 hover:text-blue-600"><ExternalLink className="w-5 h-5"/></a>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                <li>• Built a real-time 1v1 coding platform serving <strong>2,000+ users</strong> and 2,500+ matches using WebSockets and Judge0.</li>
                <li>• Optimized backend performance by designing async submission pipelines with <strong>AWS SQS</strong>, preventing API bottlenecks.</li>
                <li>• Orchestrated <strong>54 AWS resources</strong> using Terraform, including ECS Fargate, RDS, and ElastiCache for high availability.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "AWS", "Terraform", "Redis", "SQS"].map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-tighter text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1">{t}</span>)}
              </div>
            </div>

            {/* CommerceCore */}
            <div className="group relative border-l-4 border-slate-200 pl-8 py-2 hover:border-blue-600 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">CommerceCore</h3>
                <a href="https://github.com/Abhinav1416/CommerceCore-Microservices" target="_blank" className="text-slate-400 hover:text-blue-600"><ExternalLink className="w-5 h-5"/></a>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                <li>• Architected modular microservices for products, users, and orders with independent deployability using Docker.</li>
                <li>• Implemented Event-Driven Architecture using <strong>Kafka</strong> and applied Resilience4j patterns for system reliability.</li>
                <li>• Reduced database load by implementing <strong>Redis caching</strong> for product metadata.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Spring Boot", "Kafka", "Docker", "Keycloak", "PostgreSQL", "Redis"].map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-tighter text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1">{t}</span>)}
              </div>
            </div>

            {/* LeetCode GIF Reactions */}
            <div className="group relative border-l-4 border-slate-200 pl-8 py-2 hover:border-blue-600 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">LeetCode GIF Reactions</h3>
                <a href="https://github.com/Abhinav1416/leetcode-reactions-extension" target="_blank" className="text-slate-400 hover:text-blue-600"><ExternalLink className="w-5 h-5"/></a>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                <li>• Developed a Manifest V3 extension detecting successful submissions to trigger custom celebration overlays.</li>
                <li>• Reached <strong>100+ installs</strong> on the Chrome Web Store with a 5-star rating.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["React", "Vite", "Chrome API"].map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-tighter text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1">{t}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-10">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b pb-4">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Server className="w-4 h-4"/>
                <h3 className="text-sm font-bold uppercase tracking-wider">Backend</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-loose font-medium">
                Spring Boot, Spring Security, Hibernate, Apache Kafka
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Terminal className="w-4 h-4"/>
                <h3 className="text-sm font-bold uppercase tracking-wider">DevOps & Tools</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-loose font-medium">
                AWS, Docker, Terraform, CI/CD, GitHub Actions, Git, Linux
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Code2 className="w-4 h-4"/>
                <h3 className="text-sm font-bold uppercase tracking-wider">Languages & Frontend</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-loose font-medium">
                Java, C++, Python, React.js
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Database className="w-4 h-4"/>
                <h3 className="text-sm font-bold uppercase tracking-wider">Databases & Security</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-loose font-medium">
                PostgreSQL, Redis, OAuth 2.0, JWT, RBAC
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="space-y-10">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b pb-4">Achievements</h2>
          <div className="grid gap-4">
            {/* Codeforces Specialist */}
            <div className="flex justify-between items-center p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <Trophy className="w-4 h-4 text-blue-500"/>
                <span className="text-sm font-bold">Codeforces Max Rating</span>
              </div>
              <span className="text-lg font-black text-blue-600">1577 <span className="text-xs text-slate-400">(Specialist)</span></span>
            </div>
            {/* LeetCode Knight */}
            <div className="flex justify-between items-center p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <Trophy className="w-4 h-4 text-orange-500"/>
                <span className="text-sm font-bold">LeetCode Max Rating</span>
              </div>
              <span className="text-lg font-black text-blue-600">1881 <span className="text-xs text-slate-400">(Knight)</span></span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-600 text-white">
              <Cloud className="w-5 h-5"/>
              <span className="text-sm font-black uppercase tracking-wider text-center flex-1">AWS Certified Solutions Architect – Associate</span>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="pt-10 border-t border-slate-200 dark:border-slate-800 pb-16">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex gap-5">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full h-fit">
                <GraduationCap className="w-6 h-6 text-blue-600"/>
              </div>
              <div>
                <h3 className="font-bold text-xl leading-tight">IIIT Naya Raipur</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">B.Tech in Data Science & AI</p>
              </div>
            </div>
            <div className="md:text-right">
              <p className="font-black text-blue-600 text-xl tracking-tighter">7.62 CGPA</p>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Expected May 2027</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}