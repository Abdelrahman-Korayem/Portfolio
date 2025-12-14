"use client";

import React, { useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamic imports
const About = dynamic(() => import('./pages/About'), { ssr: false })
const Resume = dynamic(() => import('./pages/Resume'), { ssr: false })
const Portfolio = dynamic(() => import('./pages/Portfolio'), { ssr: false })
// const Blog = dynamic(() => import('./pages/Blog'), { ssr: false })
const Contact = dynamic(() => import('./pages/Contact'), { ssr: false })

const pages = ['about', 'resume', 'portfolio',  'contact'] as const
type Page = typeof pages[number]

export default function MainContent() {
  const [page, setPage] = useState<Page>('about')

  const handlePageChange = (newPage: Page) => {
    console.log('Changing to:', newPage) // للتأكد إن الزرار شغال
    setPage(newPage)
  }

  return (
    <div className="relative">
      {/* Top Navigation - Desktop */}
      <nav className="hidden md:block absolute top-0 right-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] rounded-2xl shadow-xl z-10">
        <ul className="flex items-center p-2 gap-1">
          {pages.map(p => (
            <li key={p}>
              <button
                onClick={() => handlePageChange(p)}
                className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 capitalize ${
                  page === p
                    ? 'text-yellow-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {p}
                
                {page === p && (
                  <span className="absolute inset-0 bg-yellow-400/10 rounded-xl border border-yellow-400/30"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-3 py-2 shadow-2xl backdrop-blur-lg">
          <ul className="flex justify-around items-center">
            {pages.map(p => (
              <li key={p}>
                <button
                  onClick={() => handlePageChange(p)}
                  className={`px-4 py-3 rounded-xl font-medium text-xs transition-all duration-300 capitalize ${
                    page === p
                      ? 'text-yellow-400'
                      : 'text-gray-400'
                  }`}
                >
                  {p}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="mt-20 md:mt-0 space-y-6 pb-24 md:pb-0">
        <div key={page} className="animate-fadeIn">
          {page === 'about' && <About />}
          {page === 'resume' && <Resume />}
          {page === 'portfolio' && <Portfolio />}
          {/* {page === 'blog' && <Blog />} */}
          {page === 'contact' && <Contact />}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}