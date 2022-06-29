import { useEffect, useState } from "react";

function AfterRenderAlways () {
  const [count, setCount] = useState(0);
  // if you don't give an array
  // it will get called after each render
  useEffect(()=>{
    console.log(`title has changed`);
    document.title = `clicked ${count} times`;
  },[count])
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
       className="btn btn-outline-primary"
       onClick={()=>{
        setCount(count+1);
       }}
       >Increment</button>
    </div>
  )
}

export default AfterRenderAlways;