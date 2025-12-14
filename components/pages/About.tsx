import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { CgPerformance } from "react-icons/cg";
import { GiMatterStates } from "react-icons/gi";

export default function About() {
  const services = [
    {
      icon: <FaReact />
,
      title: 'React/Next.js Development',
      description: 'Building modern, scalable web applications using React.js, Next.js, and TypeScript with clean architecture.'
    },
    {
      icon: <FaFigma />
,
      title: 'UI/UX Design',
      description: 'Creating responsive, accessible, and visually polished interfaces using TailwindCSS and modern design systems.'
    },
    {
      icon: <CgPerformance />
,
      title: 'Performance Optimization',
      description: 'Implementing SSR, SSG, code splitting, and optimization techniques for high-performance applications.'
    },
    {
      icon: <GiMatterStates />
,
      title: 'State Management',
      description: 'Expert in Redux Toolkit, React Query, and Context API for efficient data flow and caching.'
    }
  ]

 

  return (
    <article className="p-6 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a]">
      {/* Header */}
      <header className="mb-10">
        <h2 className="text-white text-3xl font-semibold relative pb-4">
          About me
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded"></span>
        </h2>
      </header>

      {/* About Text */}
      <section className="text-gray-300 space-y-4 mb-12 leading-relaxed">
        <p>
          I'm <strong className="text-white">Abdelrahman Shawky Korayem</strong>, a Front-End Developer from Damanhour, Egypt, 
          specializing in React.js, Next.js, and TypeScript. I'm passionate about building modern, responsive, 
          and high-performance web applications that deliver exceptional user experiences.
        </p>

        <p>
          My goal is to turn complex problems into simple, beautiful, and intuitive solutions. I focus on writing 
          clean, scalable, and maintainable code while ensuring every project is functional, accessible, and 
          visually appealing.
        </p>
      </section>

      {/* What I'm Doing */}
      <section className="mb-12">
        <h3 className="text-white text-2xl font-semibold mb-6">What I'm doing</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-6 rounded-2xl border border-[#333] shadow-lg hover:border-yellow-400/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <div>
                  <h4 className="text-white text-lg font-medium mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


   
    </article>
  )
}