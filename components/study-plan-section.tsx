"use client";

import { Calendar, Check, Clock, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function StudyPlanSection() {
  const [isVisible, setIsVisible] = useState(false);

  const studyPlan = [
    {
      id: 1,
      day: "Monday",
      task: "Finish Python Loops",
      duration: "1 hr",
      completed: false,
      aiRecommended: false,
    },
    {
      id: 2,
      day: "Tuesday",
      task: "Take Quiz 3",
      duration: "30 min",
      completed: false,
      aiRecommended: false,
    },
    {
      id: 3,
      day: "Wednesday",
      task: "Complete Web Dev",
      duration: "1.5 hrs",
      completed: false,
      aiRecommended: true,
    },
    {
      id: 4,
      day: "Thursday",
      task: "Practice Data Visualization",
      duration: "1 hr",
      completed: false,
      aiRecommended: true,
    },
    {
      id: 5,
      day: "Friday",
      task: "Review UI/UX Design Principles",
      duration: "45 min",
      completed: false,
      aiRecommended: false,
    },
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", type: "spring", stiffness: 90 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 4px 12px rgba(0, 196, 180, 0.2)" },
    tap: { scale: 0.95 },
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
          border border-[#00C4B4]/15 bg-white/90 dark:bg-[#1E253F]/90 
          rounded-3xl overflow-hidden transition-all duration-300 
          max-w-4xl mx-auto shadow-md hover:shadow-lg"
      >
        <CardHeader
          className="
            bg-gradient-to-r from-[#00C4B4]/10 to-[#FF7043]/10 p-6 
            border-b border-[#00C4B4]/15"
        >
          <CardTitle className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <Calendar className="h-6 w-6 text-[#00C4B4] animate-[pulse_1.5s_infinite]" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#00C4B4] to-[#FF7043]">
              AI Study Plan
            </span>
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300 text-sm mt-1">
            Your personalized weekly roadmap
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <div className="relative">
            {/* Scrollable Container */}
            <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-custom">
              {studyPlan.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  className="
                    min-w-[260px] w-[260px] p-5 bg-gray-50/70 dark:bg-[#252B48]/70 
                    rounded-xl border border-[#00C4B4]/15 
                    transition-all duration-300 hover:bg-gray-100/80 dark:hover:bg-[#252B48]/80 
                    snap-start relative overflow-hidden"
                  whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(0, 196, 180, 0.1)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Subtle Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#00C4B4]/5 to-[#FF7043]/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 dark:text-white tracking-tight">
                        {item.day}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <Clock className="h-4 w-4 text-[#00C4B4]" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    {item.aiRecommended && (
                      <Badge
                        className="
                          bg-[#00C4B4]/20 text-[#00C4B4] dark:bg-[#FF7043]/20 dark:text-[#FF7043] 
                          font-medium text-xs py-0.5 px-2 rounded-full transition-all duration-200 
                          hover:bg-[#00C4B4]/30 dark:hover:bg-[#FF7043]/30"
                      >
                        AI
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-200 mb-5 line-clamp-2 font-medium">
                    {item.task}
                  </p>

                  <div className="flex gap-3">
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button
                        variant="outline"
                        size="sm"
                        className="
                          flex-1 h-9 text-xs font-semibold text-[#00C4B4] 
                          border-[#00C4B4]/30 hover:bg-[#00C4B4]/10 hover:text-[#00A896] 
                          transition-all duration-200 rounded-lg"
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Done
                      </Button>
                    </motion.div>
                    {item.aiRecommended && (
                      <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="
                            flex-1 h-9 text-xs font-semibold text-[#00C4B4] 
                            hover:bg-[#00C4B4]/10 hover:text-[#00A896] 
                            transition-all duration-200 rounded-lg"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gradient Overlays for Scroll Indication */}
            <div className="absolute top-0 left-0 w-14 h-full bg-gradient-to-r from-white/60 to-transparent dark:from-[#1E253F]/60 pointer-events-none" />
            <div className="absolute top-0 right-0 w-14 h-full bg-gradient-to-l from-white/60 to-transparent dark:from-[#1E253F]/60 pointer-events-none" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default StudyPlanSection;

// Custom Scrollbar CSS (add to your global CSS or a style tag)
/* Enhanced Scrollbar Styles */

{/*  */}