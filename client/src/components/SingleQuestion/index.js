import React, { useState } from 'react';
import FinishQuiz from '../../pages/FinishQuiz';

const SingleQuestion = ( {questions} ) => {

  const [ score, setScore ] = useState(0);
  const [ currentQuestion, setCurrentQuestion ] = useState(0);

  const optionClick = (correct) => {
    if(!correct){
      console.log("Incorrect");
    } else {
      setScore(score + 1);
      console.log(score);
      console.log('Correct!');
    }
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  }

  // setCurrentQuestion(questions.find(obj => {
  //   return obj.id === questionId;
  // }));
  if(questions[currentQuestion] != null) {
    return (
      <div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {questions[currentQuestion].id}/{questions.length}</span>
            </div>
            <div className="question-text">
              <h5>{questions[currentQuestion].title}</h5>
            </div>
            <div>
              {questions[currentQuestion].options.map(({ id, option, correct }) => (
                <div key={id}>
                  <button onClick={() => {
                    optionClick(correct);
                  }}>
                    {option}
                  </button>
                </div>
              ))}
            </div>
          </div>
      </div>
    )
  } else {
    return (
    <div>
      <FinishQuiz score={score} total={questions.length}/>
    </div>
    )
  }

}


export default SingleQuestion;
