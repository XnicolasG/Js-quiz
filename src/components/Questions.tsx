import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useQuestionsStore } from '../store/questions'
import type { Question as QuestionType } from '../types'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Componente encargado de mostrar una pregunta individual del quiz.
// Renderiza: enunciado, código opcional y lista de respuestas.
// Usa el store (Zustand) para registrar la respuesta seleccionada.
// Bloquea las opciones una vez que el usuario responde.
// Colorea cada opción según si fue correcta o incorrecta.
// También usa SyntaxHighlighter para mostrar código con estilo.


export const Question = ({ info }: { info: QuestionType }) => {
    const selectAnswer = useQuestionsStore(state => state.selectAnswer)

    console.log(info);

    const handleClick = (asnwerIndex: number) => () => {
        selectAnswer(info.id, asnwerIndex)
    }

    const getBackgroundColor = (index: number) => {
        const { userSelectedAnswer, correctAnswer } = info

        if (userSelectedAnswer == null) return 'transparent'
        if (index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'
        if (index === correctAnswer) return 'green'
        if (index !== correctAnswer) return 'red'

        return 'transparent'
    }


    return (
        <Card variant='outlined' sx={{ p: 2, textAlign: 'left', marginTop: 2 }}>
            <Typography variant='h5'>
                {info.question}
            </Typography>
            {info.code && (
                <SyntaxHighlighter language='javascript' style={dracula} >
                    {info.code}
                </SyntaxHighlighter>
            )}
            <List sx={{ bgcolor: '#333' }} disablePadding>
                {info?.options.map((answer, index) => (

                    <ListItem key={index} disablePadding divider>
                        <ListItemButton
                            disabled={info.userSelectedAnswer != null}
                            sx={{ backgroundColor: getBackgroundColor(index) }}
                            onClick={handleClick(index)} >
                            <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Card>
    )

}