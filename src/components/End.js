import React, { useEffect, useState } from 'react'

const End = ({ results, data, onReset, onInfoCheck }) => {

  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
      let correct = 0;
      results.forEach((result, index) => {
          if(result.a === data[index].answer) {
              correct++;
          }
      });
      setCorrectAnswers(correct);
  }, []);

  return (
    <div className='card'>
        <div className='card-content'>
            <div className='content'>
                <h3>Your results</h3>
                <p>{correctAnswers} of {data.length}</p>
                <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
                <button className='button' onClick={onInfoCheck}>SingPass Login</button>
                <button className='button' onClick={onReset}>Try again</button>
            </div>
        </div>

    </div>
  )
}

export default End;