"use client"

import { WelcomeBanner } from "@/components/welcome-banner"
import { ProgressSection } from "@/components/progress-section"
import { CourseSection } from "@/components/course-section"
import { StudyPlanSection } from "@/components/study-plan-section"
import { QuickQuizSection } from "@/components/quick-quiz-section"
import { BadgesButton } from "@/components/badges-button"
import { motion } from "framer-motion"

interface DashboardContentProps {
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

export function DashboardContent({ activeFilter, setActiveFilter }: DashboardContentProps) {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-50 dark:bg-[#1A1F3A] transition-colors duration-300">
      <motion.div
        className="mx-auto max-w-7xl space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Banner */}
        <motion.div variants={itemVariants}>
          <WelcomeBanner />
        </motion.div>

        {/* Main Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          variants={containerVariants}
        >
          {/* Left Column - Progress */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            variants={itemVariants}
          >
            <div className="rounded-xl bg-white/80 dark:bg-[#252B48]/80 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-[#00C4B4]/10 transition-all duration-300">
              <ProgressSection />
            </div>
          </motion.div>

          {/* Right Column - Courses */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={itemVariants}
          >
            <div className="rounded-xl bg-white/80 dark:bg-[#252B48]/80 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-[#00C4B4]/10 transition-all duration-300">
              <CourseSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            </div>
          </motion.div>
        </motion.div>

        {/* Study Plan and Quiz Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={containerVariants}
        >
          {/* Study Plan */}
          <motion.div
            className="md:col-span-8"
            variants={itemVariants}
          >
            <div className="rounded-xl bg-white/80 dark:bg-[#252B48]/80 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-[#00C4B4]/10 transition-all duration-300">
              <StudyPlanSection />
            </div>
          </motion.div>

          {/* Quick Quiz */}
          <motion.div
            className="md:col-span-4"
            variants={itemVariants}
          >
            <div className="rounded-xl bg-white/80 dark:bg-[#252B48]/80 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-[#00C4B4]/10 transition-all duration-300">
              <QuickQuizSection />
            </div>
          </motion.div>
        </motion.div>

        {/* Badges Button */}
        <motion.div variants={itemVariants}>
          <BadgesButton />
        </motion.div>
      </motion.div>
    </main>
  )
}