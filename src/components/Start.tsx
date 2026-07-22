import { Button } from '@mui/material'
import { useQuestionsStore } from '../store/questions'

type Topic = "html" | "css" | "javascript" | "react" | "typescript"

export const Start = ({topic}: {topic: Topic}) => {
    const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)

    const handleClick = () => {
        fetchQuestions(topic, 10)
    }
    return (
        <>
        <Button onClick={handleClick} variant='contained' >
            Empezar!
        </Button>
        </>
    )
}