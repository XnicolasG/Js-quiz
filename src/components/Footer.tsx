import { useQuestionsFooterData } from "../Hooks/useQuestionsFooterData"
import { useQuestionsStore } from "../store/questions"

export const Footer = () => {
    const reset = useQuestionsStore(state => state.reset)
    const { correct, incorrect, unaswered } = useQuestionsFooterData()

    return (
        <footer style={{ marginTop: '16px' }}>
            <strong> {`✅ ${correct} Correctas - ❌ ${incorrect} Incorrectas - ❔ ${unaswered} Sin Responder `} </strong>
            <section style={{ marginTop: '16px'}}>
                <button onClick={() => reset()}>
                    volver a iniciar
                </button>
            </section>
        </footer>
    )
}