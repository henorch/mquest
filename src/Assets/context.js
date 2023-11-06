import { createContext, useState } from "react";
import { questions } from "./Q/A";


export const QuestionsContext = createContext({
    questions: [],
    currentQuestion: 0,
    isOpen: true,
    score: 0
})

export const QuestionsProvider = ({ children }) => {
    const [quest, setQuestions] = useState(questions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    const [score, setScore] = useState(0)
    const value = {
        questions,
        isOpen,
        setIsOpen,
        score,
        setScore,
        currentQuestion,
        setCurrentQuestion
    }
    return (<QuestionsContext.Provider value={value}>
        {children}
    </QuestionsContext.Provider>)

}