import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SingleQuestion from '../components/SingleQuestion';

const StartQuiz = () => {
  const [ quizObj, setQuizObj ] = useState([]);
  const { id: quiz_id } = useParams();

  useEffect((props) => {
    const getQuiz = async () => {
      
      let queryUrl = "http://localhost:3001/api/quiz/" + quiz_id;

      await fetch(queryUrl)
        .then((response) => {
          if (!response.ok) {
            return alert("Error:" + response.statusText);
          }
          return response.json();
        })
        .then((quizData) => {
          setQuizObj(quizData);
        });
    } 
    getQuiz();
  }, []);
  
  const { id, title, user_id, created_at, questions } = quizObj;

  if (!questions) {
    return (<h1>Loading...</h1>)
  } else {
    return (
      <section>
        <div>
          <div key={id} className="">
            <h2>{title}</h2>
            <h3>{user_id}</h3>
            <p>{created_at}</p>
          </div>
        </div>
        <SingleQuestion questions={quizObj.questions} />
      </section>
    )
  }
}

export default StartQuiz;
