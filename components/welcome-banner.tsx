"use client";

import { useState, useEffect } from "react";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export function WelcomeBanner() {
  const quotes = [
    "Keep learning, you're doing great!",
    "Knowledge is power, keep going!",
    "Every day is a new opportunity to learn!",
    "Small steps lead to big achievements!",
    "Your learning journey is your superpower!",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const [isVisible, setIsVisible] = useState(false);
  const [streakCount, setStreakCount] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const streakInterval = setInterval(() => {
      setStreakCount((prev) => {
        if (prev < 5) return prev + 1;
        clearInterval(streakInterval);
        return 5;
      });
    }, 200);

    const progressInterval = setInterval(() => {
      setProgressWidth((prev) => {
        if (prev < 75) return prev + 3;
        clearInterval(progressInterval);
        return 75;
      });
    }, 30);

    return () => {
      clearInterval(streakInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 
        border border-[#00C4B4]/20 p-6 shadow-xl transition-all duration-500 
        hover:shadow-2xl hover:shadow-[#00C4B4]/20"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00C4B4]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#FF7043]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#00C4B4]/20 rounded-full blur-md animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-[#FF7043]/20 rounded-full blur-md animate-float delay-2000" />

      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Section */}
        <div className="space-y-5">
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              <TypeAnimation
                sequence={[
                  "Welcome Back, Alex!", // First message
                  2000, // Pause for 2s
                  "Great to see you, Alex!", // Second message
                  2000, // Pause for 2s
                  "Hey Alex, keep shining!", // Third message
                  2000, // Pause for 2s
                ]}
                wrapper="span"
                cursor={true} // Show blinking cursor
                repeat={Infinity} // Loop infinitely
                speed={50} // Typing speed (lower is faster)
                style={{
                  color: "#FFFFFF", // White base color
                  background: "linear-gradient(to right, #00C4B4, #FF7043)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              />
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-base md:text-lg"
          >
            {randomQuote}
          </motion.p>

          <motion.div
            variants={itemVariants}
            transition={{ delay: 0.4 }}
            className="
              flex items-center gap-6 bg-gray-800/60 backdrop-blur-lg rounded-xl px-5 py-3 
              border border-[#00C4B4]/20 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center group">
              <div
                className="
                  h-10 w-10 rounded-full bg-gradient-to-br from-[#FF7043]/20 to-[#FF4500]/20 
                  flex items-center justify-center mr-3 transition-all duration-300 
                  group-hover:scale-110 group-hover:shadow-[#FF7043]/30"
              >
                <span className="text-[#FF7043] text-lg font-semibold">{streakCount}</span>
              </div>
              <span className="text-gray-100 text-sm font-medium">Day Streak</span>
            </div>

            <div className="h-6 w-px bg-gray-700/40" />

            <div className="flex items-center group">
              <Rocket
                className="
                  h-6 w-6 text-[#00C4B4] mr-2 transition-all duration-300 
                  group-hover:scale-110 group-hover:rotate-12"
              />
              <span className="text-gray-100 text-sm font-medium">Level 3 Learner</span>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Progress */}
        <motion.div
          variants={itemVariants}
          transition={{ delay: 0.6 }}
          className="w-full md:w-auto"
        >
          <div
            className="
              flex items-center gap-4 bg-gray-800/60 backdrop-blur-lg rounded-xl px-5 py-3 
              border border-[#00C4B4]/20 shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div className="h-3 w-32 bg-gray-700/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00C4B4] to-[#FF7043] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressWidth}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <span className="text-gray-100 text-sm font-medium">
              {progressWidth}% to Level 4
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default WelcomeBanner;

// Optional CSS for custom animations
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  .delay-1000 { animation-delay: 1s; }
  .delay-2000 { animation-delay: 2s; }
`;