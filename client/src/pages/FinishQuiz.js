import React from 'react'

const FinishQuiz = ({ score, total}) => {

  console.log(score);
  return (
      <div>
        <h1>Congrats!!</h1>
        <p>score: {score}/{total}</p>
      </div>
  )
}

export default FinishQuiz;