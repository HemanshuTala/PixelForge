"use client";

import { useState } from "react";
import { Award, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function BadgesButton() {
  const [isOpen, setIsOpen] = useState(false);

  const badges = [
    { id: 1, name: "Quiz Master", description: "Completed 10 quizzes", icon: "🏆", earned: true },
    { id: 2, name: "Early Bird", description: "Logged in before 8 AM", icon: "🌅", earned: true },
    { id: 3, name: "Streak Warrior", description: "Maintained a 5-day streak", icon: "🔥", earned: true },
    { id: 4, name: "Python Pro", description: "Completed Python Basics course", icon: "🐍", earned: false },
    { id: 5, name: "Data Scientist", description: "Completed 3 data science courses", icon: "📊", earned: false },
    { id: 6, name: "Night Owl", description: "Studied for 2 hours after 10 PM", icon: "🦉", earned: false },
  ];

  return (
    <>
      {/* Floating Badge Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-gradient-to-br from-[#FF7043] to-[#FF4500] 
          hover:from-[#FF4500] hover:to-[#FF7043] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
        size="icon"
      >
        <Award className="h-7 w-7 text-white" />
      </Button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <Card
            className="relative w-full max-w-md border border-[#FF7043]/20 bg-white/95 dark:bg-[#1A1F3A]/95 shadow-2xl 
              rounded-2xl overflow-hidden transition-all duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {/* Header */}
            <CardHeader className="relative bg-gradient-to-r from-[#FF7043]/10 to-[#FF4500]/5 p-5">
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 hover:bg-[#FF7043]/20 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Button>
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                <Award className="h-6 w-6 text-[#FF7043] animate-pulse" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7043] to-[#FF4500]">
                  Your Badges
                </span>
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Achievements earned on your learning journey
              </CardDescription>
            </CardHeader>

            {/* Content */}
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`
                      relative flex flex-col items-center p-4 rounded-xl border shadow-sm transition-all duration-300
                      ${
                        badge.earned
                          ? "bg-gradient-to-br from-[#FF7043]/10 to-[#FF4500]/5 border-[#FF7043]/30 hover:shadow-md hover:-translate-y-1"
                          : "bg-gray-100/80 dark:bg-gray-800/40 border-gray-200/30 dark:border-gray-700/30 opacity-70 hover:opacity-90"
                      }
                    `}
                  >
                    <div className="text-4xl mb-3 animate-bounce-once">{badge.icon}</div>
                    <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-100 text-center leading-tight">
                      {badge.name}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-1 line-clamp-2">
                      {badge.description}
                    </p>
                    {!badge.earned && (
                      <span className="mt-2 px-2 py-0.5 text-xs font-medium text-[#FF7043] bg-[#FF7043]/10 rounded-full">
                        Locked
                      </span>
                    )}
                    {badge.earned && (
                      <span className="absolute top-2 right-2 h-3 w-3 bg-[#FF7043] rounded-full animate-ping" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}

// Optional CSS for custom animation
const styles = `
  @keyframes bounce-once {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  .animate-bounce-once {
    animation: bounce-once 0.5s ease-in-out;
  }
`;

// If using a CSS-in-JS solution or global styles, add the above keyframes