import { MyApp } from './App.styles';
import Answers from './components/AnswerBoard/AnswerBoard';
import { Fragment, useContext, useState } from 'react';
import { QuestionsContext } from './Assets/context';
import { AppContainer, AppMain, TagBar } from './App.styled';
import { questions } from './Assets/Q/A';
import { FaBars } from 'react-icons/fa'
import QuestionsBoard from './components/QuestionBoard/QuestionBoard';
import { ScoreBoard } from './components/ScoreBoard/Scoreboard';
import { NavigationComponent } from './components/Navigation/Navigation';

function App() {

  // const { questionsMap } = useContext(QuestionsContext)

  const { currentQuestion, isOpen, setIsOpen } = useContext(QuestionsContext)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AppContainer>
      <TagBar>
        <FaBars
          onClick={toggle}
          style={{
            color: 'white',
            fontSize: "40px",
            padding: "10px"
          }} />
        <h4 style={{
          color: 'white',
          fontSize: "40px",
          padding: "10px"
        }}>MQuest</h4>
      </TagBar>
      {isOpen == true && <NavigationComponent />}
      <div style={{
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>completion progress
        <span style={{
          fontSize: 40,
          padding: 10,
          color: 'white',
          background: 'blue',
          borderRadius: 50,
          marginLeft: 10
        }}>{currentQuestion / questions.length * 100}%</span>
      </div>
      <AppMain>
        {currentQuestion === questions.length ? <ScoreBoard /> :
          <>
            <b style={{ marginTop: 20 }}>Question {currentQuestion + 1} out of {questions.length}</b>
            <QuestionsBoard />
            <Answers />
          </>
        }
        <div style={{
          fontStyle: 'italic',
          color: 'white',
          textAlign: 'center',
          marginTop: 40
        }}>copyright &copy; Henovative Africa,  Contact: 07033407608</div>
      </AppMain>
    </AppContainer>
  )
}

export default App;
