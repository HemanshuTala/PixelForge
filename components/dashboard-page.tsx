"use client"

import { useState } from "react"
import { ThemeProvider } from "next-themes"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardContent } from "@/components/dashboard-content"
import { SidebarProvider } from "@/components/ui/sidebar"
import { motion } from "framer-motion"

export function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState<string>("In Progress")

  // Animation variants for page entrance
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SidebarProvider>
        <motion.div
          className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#1A1F3A] dark:to-[#141830] relative overflow-hidden"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Starfield Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="stars-container">
              {Array.from({ length: 150 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="star absolute bg-white/70 dark:bg-[#00C4B4]/30 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main Layout */}
          <div className="flex min-h-screen relative z-10">
            <motion.div variants={childVariants}>
              <DashboardSidebar />
            </motion.div>
            <div className="flex-1 flex flex-col">
              <motion.div variants={childVariants}>
                <DashboardHeader />
              </motion.div>
              <motion.div variants={childVariants}>
                <DashboardContent activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
              </motion.div>
            </div>
          </div>

          {/* Subtle Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/5 dark:to-[#00C4B4]/5 pointer-events-none" />
        </motion.div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

// Add this CSS to your global styles (e.g., globals.css)
<style jsx global>{`
  .stars-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .star {
    position: absolute;
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
  }
`}</style>