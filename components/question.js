import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Questionsimple = (props) => {
  const { title, info } = props.data;
  const [sowQuestion, setShowQuestions] = useState(true);
  const [showAwnser, setShowAwnser] = useState(false);
  const showTheAwnser = () => setShowQuestions(!sowQuestion)

  return (
    <div className="ml-5  flex flex-col justify-center max-w-2xl rounded">
      <div>
        <h4 className="section-title-question"> {title}</h4>
      </div>
      <article
        className={`text-justify mt-4 ${
          sowQuestion ? ".show-question" : "not-show-question"
        }`}
      >
        {info}
      </article>
      {sowQuestion ? (
        <a
          onClick={() => {
            showTheAwnser()
          }}
        >
          <AiOutlineMinus />
        </a>
      ) : (
        <a
        onClick={() => {
          showTheAwnser()
        }}
      >
       
        <AiOutlinePlus />
        </a>
      )}
    </div>
  );
};

export default Questionsimple;
