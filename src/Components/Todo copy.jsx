import { useEffect, useState } from "react";
import AfterRenderAlways from "./useEffectsExamples/AfterRender";

function TodoWithPagination () {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getTodos = async () => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
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
            isLoading ? <h4>Your data is being loaded...</h4> : data.map(({id, title, completed}) => (
            <div className="row border border-primary my-2" key={id}>
              <div className="col">
                <div className="d-flex justify-content-between p-1">
                  <p className="mb-0">{title}</p>
                  <button className={completed ? "btn btn-success" : "btn btn-warning"}>{completed ? "DONE" : "NOT DONE"}</button>
                </div>
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

export default TodoWithPagination;