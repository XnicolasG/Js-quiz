export interface Question{
    id: number;
    question: string;
    code?: string;
    options: string[];
    correctAnswer: number;
    userSelectedAnswer?: number;
    isCorrectUserAnswer?: boolean
}

export type QuizQuestion = {
  id: number
  topic: "html" | "css" | "javascript" | "react" | "typescript"
  difficulty: "beginner" | "intermediate" | "advanced" | "ssr"
  type: "concept" | "code" | "trick" | "best-practice"
  question: string
  code?: string
  options: string[]
  correctIndex: number
}
