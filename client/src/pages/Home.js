import React, { useState, useEffect } from 'react';
import QuizList from '../components/QuizList';

const Home = (props) => {
  // const [ currentQuiz, setCurrentQuiz ] = useState([]);
  const [ quizObj, setQuizObj ] = useState([]);

  useEffect((props) => {
    const getQuizes = async () => {
      
      let queryUrl = "http://localhost:3001/api/quiz?";

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
    getQuizes();
    console.log(quizObj);
  }, []);

  return (
    <section>
      <QuizList quizObj={quizObj} />
    </section>
  );

}

export default Home;