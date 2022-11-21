import React, { useState, useEffect } from "react";

const DisplayList = () => {
  const [quizObj, setQuizObj] = useState([]);
  let start = 'Start Quiz';
  useEffect(() => {
    const getQuizes = async () => {
      
      let queryUrl = "http://localhost:3001/api/quiz?";
      
      // Object.entries(quizData).forEach(([key, value]) => {
      //     queryUrl += `${key}=${value}&`;
      //   });

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
      <div>
        {quizObj &&
          quizObj.map((quiz) => (
            <div key={quiz.id} className="">
              <h4>{quiz.title}</h4>
              <p>{quiz.user_id}</p>
              <p>{quiz.createdAt}</p>
              <button onClick={() => { } }>{start}</button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default DisplayList;
