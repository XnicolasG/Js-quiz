import { create } from 'zustand'
import { type Question } from '../types'
import confetti from 'canvas-confetti'
import { persist } from 'zustand/middleware';

// Store global que maneja todo el estado del quiz:
// - Lista de preguntas cargadas
// - Índice de la pregunta actual
// - Función para cargar preguntas desde data.json
// - Función para seleccionar una respuesta y marcarla como correcta/incorrecta
// - Funciones para navegar entre preguntas
// - Función para reiniciar el quiz
// Usa persistencia para guardar el progreso en localStorage.
// También dispara confetti cuando la respuesta es correcta.


interface State {
    questions: Question[]
    currentQuestion: number;
    fetchQuestions: (limit: number) => void,
    selectAnswer: (questionId: number, answerIndex: number) => void
    goNextQuestion: () => void
    goPreviousQuestion: () => void
    reset: () => void
}

export const useQuestionsStore = create<State>()(persist((set, get) => {
    return {
        questions: [],
        currentQuestion: 0,

        fetchQuestions: async (limit: number) => {
            const response = await fetch('http://localhost:5173/data.json')
            if (!response.ok) throw new Error('Something went wrong !')
            const result = await response.json()
            console.log(result);
            const questions = result.sort(() => Math.random() - 0.5).slice(0, limit)
            set({ questions })
        },
        selectAnswer: (questionId: number, answerIndex: number) => {
            const { questions } = get()
            //clonar objeto de questions
            const newQuestions = structuredClone(questions)
            // encontramos id de la pregunta actual en el nuevo objeto
            const questionIndex = newQuestions.findIndex(q => q.id === questionId)
            // guardamos objeto completo de esa pregunta
            const questionInfo = newQuestions[questionIndex]
            // validamos si la respuesta es correcta o no
            const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex

            if (isCorrectUserAnswer) confetti()

            //actualizar información del objeto
            newQuestions[questionIndex] = {
                ...questionInfo,
                isCorrectUserAnswer,
                userSelectedAnswer: answerIndex
            }
            set({ questions: newQuestions })
        },

        goNextQuestion: () => {
            const { currentQuestion, questions } = get()
            const nextQuestion = currentQuestion + 1

            if (nextQuestion < questions.length) {
                set({ currentQuestion: nextQuestion })
            }
        },
        goPreviousQuestion: () => {
            const { currentQuestion } = get()
            const previousQuestion = currentQuestion - 1

            if (previousQuestion >= 0) {
                set({ currentQuestion: previousQuestion })
            }
        },
        reset: () => {
            set({ currentQuestion: 0, questions: [] })
        }

    }
}, {
    name: 'Questions'
}))