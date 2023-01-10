import React, { useState } from 'react'

const SingleQuestion = ( {questions} ) => {

  // const [ questionId, setQuestionId ] = useState(0);
  const [ questionObj, setQuestionObj ] = useState([]);

  const optionClick = (correct) => {
    if(!correct){
      alert('Incorrect!');
    } else {
      alert('Correct!');
    }
    // setQuestionId(questionId + 1);
  }

  // setQuestionObj(questions.find(obj => {
  //   return obj.id === questionId;
  // }));

  return (
    <div>
      {questions.map(({ id, title, options}) => (
        <div key={id} className="">
          <h5>{title}</h5>
          <div>
            {options.map(({ id, option, correct }) => (
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
      ))}
    </div>
  )
}


export default SingleQuestion;
