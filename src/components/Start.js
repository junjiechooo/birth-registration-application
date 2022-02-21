import React from 'react'

const Start = ({onSurveyStart}) => {
  return (
    <div className='card'>
        <div className='card-content'>
            <div className='content'>
                <h1>Check Eligibility</h1>
                <p>Answer all questions!</p>
                <button className='button is-info is-medium' onClick={onSurveyStart}>Start</button>
            </div>
        </div>
    </div>
  )
}

export default Start;