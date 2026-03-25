"use client"
import Image from 'next/image'
import { Mail, Coffee } from 'lucide-react'
import { SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-8 md:pt-24 md:pb-12 px-6 md:px-12 overflow-hidden text-black dark:text-white transition-colors duration-300">
      
      <div className="max-w-[52rem] mx-auto z-10 w-full relative">
        <div className="flex flex-col items-start gap-10">
          
          {/* Header Row: Image & Name */}
          <div className="flex gap-8">
            <div 
               className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0"
            >
              <Image
                src="/images/profile.jpg"
                alt="Prasidh P Shetty"
                fill
                sizes="(max-width: 768px) 96px, 112px"
                className="object-cover rounded-2xl border-2 border-white dark:border-neutral-800 shadow-lg"
                priority
              />
            </div>

            <div
              className="flex flex-col justify-between py-1"
            >
              <div className="text-sm font-bold font-mono tracking-widest text-violet-600 dark:text-violet-400">
                Web Designer & Full-Stack Developer
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">
                  Prasidh P Shetty
                </div>
                <p className="text-lg text-neutral-500 dark:text-neutral-400">
                  Full-Stack Developer
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start space-y-8">
            <div>
              <div className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-full">
                <p className="mb-2">
                   I build modern, visually engaging, and user-focused digital experiences with <TechBadge><SiTypescript className="w-4 h-4 mr-1 text-[#3178C6]" /> TypeScript</TechBadge>, <TechBadge><SiReact className="w-4 h-4 mr-1 text-[#61DAFB]" /> React</TechBadge>, and <TechBadge><SiNextdotjs className="w-4 h-4 mr-1 text-black dark:text-white" /> Next.js</TechBadge>.
                </p>
                <p className="mb-3">
                   I work across the full development stack — from crafting intuitive <span className="font-semibold text-black dark:text-white">frontend interfaces</span> to building robust <span className="font-semibold text-black dark:text-white">backend systems</span>, APIs, and database architectures.
                </p>
                <p>
                   I believe great digital products are built at the intersection of aesthetics, usability, and engineering.
                </p>
              </div>
            </div>

            <div
              className="flex flex-wrap gap-4"
            >
               <a 
                 href="https://github.com/Prasidhpshetty7"
                 target="_blank"
                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
               >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View GitHub
               </a>
               <a 
                 href="mailto:shettyprasidh262@gmail.com"
                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition-opacity"
               >
                  <Mail className="w-4 h-4" />
                  Email
               </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-lg font-semibold mx-1 align-middle">
      {children}
    </span>
  )
}
