import { MyApp } from './App.styles';
import Answers from './components/AnswerBoard/AnswerBoard';
import { Fragment, useContext, useState } from 'react';
import { QuestionsContext } from './Assets/context';
import { AppContainer, AppMain } from './App.styled';
import { questions } from './Assets/Q/A';
import QuestionsBoard from './components/QuestionBoard/QuestionBoard';
import { ScoreBoard } from './components/ScoreBoard/Scoreboard';

function App() {

  // const { questionsMap } = useContext(QuestionsContext)

  const { currentQuestion } = useContext(QuestionsContext)


  return (
    <AppContainer>
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
