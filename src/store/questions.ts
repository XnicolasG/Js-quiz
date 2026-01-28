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
            const response = await fetch('http://localhost:5173/data.json')
            if(!response.ok) throw new Error('Something went wrong !')
            const result = await response.json()
            console.log(result);
            const questions = result.sort(() => Math.random() - 0.5).slice(0, limit)
            set({ questions})
        }
    }
})