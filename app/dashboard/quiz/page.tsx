// app/dashboard/quiz/page.tsx
"use client";

import { BrainCircuit, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleAnswerSelect = (index: number) => {
    if (!isSubmitted) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setIsSubmitted(true);
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 10);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <main
      className="relative flex-1 overflow-auto p-4 md:p-8 bg-gradient-to-br from-gray-100 to-gray-50 dark:bg-black transition-colors duration-500"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="mx-auto max-w-2xl">
        <Card className="border border-gray-200/50 dark:border-teal-500/30 bg-white/95 dark:bg-gray-900/90 backdrop-blur-lg shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-gray-800 dark:text-white">
              <BrainCircuit className="h-6 w-6 text-[#FF7043]" />
              Python Loops Challenge
            </CardTitle>
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Question {currentQuestion + 1} of {quizData.length}</span>
              <span>Score: {score}</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
              {quizData[currentQuestion].question}
            </h3>
            <div className="grid gap-3">
              {quizData[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className={`
                    w-full justify-start py-6 text-left 
                    ${
                      selectedAnswer === index && isSubmitted && index === quizData[currentQuestion].correctAnswer
                        ? "bg-green-500/20 border-green-500 text-green-800 dark:text-green-200"
                        : selectedAnswer === index && isSubmitted
                        ? "bg-red-500/20 border-red-500 text-red-800 dark:text-red-200"
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
                className="bg-gradient-to-r from-[#FF7043] to-[#FF4500] text-white rounded-full px-6 hover:from-[#FF4500] hover:to-[#FF7043]"
              >
                Submit
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isSubmitted}
                className="bg-gray-200 dark:bg-teal-500/20 text-gray-800 dark:text-teal-200 rounded-full px-6 hover:bg-gray-300 dark:hover:bg-teal-500/30"
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
    </main>
  );
}

export default QuizPage;