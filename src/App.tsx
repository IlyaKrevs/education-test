import React, { useLayoutEffect } from 'react';
import './App.css';
import Track from './components/Track/Track';
import QuestionCard from './components/QuestionCard/QuestionCard';
import TopItem from './components/TopItem/TopItem';
import { useDispatch, useQuestions, useTime } from './store/hooks';


function App() {

  const state = useQuestions()
  const dispatch = useDispatch()

  let questions = state.questions
  let answers = state.answers

  let currentCard = questions[state.currentQuestion]

  let completedTest = answers.every(item => item !== null && item !== undefined)

  let result = 0
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].necessaryValue == answers[i]) {
      result = result + 1
    }
  }

  useLayoutEffect(() => {
    if (state.status !== 'end' && completedTest) {
      dispatch({ type: 'finished' })
    }
  }, [state.status, completedTest])



  let content;

  function startHandler() {
    dispatch({
      type: 'began',
      value: Date.now()
    })
  }

  function resetHandler() {
    dispatch({
      type: 'reset'
    })
  }


  if (state.status === 'start') {
    content = (
      <div className='startBtnContainer'>
        <button className='myButton'
          onClick={startHandler}
        >
          Start
        </button>
      </div>
    )
  } else if (state.status === 'inProgress') {
    content = (
      <>
        <TopItem />

        <Track
          current={state.currentQuestion}
          countQuestions={state.questions.length}
          answers={state.answers}
        />

        <QuestionCard key={currentCard.id} currentCard={currentCard} />
      </>
    )
  } else if (state.status === 'end') {
    content = (
      <>
        <div>YOUR RESULT: {result}</div>
        <div className='startBtnContainer'>
          <button className='myButton'
            onClick={resetHandler}
          >
            Go again
          </button>
        </div>
      </>
    )
  }

  return (
    <div className="App">
      <div className="mainContainer">

        {content}

        {state.status !== 'start' && state.status !== 'end'
          && <button className='myButton'
            onClick={resetHandler}
          >RESET
          </button>}

      </div>
    </div>
  );
}

export default App;
