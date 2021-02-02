import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PropTypes from 'prop-types'

const Questionsimple = (props) => {
  const { title , info } = props.data;
  const [sowQuestion, setShowQuestions] = useState(false);
  const [showAwnser, setShowAwnser] = useState(false);
  const showTheAwnser = () => setShowQuestions(!sowQuestion)

  return (
    <div className="ml-5 flex flex-col justify-center max-w-2xl rounded shadow-question ">
      <div className ="header-question">
        <h4 className="section-title-question"> {title}</h4>
        {sowQuestion ? (
        <a
          onClick={(e) => {
            e.preventDefault()
            showTheAwnser()
          } } className="icon-question" href="#">
          <AiOutlineMinus  />
        </a>
      ) : (
        <a
        onClick={(e) => {
          e.preventDefault()
          showTheAwnser()
        }} className="icon-question"
        href="#"
      >
       
        <AiOutlinePlus />
        </a>
      )}

      </div>

     
            <article
        className={`text-justify mt-4 ${
          sowQuestion ? ".show-question" : "not-show-question"
        }`}
      >
        {info}
      </article>
    </div>
  );
 
};
// validation of the props
Questionsimple.propTypes = {
  title: PropTypes.bool
};
Questionsimple.defaultPros ={
  tittle:"mario"
}
export default Questionsimple;
