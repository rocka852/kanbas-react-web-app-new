import React from "react";
import HelloRedux from "./HelloRedux"
import CounterRedux from "./CounterRedux"
import AddRedux from "./AddRedux"
import Todos from "./todos"

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/>
      <Todos />
    </div>
  );
}