"use client";

import { BarChart3, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export function ProgressSection() {
  const courses = [
    { id: 1, name: "Python Basics", progress: 75, color: "#00C4B4" }, // Teal
    { id: 2, name: "Web Development", progress: 45, color: "#FF7043" }, // Orange
    { id: 3, name: "Data Science Intro", progress: 20, color: "#9B59B6" }, // Soft Purple
    { id: 4, name: "UI/UX Design", progress: 60, color: "#2ECC71" }, // Emerald
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", type: "spring", stiffness: 100 },
    },
  };

  const flameVariants = {
    hidden: { scale: 0, rotate: 0 },
    visible: {
      scale: 1,
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.6, ease: "easeInOut", loop: Infinity, repeatDelay: 1 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Card
        className="
          border border-[#00C4B4]/30 bg-gradient-to-br from-white/90 to-gray-100/90 
          dark:from-[#1E1E2F]/95 dark:to-[#252B48]/95 backdrop-blur-xl shadow-lg 
          rounded-3xl overflow-hidden transition-all duration-300 
          hover:shadow-2xl hover:shadow-[#00C4B4]/30"
      >
        <CardHeader className="p-6">
          <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-800 dark:text-gray-100">
            <motion.div whileHover={{ rotate: 360, transition: { duration: 0.5 } }}>
              <BarChart3 className="h-8 w-8 text-[#00C4B4]" />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C4B4] to-[#FF7043]">
              Your Progress
            </span>
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300 text-base mt-2">
            Track your learning journey with style
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 space-y-10">
          {/* Learning Streak */}
          <motion.div
            variants={itemVariants}
            className="
              flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r 
              from-[#FF7043]/10 to-[#FF4500]/10 border border-[#FF7043]/20 shadow-md 
              transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7043]/20"
          >
            <div className="flex items-center gap-5">
              <div className="relative">
                <motion.div
                  variants={flameVariants}
                  className="
                    h-16 w-16 rounded-full bg-[#FF7043]/20 flex items-center justify-center 
                    shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Flame className="h-8 w-8 text-[#FF7043]" />
                </motion.div>
                <div
                  className="
                    absolute -top-3 -right-3 h-7 w-7 rounded-full bg-[#FF7043] 
                    flex items-center justify-center text-sm text-white font-bold shadow-md 
                    animate-bounce"
                >
                  5
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-100 tracking-tight">
                  Learning Streak
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">5 days in a row!</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-[#FF7043]">5</div>
          </motion.div>

          {/* Course Progress */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-100 tracking-tight">
              Course Progress
            </h3>
            <div className="space-y-6">
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  className="space-y-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {course.name}
                    </span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="relative h-3 w-full bg-gray-200/30 dark:bg-[#2A2A3B]/30 rounded-full overflow-hidden shadow-sm">
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      style={{ backgroundColor: course.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Overall Progress */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-100 tracking-tight">
              Overall Completion
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  All Courses
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  50%
                </span>
              </div>
              <Progress
                value={50}
                className="h-3 rounded-full bg-gray-200/30 dark:bg-[#2A2A3B]/30"
                
              />
            </div>
          </motion.div>

          {/* Circular Progress Indicators */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {courses.slice(0, 2).map((course) => (
              <motion.div
                key={course.id}
                className="
                  flex flex-col items-center justify-center p-5 rounded-2xl 
                  bg-gradient-to-br from-[#00C4B4]/10 to-[#FF7043]/10 border border-[#00C4B4]/20 
                  shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#00C4B4]/30"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="relative h-24 w-24 mb-4">
                  <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      className="text-gray-200/30 dark:text-[#2A2A3B]/30"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={course.color}
                      strokeWidth="12"
                      strokeDasharray="251"
                      strokeDashoffset={251 - (course.progress * 2.51)}
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: 251 }}
                      animate={{ strokeDashoffset: 251 - (course.progress * 2.51) }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {course.progress}%
                    </span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
                  {course.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProgressSection;