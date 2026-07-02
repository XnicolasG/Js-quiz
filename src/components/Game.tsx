import { IconButton, Stack } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useQuestionsStore } from '../store/questions'
import { Question } from './Questions'
import { Footer } from './Footer';


// Componente que muestra la interfaz del juego una vez cargan las preguntas.
// Renderiza:
// - Navegación entre preguntas (anterior / siguiente)
// - La pregunta actual usando <Question />
// - El footer con estadísticas del quiz
// Obtiene todo desde el store (Zustand).


export const Game = () => {
    const questions = useQuestionsStore(state => state.questions)
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)
    const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
    const goPreviousQuestion = useQuestionsStore(state => state.goPreviousQuestion)

    const questionInfo = questions[currentQuestion]

    return (
        <>
            <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
                <IconButton onClick={goPreviousQuestion} disabled={currentQuestion === 0}>
                    <ArrowBackIos />
                </IconButton>
                {currentQuestion + 1} / {questions.length}
                <IconButton onClick={goNextQuestion} disabled={currentQuestion >= questions.length - 1}>
                    <ArrowForwardIos />
                </IconButton>
            </Stack>
            <Question info={questionInfo} />
            <Footer />

        </>
    )
} 