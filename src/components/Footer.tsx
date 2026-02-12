import { useQuestionsFooterData } from "../Hooks/useQuestionsFooterData"

export const Footer = () => {
    const {correct, incorrect, unaswered} = useQuestionsFooterData()
    
    return (
        <footer style={{ marginTop: '16px' }}>
            <strong> {`✅ ${correct} Correctas - ❌ ${incorrect} Incorrectas - ❔ ${unaswered} Sin Responder `} </strong>
        </footer>
    )
}