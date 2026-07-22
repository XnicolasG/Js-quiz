import './App.css'
import { Container, Typography, Stack } from '@mui/material'
import { Start } from './components/Start'
import { useQuestionsStore } from './store/questions'
import { Game } from './components/Game'
import { JavaScriptLogo } from './components/JavaScriptLogo'
import { TypeScriptLogo } from './components/TypeScriptLogo'
import { HTMLLogo } from './components/HtmlLogo'
import { CSSLogo } from './components/CssLogo'
import { ReactLogo } from './components/ReactLogo'

function App() {
  const questions = useQuestionsStore(state => state.questions)
  console.log(questions);

 
  return (
    <main>
      <Container maxWidth='sm'>
        <Stack direction='column' gap={4} alignItems='' justifyContent='center' >
          <Typography variant='h3' >
            Frontend Quiz
          </Typography>
          <Typography variant='h5'>
            Practica tus conocimientos en las principales tecnologias del desarrollo frontend
          </Typography>

        </Stack>
        {questions?.length === 0 &&
          (
            <section>

              <button style={{ margin: "5%",  borderRadius: "25px", background: "transparent" }}>
                <HTMLLogo />
                <Start topic="html" />
              </button>
               <button style={{ margin: "5%" }}>
                <CSSLogo />
                <Start topic='css' />
              </button> 
              <button style={{ margin: "5%" }}>
                <JavaScriptLogo />
                <Start topic='javascript' />
              </button>
              <button style={{ margin: "5%" }}>
                <TypeScriptLogo />
                <Start topic='typescript' />
              </button> 
              <button style={{ margin: "5%" }}>
                <ReactLogo />
                <Start topic='react' />
              </button>

            </section>
          )
        }
        {questions?.length > 0 && <Game />}

      </Container>
    </main>
  )
}

export default App
