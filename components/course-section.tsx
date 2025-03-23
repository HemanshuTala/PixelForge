"use client";

import { Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CourseCard } from "@/components/course-card";
import { motion } from "framer-motion";

interface CourseSectionProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export function CourseSection({ activeFilter, setActiveFilter }: CourseSectionProps) {
  const filters = ["In Progress", "Completed", "Recommended", "All Courses"];

  const tags = [
    { name: "Programming", color: "bg-[#00C4B4]/10 text-[#00C4B4] hover:bg-[#00C4B4]/20 border-[#00C4B4]/20" },
    { name: "Design", color: "bg-[#FF7043]/10 text-[#FF7043] hover:bg-[#FF7043]/20 border-[#FF7043]/20" },
    { name: "Math", color: "bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20 border-[#6366F1]/20" },
    { name: "Data Science", color: "bg-[#8B5CF6]/10 text-[#8B5CF6] hover:bg-[#8B5CF6]/20 border-[#8B5CF6]/20" },
  ];

  const courses = [
    {
      id: 1,
      title: "Python Basics",
      description: "Learn the fundamentals of Python programming",
      progress: 75,
      image: "/placeholder.svg?height=100&width=200",
      tag: "Programming",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Web Development",
      description: "HTML, CSS, and JavaScript fundamentals",
      progress: 45,
      image: "/placeholder.svg?height=100&width=200",
      tag: "Programming",
      status: "In Progress",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      description: "Learn the core principles of user interface design",
      progress: 60,
      image: "/placeholder.svg?height=100&width=200",
      tag: "Design",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Data Science Fundamentals",
      description: "Introduction to data analysis and visualization",
      progress: 20,
      image: "/placeholder.svg?height=100&width=200",
      tag: "Data Science",
      status: "In Progress",
    },
    {
      id: 5,
      title: "JavaScript Basics",
      description: "Learn the fundamentals of JavaScript",
      progress: 100,
      image: "/placeholder.svg?height=100&width=200",
      tag: "Programming",
      status: "Completed",
    },
    {
      id: 6,
      title: "Machine Learning Intro",
      description: "Get started with machine learning concepts",
      progress: 0,
      image: "/placeholder.svg?height=100&width=200",
      tag: "Data Science",
      status: "Recommended",
    },
  ];

  // Filter courses based on active filter
  const filteredCourses = courses.filter((course) =>
    activeFilter === "All Courses" ? true : course.status === activeFilter
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Card
        className="
          border border-[#00C4B4]/20 dark:border-[#00C4B4]/10 
          bg-white/95 dark:bg-[#1A1F3A]/95 backdrop-blur-lg 
          shadow-md rounded-2xl overflow-hidden transition-all duration-300"
      >
        <CardHeader className="p-6">
          <motion.div variants={itemVariants}>
            <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100 tracking-tight">
              Your Courses
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Continue learning or explore new courses
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="p-6 space-y-8">
          {/* Search and Filters */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses..."
                className="
                  pl-10 py-2 bg-gray-50/50 dark:bg-gray-800/50 
                  border border-gray-200/50 dark:border-[#00C4B4]/20 
                  rounded-full text-gray-800 dark:text-gray-100 
                  focus:ring-2 focus:ring-[#00C4B4]/50 transition-all duration-200"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    rounded-full px-4 py-1 font-medium transition-all duration-200
                    ${
                      activeFilter === filter
                        ? "bg-gradient-to-r from-[#00C4B4] to-[#00A896] text-white shadow-md hover:from-[#00A896] hover:to-[#00C4B4]"
                        : "bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-200 border-gray-200/50 dark:border-[#00C4B4]/20 hover:bg-gray-200 dark:hover:bg-[#00C4B4]/10"
                    }
                  `}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag.name}
                variant="outline"
                className={`
                  ${tag.color} font-medium text-xs px-3 py-1 rounded-full 
                  cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md
                `}
              >
                {tag.name}
              </Badge>
            ))}
          </motion.div>

          {/* Course Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredCourses.map((course) => (
              <motion.div key={course.id} variants={itemVariants}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}