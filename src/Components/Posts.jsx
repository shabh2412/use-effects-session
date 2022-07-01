import { useEffect, useState } from "react";
import AfterRenderAlways from "./useEffectsExamples/AfterRender";

function Posts () {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getTodos = async () => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    data = await data.json();
    // console.log(data);
    setData(data);
    setIsLoading(false);
  }

  useEffect(()=>{
    setIsLoading(true);
    setTimeout(()=>{
      getTodos();
    },3000);
  }, [])

  return (
    <div>
      <h1 className="border">Posts</h1>
      {/* showing posts */}
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
          {
            isLoading ? <h4>Your data is being loaded...</h4> : data.map(({id, title, body}) => (
            <div className="row border border-primary my-2" key={id}>
              <div className="col">
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            </div>
            ))
          }
        </div>

      </div>
      {/* <AfterRenderAlways /> */}
    </div>
  )
}

export default Posts;