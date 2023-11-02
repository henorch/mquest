import { useContext } from "react"
import { Options } from "../../Assets/Q/A"
import { OptionButton, Container, Option, ButtonHolder } from "./Answers.styled"
import { QuestionsContext } from "../../Assets/context"






const Answers = () => {
    const { questions, score, setScore, currentQuestion, setCurrentQuestion } = useContext(QuestionsContext)

    const Clickme = (isCorrect) => {
        isCorrect === true && setScore(score + currentQuestion / questions.length * 100);
        setCurrentQuestion(currentQuestion + 1)
    }

    return (
        <Container>
            {questions[currentQuestion].options.map((option) =>
                <Option onClick={() => Clickme(option.isCorrect)}
                    key={option.id} > {option.text}</Option>)
            }
            <ButtonHolder>
                <OptionButton >Previous</OptionButton>
                <OptionButton>Next</OptionButton>
            </ButtonHolder>
        </Container >
    )
}

export default Answers