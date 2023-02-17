import React from "react";
import { Link } from 'react-router-dom';

const QuizList = ({ quizObj }) => {
  if (!quizObj.length) {
    return <h3>No Quiz's Yet</h3>
  }

  return (
    <section>
      <div>
        {quizObj &&
          quizObj.map(({ id, title, user: { username }, created_at }) => (
            <div key={id} className="">
              <div>
                <Link to ={`/quiz/${id}`}>
                  <h2>{title}</h2>
                </Link>
              </div>
              <h3>{username}</h3>
              <p>{created_at}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default QuizList;
