"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React and build dynamic UIs.",
    progress: 75,
    duration: "4h 30m",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master ES6+ features and modern JavaScript patterns.",
    progress: 40,
    duration: "6h 15m",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description: "Design user-friendly interfaces with best practices.",
    progress: 90,
    duration: "3h 45m",
    image: "https://via.placeholder.com/150",
  },
];

export function CoursesPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Matrix Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00C4B4";
      ctx.font = `${fontSize}px 'Poppins', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main
      className="relative flex-1 overflow-auto p-6 md:p-10 bg-gradient-to-br from-black to-gray-900 transition-colors duration-500"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Matrix Rain Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
      />

      <motion.div
        className="relative mx-auto max-w-7xl space-y-10 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00C4B4] to-[#FF7043]">
            My Courses
          </h1>
          <p className="text-gray-300 text-lg">
            Track your learning progress and dive back into your studies.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className="
                  rounded-2xl bg-gray-900/80 dark:bg-[#252B48]/90 backdrop-blur-xl shadow-lg 
                  border border-[#00C4B4]/20 p-5 transition-all duration-300 
                  hover:shadow-xl hover:shadow-[#00C4B4]/20 hover:border-[#00C4B4]/40"
              >
                {/* Course Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-36 object-cover rounded-xl mb-5 transition-transform duration-500 hover:scale-105"
                />

                {/* Course Info */}
                <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {course.title}
                </h2>
                <p className="text-gray-400 text-sm mb-5 line-clamp-2">
                  {course.description}
                </p>

                {/* Progress Bar */}
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between items-center text-xs text-gray-300">
                    <span>Progress</span>
                    <span className="font-medium text-[#00C4B4]">{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00C4B4] to-[#FF7043] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Duration and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-2 text-[#00C4B4]" />
                    <span>{course.duration}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00C4B4] to-[#FF7043] 
                      text-white rounded-full font-medium shadow-md 
                      hover:from-[#FF7043] hover:to-[#00C4B4] transition-all duration-300"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}

export default CoursesPage;