import { create } from 'zustand'
import { type Question } from '../types'

interface State {
    questions: Question[]
    currentQuestion: number;
    fetchQuestions: (limit: number) => void
}

export const useQuestionsStore = create<State>((set) => {
    return {
        questions: [],
        currentQuestion: 0,

        fetchQuestions: async (limit: number) => {
            set({
                questions: [
                    {
                        "id": 1,
                        "question": "¿Cuál es el resultado de typeof null?",
                        "options": [
                            "\"null\"",
                            "\"object\"",
                            "\"undefined\"",
                            "\"primitive\""
                        ],
                        "correctAnswer": 1
                    }
                ]
            })

        }
    }
})