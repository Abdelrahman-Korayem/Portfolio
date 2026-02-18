"use client"
import React, { useEffect, useState } from 'react'
import { Code2, Terminal } from 'lucide-react'

export default function SplashScreen() {
    const [stage, setStage] = useState<'visible' | 'exiting' | 'hidden'>('visible')

    useEffect(() => {
        
        const exitTimer = setTimeout(() => {
            setStage('exiting')
        }, 2500)

        // Hide completely after exit animation
        const hideTimer = setTimeout(() => {
            setStage('hidden')
        }, 3500)

        return () => {
            clearTimeout(exitTimer)
            clearTimeout(hideTimer)
        }
    }, [])

    if (stage === 'hidden') return null

    return (
        <div
            className={`
        fixed inset-0 z-[99999] flex flex-col items-center justify-center 
        bg-[#070707] transition-opacity duration-1000 ease-in-out
        ${stage === 'visible' ? 'opacity-100' : ''}
        ${stage === 'exiting' ? 'opacity-0 pointer-events-none' : ''}
      `}
        >
            <div className="relative">
                {/* Animated Background Glow */}
                <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl animate-pulse delay-75"></div>

                {/* Main Logo/Icon Container */}
                <div className="relative flex items-center justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 border border-yellow-400/10 backdrop-blur-sm animate-bounce-gentle">
                        <Code2 className="w-12 h-12 text-yellow-400" />
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-yellow-400 tracking-tight">
                    Abdelrahman Korayem
                </h1>
                <div className="flex items-center justify-center gap-2 text-yellow-400/80 text-sm">
                    <Terminal className="w-4 h-4" />
                    <span className="typing-effect">Front-End Developer</span>
                </div>
            </div>

            {/* Loading Bar */}
            <div className="absolute bottom-20 w-48 h-1 bg-gray-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-loading-bar rounded-full"></div>
            </div>

            <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; margin-left: 0; }
          50% { width: 100%; margin-left: 0; }
          100% { width: 0%; margin-left: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
      `}</style>
        </div>
    )
}
