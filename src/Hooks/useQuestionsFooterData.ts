import { useQuestionsStore } from "../store/questions"

// Hook que calcula estadísticas del quiz:
// - Cantidad de respuestas correctas
// - Cantidad de incorrectas
// - Cantidad de preguntas sin responder
// Recorre todas las preguntas del store y devuelve un resumen.
// Se usa en el Footer para mostrar progreso del usuario.


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