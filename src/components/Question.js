import React, { useState, useEffect, useRef} from 'react'
 

const Question = ({ data, onAnswerUpdate, numberofQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
      const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
      if(findCheckedInput) {
          findCheckedInput.checked = false;
      }
  });

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
        setError('');
    }
  }

  const nextClickHandler = (e) => {
      if(selected === '') {
          return setError('Please select one option!');
      }
      onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
      setSelected('');
      if(activeQuestion < numberofQuestions - 1) {
          onSetActiveQuestion(activeQuestion + 1);
      } else {
          onSetStep(3);
      }
  }

  return (
    <div className='card'>
        <div className='card-content'>
            <div className='content'>
                <h2 className="mb-5">{data.question}</h2>
                <div className='control' ref={radiosWrapper}>
                    {data.choices.map((choice, i) => (
                        <label className='radio has-background-light' key={i}>
                            <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                                {choice}
                        </label>
                    ))}
                </div>
                {error && <div className='has-text-danger'>{error}</div>}
                <button className='button' onClick={nextClickHandler}>Next</button>
            </div>
        </div>
    </div>
  )
 }


export default Question;