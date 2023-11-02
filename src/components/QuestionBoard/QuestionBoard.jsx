import { useContext } from "react"
import { Container } from "./Questions.styles"
import { QuestionsContext } from "../../Assets/context"




const QuestionsBoard = () => {

    const { questions, currentQuestion } = useContext(QuestionsContext)
    return (
        <Container>
            {questions[currentQuestion].text}
        </Container>
    )
}

export default QuestionsBoard