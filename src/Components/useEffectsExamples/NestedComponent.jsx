import { useEffect } from "react";

const Child = () => {
  console.log(3);
  useEffect(()=>{
    console.log(4);
  },[]);
  return (
    <h1>Child</h1>
  )
}
const NestedComponent = () => {
  console.log(1);
  useEffect(()=>{
    console.log(2);
  },[]);
  return (
    <div>
      <h1>Parent</h1>
      <Child />
    </div>
  )
}

// Expected output -> 1,3,4,2

export default NestedComponent;