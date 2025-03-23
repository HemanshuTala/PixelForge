"use client";

import { BrainCircuit, CheckCircle, XCircle, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function QuickQuizSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sample quiz data
  const quizData = [
    {
      question: "What keyword is used to create a loop in Python?",
      options: ["for", "while", "loop", "repeat"],
      correctAnswer: 0,
    },
    {
      question: "How do you exit a loop in Python?",
      options: ["exit", "break", "stop", "end"],
      correctAnswer: 1,
    },
    {
      question: "Which loop is best for iterating over a list?",
      options: ["while", "do-while", "for", "foreach"],
      correctAnswer: 2,
    },
    {
      question: "What does 'range(3)' generate?",
      options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "1, 2"],
      correctAnswer: 0,
    },
    {
      question: "How do you skip an iteration in a loop?",
      options: ["skip", "next", "continue", "pass"],
      correctAnswer: 2,
    },
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Slight delay for smoother entrance
  }, []);

  const handleStartQuiz = () => {
    setIsQuizOpen(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsSubmitted(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (!isSubmitted) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setIsSubmitted(true);
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 10); // 10 points per correct answer
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      setIsQuizOpen(false); // Close quiz on finish
    }
  };

  const handleCloseQuiz = () => {
    setIsQuizOpen(false);
  };

  return (
    <>
      <Card
        className={`
          border-none 
          bg-gradient-to-br from-gray-50 to-white 
          dark:from-[#1A1F3A] dark:to-[#252B48]
          shadow-xl 
          rounded-2xl 
          overflow-hidden 
          transform-gpu 
          transition-all 
          duration-700 
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}
          hover:shadow-2xl
          hover:-translate-y-1
        `}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <CardHeader className="relative pb-2">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#FF7043]/20 rounded-full blur-3xl animate-pulse" />
          <CardTitle className="flex items-center gap-3">
            <div className="relative">
              <BrainCircuit className="h-6 w-6 text-[#FF7043] animate-[pulse_2s_ease-in-out_infinite]" />
              <div className="absolute inset-0 bg-[#FF7043]/20 blur-md rounded-full animate-pulse" />
            </div>
            <span className="text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FF7043] to-[#FF4500]">
              Quick Quiz
            </span>
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300 text-sm mt-1 transition-all duration-300">
            Challenge your Python mastery!
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6 pb-8 flex flex-col items-center justify-center space-y-6">
          <div
            className={`
              h-20 w-20 
              rounded-xl 
              bg-gradient-to-br from-[#FF7043]/30 to-[#FF4500]/30
              flex items-center justify-center 
              transition-all duration-500 
              ${isHovering ? "scale-110 rotate-6 shadow-lg" : "scale-100 rotate-0"}
            `}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <BrainCircuit
              className={`
                h-10 w-10 
                text-[#FF7043] 
                transition-all duration-500 
                ${isHovering ? "animate-[spin_4s_linear_infinite]" : ""}
              `}
            />
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-gray-800 dark:text-white transition-all duration-300">
              Python Loops Challenge
            </h3>
            <div className="flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 bg-[#FF7043] rounded-full animate-pulse" />
                5 Questions
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 bg-[#FF7043] rounded-full animate-pulse" />
                5 Minutes
              </span>
            </div>

            <Button
              onClick={handleStartQuiz}
              className={`
                relative 
                bg-gradient-to-r from-[#FF7043] to-[#FF4500]
                text-white 
                px-6 py-2 
                rounded-full 
                font-medium 
                overflow-hidden 
                transition-all duration-300 
                hover:from-[#FF4500] 
                hover:to-[#FF7043]
                hover:scale-105 
                hover:shadow-[0_8px_20px_rgba(255,112,67,0.3)]
              `}
            >
              <span className="relative z-10">Start Now</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </Button>

            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2 transition-all duration-300">
              <span className="inline-flex items-center gap-1 bg-[#FF7043]/10 px-2 py-1 rounded-full">
                <span className="text-[#FF7043] font-medium">+50 XP</span>
              </span>
              for completion
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quiz Popup Modal */}
      {isQuizOpen && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card
            className="relative w-full max-w-lg border border-gray-200/50 dark:border-teal-500/30 bg-white/95 dark:bg-gray-900/90 shadow-lg rounded-2xl overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Button
              onClick={handleCloseQuiz}
              variant="ghost"
              size="icon"
              className="absolute right-3 top-3 hover:bg-[#FF7043]/20 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </Button>

            <CardHeader className="bg-gradient-to-r from-[#FF7043]/10 to-transparent p-4">
              <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-800 dark:text-gray-100">
                <BrainCircuit className="h-5 w-5 text-[#FF7043]" />
                Python Loops Challenge
              </CardTitle>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Question {currentQuestion + 1} of {quizData.length}</span>
                <span>Score: {score}</span>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                {quizData[currentQuestion].question}
              </h3>

              <div className="grid gap-3">
                {quizData[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "default" : "outline"}
                    className={`
                      w-full justify-start py-4 text-left transition-all duration-200
                      ${
                        selectedAnswer === index && isSubmitted && index === quizData[currentQuestion].correctAnswer
                          ? "bg-green-500/20 border-green-500 text-green-800 dark:text-green-200 hover:bg-green-500/30"
                          : selectedAnswer === index && isSubmitted
                          ? "bg-red-500/20 border-red-500 text-red-800 dark:text-red-200 hover:bg-red-500/30"
                          : "border-gray-200 dark:border-teal-500/30 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-teal-500/10"
                      }
                    `}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={isSubmitted}
                  >
                    {option}
                    {isSubmitted && index === quizData[currentQuestion].correctAnswer && (
                      <CheckCircle className="ml-2 h-4 w-4 text-green-600" />
                    )}
                    {isSubmitted && selectedAnswer === index && index !== quizData[currentQuestion].correctAnswer && (
                      <XCircle className="ml-2 h-4 w-4 text-red-600" />
                    )}
                  </Button>
                ))}
              </div>

              <div className="flex justify-between">
                <Button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null || isSubmitted}
                  className="bg-gradient-to-r from-[#FF7043] to-[#FF4500] text-white rounded-full px-6 hover:from-[#FF4500] hover:to-[#FF7043] transition-all duration-200"
                >
                  Submit
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!isSubmitted}
                  className="bg-gray-200 dark:bg-teal-500/20 text-gray-800 dark:text-teal-200 rounded-full px-6 hover:bg-gray-300 dark:hover:bg-teal-500/30 transition-all duration-200"
                >
                  {currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>

              {isSubmitted && (
                <p
                  className={`text-sm ${
                    selectedAnswer === quizData[currentQuestion].correctAnswer ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {selectedAnswer === quizData[currentQuestion].correctAnswer
                    ? "Correct! +10 XP"
                    : `Wrong! The correct answer is: ${quizData[currentQuestion].options[quizData[currentQuestion].correctAnswer]}`}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}