import '../styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'Abdelrahman Korayem - Front-End Developer',
  description: 'Portfolio of Abdelrahman Korayem - React, Next.js, TypeScript Developer'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#070707] text-white">
        <div className="min-h-screen container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  )
}