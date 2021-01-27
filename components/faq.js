import React from "react";
import { data } from "../components/data/datos";
import Questionsimple from "../components/question";

export default function Faq() {
  const dataInformation = data.map((x) => (
    <Questionsimple key={x.id} data={x} />
  ));
  return (
    <main className="my-8">
      <div className="w-12/12 flex ">
      <div className="w-1/12"></div>
        <div className="w-2/12">
        </div>
        <div className="w-7/12">
          {dataInformation}
          </div>
      </div>
    </main>
  );
}
