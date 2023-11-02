import { useContext } from "react"
import { QuestionsContext } from "../../Assets/context"


const ScoreBoard = () => {
    const { score, setScore, currentQuestion, setCurrentQuestion } = useContext(QuestionsContext)

    const Refresh = () => {
        setCurrentQuestion(0)
        setScore(0)
    }
    return (
        <div style={{
            height: '90vh',
            fontWeight: 'bolder',
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 30,
            justifyContent: 'center'
        }}>
            <h2>Congratulation</h2>
            You Score {score} of 100%
            <button onClick={Refresh} style={{
                background: 'transparent',
                border: '1px solid white',
                marginTop: 20,
                padding: 20,
                fontSize: 25,
                width: '30vh',
                borderRadius: 20
            }}>Retake Test</button>
        </div>
    )
}

export { ScoreBoard }