import React from 'react'

export default function Resume() {
  const education = [
    {
      title: 'High Institute for Computer and Management Information Systems',
      subtitle: 'Bachelor in Management Information Systems',
      period: '2016 — 2020',
      location: 'Abu Qir, Alexandria',
      description: 'Graduated with a comprehensive understanding of information systems, database management, and software development principles.'
    }
  ]

  const experience = [
    {
      title: 'Front-End Cross-Platform Development Track',
      company: 'Information Technology Institute (ITI)',
      period: 'July 2025 — November 2025',
      description: 'Completed an intensive Front-End program specializing in React.js, Next.js, TypeScript, and modern UI/UX principles. Developed full-featured web applications with clean, scalable code using Redux Toolkit and React Query.',
      highlights: [
        'Built responsive interfaces using TailwindCSS and shadcn/ui',
        'Implemented API integration and user authentication',
        'Collaborated in Agile teams with Git workflows'
      ]
    }
  ]

  const technicalSkills = {
    'Frontend Development': ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    'Styling & UI': ['TailwindCSS', 'Bootstrap', 'Responsive Design', 'Accessible Design'],
    'State Management': ['Redux Toolkit', 'React Query', 'Context API'],
    'Tools & Workflow': ['Git', 'GitHub', 'Vite', 'npm/yarn', 'Agile Methodologies'],
    'Backend Integration': ['RESTful APIs', 'Axios', 'Fetch API'],
    'Form & Validation': ['React Hook Form', 'Zod', 'Formik', 'Yup']
  }

  const certifications = [
    {
      title: 'Front-End Development Certificate',
      issuer: 'Route Academy',
      date: 'July 2024',
      link: 'https://drive.google.com/file/d/18F8mNp9f0GdhxY5bSTVlqiQ7DdYuOF76/view?usp=sharing'
    }
  ]

  return (
    <article className="p-6 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a]">
      {/* Header */}
      <header className="mb-10">
        <h2 className="text-white text-3xl font-semibold relative pb-4">
          Resume
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded"></span>
        </h2>
      </header>

      {/* Education */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-xl">
            🎓
          </div>
          <h3 className="text-white text-2xl font-semibold">Education</h3>
        </div>

        <div className="relative pl-8 border-l-2 border-[#2a2a2a]">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pb-8 last:pb-0">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border-4 border-[#1a1a1a]"></div>

              <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-5 rounded-xl border border-[#333]">
                <h4 className="text-white text-lg font-medium mb-1">{edu.title}</h4>
                <p className="text-yellow-400 text-sm font-medium mb-2">{edu.period}</p>
                <p className="text-gray-300 text-sm mb-2">{edu.subtitle}</p>
                <p className="text-gray-400 text-sm mb-2">📍 {edu.location}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-xl">
            💼
          </div>
          <h3 className="text-white text-2xl font-semibold">Internship</h3>
        </div>

        <div className="relative pl-8 border-l-2 border-[#2a2a2a]">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pb-8 last:pb-0">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border-4 border-[#1a1a1a]"></div>

              <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-5 rounded-xl border border-[#333]">
                <h4 className="text-white text-lg font-medium mb-1">{exp.title}</h4>
                <p className="text-gray-300 text-sm font-medium mb-2">{exp.company}</p>
                <p className="text-yellow-400 text-sm font-medium mb-3">{exp.period}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{exp.description}</p>

                {exp.highlights && (
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-xl">
            🛠️
          </div>
          <h3 className="text-white text-2xl font-semibold">Technical Skills</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div
              key={category}
              className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-5 rounded-xl border border-[#333]"
            >
              <h4 className="text-yellow-400 font-medium mb-3">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#1a1a1a] border border-[#333] rounded-full text-gray-300 text-sm hover:border-yellow-400/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-xl">
            📜
          </div>
          <h3 className="text-white text-2xl font-semibold">Certifications</h3>
        </div>

        <div className="space-y-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-5 rounded-xl border border-[#333] hover:border-yellow-400/30 transition-colors"
            >
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div>
                  <h4 className="text-white text-lg font-medium mb-1">{cert.title}</h4>
                  <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-yellow-400 text-sm">{cert.date}</p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  className="px-4 py-2 bg-yellow-400 text-black rounded-lg text-sm font-medium hover:bg-yellow-500 transition-colors"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}