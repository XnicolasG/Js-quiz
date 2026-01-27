import { useState } from 'react'
import './App.css'
import { Container, Typography, Stack } from '@mui/material'
import { JavaScriptLogo } from './components/JavaScriptLogo'
import { Start } from './components/Start'

function App() {
  const [count, setCount] = useState(0) //20.49

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
