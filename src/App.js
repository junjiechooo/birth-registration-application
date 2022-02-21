import React, { useState, useEffect } from 'react'; 
import './App.css';

import Start from './components/Start';
import Question from './components/Question';
import End from './components/End';
import quesData from './data/questions.json';
import Modal from './components/Modal';

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const quesStartHandler = () => {
    setStep(2);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
  }

  return (
    <div className="App">
      { step === 1 && <Start onSurveyStart={quesStartHandler}/> }
      { step === 2 && <Question 
        data={quesData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberofQuestions={quesData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      /> }
      { step === 3 && <End 
        results={answers}
        data={quesData.data}
        onInfoCheck={() => setShowModal(true)}
        onReset={resetClickHandler}
      />}
        
      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quesData.data} 
      />}
    </div>
  );
}

export default App;
