import React, { useState } from "react";
export default function Counter() {
  //let count = 7;
  const [ count, setCount] = useState(7)
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        //onClick={() => { count++; console.log(count); }}
        onClick={() => setCount(count+1)}
        id="wd-counter-up-click">
        Up
      </button>
      <button
        //onClick={() => { count--; console.log(count); }}
        onClick={()=> setCount(count-1)}
        id="wd-counter-down-click">
        Down
      </button>
      <hr/>
    </div>
  );
}