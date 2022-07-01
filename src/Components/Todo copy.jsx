import { useEffect, useState } from "react";

function TodoWithPagination () {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getTodos = async (page=1) => {
    try {
      setIsLoading(true);
      let data = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}_limit=10`);
      data = await data.json();
      // console.log(data);
      setData(data);
      setIsLoading(false);
    }
    catch(err) {
      setIsLoading(false);
      setError("Some Error Occurred");
      console.log(err);
    }
  }

  const handlePage = (e,value) => {
    setPage(page => page + value);
    e.target.blur();
  }

  useEffect(()=>{
    getTodos(page);
    // setTimeout(()=>{
    // },3000);
  }, [page])

  return (
    <div>
      <h1 className="border">Todos With Pagination</h1>
      {/* showing posts */}
      <div className="row">
        <div className="col-10 col-sm-10 col-md-6 col-lg-6 mx-auto">
          <div className="row">
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 mx-auto">
                <div className="input-group">
                  <button disabled={page===1} className="btn btn-outline-primary" onClick={(e)=>{handlePage(e,-1)}}>Prev</button>
                  <label className="form-control text-center bg-primary text-white border border-primary" value={page} >{page}</label>
                  <button disabled={page=== 200/10} className="btn btn btn-outline-primary" onClick={(e)=>{handlePage(e,1)}}>Next</button>
              </div>
              </div>
          </div>
          {
            isLoading && <h3>Your Data is Loading...</h3>
          }
          {
            !error ? 
            data.map(({id, title, completed}) => (
              <div className="row border border-primary my-2" key={id}>
                <div className="col">
                  <div className="d-flex justify-content-between p-1">
                    <p className="mb-0">{title}</p>
                    <button className={completed ? "btn btn-success" : "btn btn-warning"}>{completed ? "DONE" : "NOT DONE"}</button>
                  </div>
                </div>
              </div>
            ))
            :
            <h4>{error}</h4>
            // isLoading ? <h4>Your data is being loaded...</h4> : <>
            // {
              // data.map(({id, title, completed}) => (
            //   <div className="row border border-primary my-2" key={id}>
            //     <div className="col">
            //       <div className="d-flex justify-content-between p-1">
            //         <p className="mb-0">{title}</p>
            //         <button className={completed ? "btn btn-success" : "btn btn-warning"}>{completed ? "DONE" : "NOT DONE"}</button>
            //       </div>
            //     </div>
            //   </div>
            //   ))
            // }
            // </>
          }
        </div>

      </div>
      {/* <AfterRenderAlways /> */}
    </div>
  )
}

export default TodoWithPagination;