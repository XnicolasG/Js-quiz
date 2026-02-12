import { useQuestionsStore } from "../store/questions"

export const useQuestionsFooterData = () => {
    const questions = useQuestionsStore(state => state.questions)
    let correct = 0
    let incorrect = 0
    let unaswered = 0

    questions.forEach(question => {
        const { userSelectedAnswer, correctAnswer } = question
        if (userSelectedAnswer == null) unaswered++
        else if (userSelectedAnswer === correctAnswer) correct++
        else incorrect++
    })
    return {
        correct, incorrect, unaswered
    }
}