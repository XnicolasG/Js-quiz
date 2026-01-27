import { useState } from 'react'
import './App.css'
import { Container, Typography, Stack } from '@mui/material'
import { JavaScriptLogo } from './components/JavaScriptLogo'
import { Start } from './components/Start'
import { useQuestionsStore } from './store/questions'

function App() {
  const questions = useQuestionsStore(state => state.questions)
  console.log(questions);
  

  return (
    <main>
      <Container maxWidth='sm'>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center' >
          <JavaScriptLogo />
          <Typography variant='h5' component='h1' >
            <h1>JavaScript Quiz</h1>
          </Typography>
        </Stack>
        <Start />
      </Container>

    </main>
  )
}

export default App
