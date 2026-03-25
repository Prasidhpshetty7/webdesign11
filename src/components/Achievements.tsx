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
          {achievements.length === 0 ? (
            <div className="border border-gray-200 dark:border-white/10 p-12 rounded-lg bg-white dark:bg-transparent transition-colors duration-300 text-center">
              <Award className="w-12 h-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Achievements coming soon! Working on exciting projects.
              </p>
            </div>
          ) : (
            achievements.map((achievement, index) => (
              <div key={index} className="border border-gray-200 dark:border-white/10 p-6 rounded-lg bg-white dark:bg-transparent transition-colors duration-300 hover:shadow-lg dark:hover:border-white/20">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <div className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
                        {achievement.title}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                        🏆 {achievement.award}
                      </div>
                    </div>

                    <div className="text-md font-semibold mb-2 text-black dark:text-white transition-colors duration-300">
                      {achievement.project}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 transition-colors duration-300 text-base">
                      {achievement.description}
                    </p>

                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-mono">
                        {achievement.tech}
                      </div>                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3" />
                        {achievement.date}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-6">
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 inline-block transition-colors duration-300 border border-gray-300 dark:border-white/20 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-white/10 text-sm"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
