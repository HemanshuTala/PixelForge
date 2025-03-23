"use client";

import { Play } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import type { JSX } from "react";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    progress: number;
    image: string;
    tag: string;
    status: string;
  };
}

export function CourseCard({ course }: CourseCardProps) {
  // Define tag colors with gradients
  const tagColors: Record<string, string> = {
    Programming: "bg-gradient-to-r from-[#00C4B4]/20 to-[#00A896]/20 text-[#00C4B4] border-[#00C4B4]/30",
    Design: "bg-gradient-to-r from-[#FF7043]/20 to-[#FF4500]/20 text-[#FF7043] border-[#FF7043]/30",
    Math: "bg-gradient-to-r from-[#6366F1]/20 to-[#4F46E5]/20 text-[#6366F1] border-[#6366F1]/30",
    "Data Science": "bg-gradient-to-r from-[#8B5CF6]/20 to-[#7C3AED]/20 text-[#8B5CF6] border-[#8B5CF6]/30",
  };

  // Define status badges with animations
  const statusBadges: Record<string, JSX.Element | null> = {
    Recommended: (
      <Badge className="absolute top-3 right-3 bg-gradient-to-r from-[#FF7043] to-[#FF4500] text-white shadow-md hover:bg-[#FF7043]/90 transition-all duration-200">
        Recommended
      </Badge>
    ),
    Completed: (
      <Badge className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md hover:bg-green-500/90 transition-all duration-200">
        Completed
      </Badge>
    ),
    "In Progress": null,
  };

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Card
        className="
          overflow-hidden border border-[#00C4B4]/20 dark:border-[#00C4B4]/10 
          bg-white/95 dark:bg-[#1A1F3A]/95 backdrop-blur-lg shadow-md 
          rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#00C4B4]/20"
      >
        {/* Image Section */}
        <div className="relative">
          <motion.img
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-44 object-cover transition-transform duration-500"
            whileHover={{ scale: 1.08 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {statusBadges[course.status]}
          </motion.div>
          <Badge
            variant="outline"
            className={`absolute bottom-3 left-3 ${tagColors[course.tag]} font-medium text-xs px-2 py-1 rounded-full shadow-sm`}
          >
            {course.tag}
          </Badge>
        </div>

        {/* Content Section */}
        <CardContent className="p-5 space-y-4">
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="font-semibold text-xl text-gray-800 dark:text-gray-100 tracking-tight"
          >
            {course.title}
          </motion.h3>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2"
          >
            {course.description}
          </motion.p>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500 dark:text-gray-400">Progress</span>
              <span className="font-semibold text-[#00C4B4]">{course.progress}%</span>
            </div>
            <Progress
              value={course.progress}
              className="h-2 rounded-full bg-gray-200 dark:bg-gray-700"
             
            />
          </motion.div>
        </CardContent>

        {/* Footer Section */}
        <CardFooter className="p-5 pt-0 flex justify-between items-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-xs text-gray-500 dark:text-gray-400"
          >
            {course.progress === 0
              ? "Not Started"
              : course.progress === 100
              ? "Completed"
              : `${course.progress}% Completed`}
          </motion.span>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="sm"
              className="relative bg-gradient-to-r from-[#00C4B4] to-[#00A896] text-white rounded-full px-4 py-2 
                shadow-md hover:from-[#00A896] hover:to-[#00C4B4] transition-all duration-200 hover:shadow-lg"
            >
              <Play className="h-4 w-4 mr-2" />
              <span className="relative z-10">
                {course.progress === 0 ? "Start" : "Continue"}
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-full" />
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}