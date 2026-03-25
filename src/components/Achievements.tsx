"use client"

import { Award, Calendar } from "lucide-react"

export default function Achievements() {
  const achievements = [
    // Add your achievements here
    // Example format:
    // {
    //   title: "Event Name",
    //   award: "Award/Prize",
    //   project: "Project Name",
    //   description: "Project description",
    //   date: "Month Year",
    //   link: "https://link-to-achievement",
    //   tech: "Technologies used"
    // }
  ]
  return (
    <section id="achievements" className="py-20 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-[52rem] mx-auto">
        <div className="text-2xl font-bold mb-8 text-neutral-800 dark:text-neutral-200 flex items-center gap-2 underline underline-offset-4 decoration-2 decoration-neutral-400 dark:decoration-neutral-600">
        Achievements
      </div>

        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-white/10 p-16 rounded-lg bg-white dark:bg-transparent transition-colors duration-300 text-center">
            <Award className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-6" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Achievements coming soon! Working on exciting projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
