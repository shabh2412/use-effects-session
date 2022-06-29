import { useEffect, useState } from "react";
import AfterRenderAlways from "./useEffectsExamples/AfterRender";

function Todo () {
  const [data,setData] = useState([]);
  const getPosts = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    data = await data.json();
    setData(data);
  }
  useEffect(()=>{
    getPosts();
  },[])
  return (
    <div>
      <h1 className="border">Posts</h1>
      {/* showing posts */}
      {
        data.map(post => <div key={post.id}>
          {post.title}
        </div>)
      }
      <AfterRenderAlways />
    </div>
  )
}

export default Todo;