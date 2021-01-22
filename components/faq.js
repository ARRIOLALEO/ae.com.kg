import React from "react";
import {data}from '../components/data/datos'
import Questionsimple from '../components/question'

export default function Faq() {
    const dataInformation = data.map(x => <Questionsimple key={x.id} data={x}/>)
  return (
<main> 
    <div className="container-questions">
    <div><h3>Some Information</h3></div>
         <section className="info">{dataInformation}</section>   
  </div>;
  </main>
  );
}
