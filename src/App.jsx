// import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts';
import TodoWithPagination from './Components/Todo copy';
import AfterRender from './Components/useEffectsExamples/AfterRender';
import NestedComponent from './Components/useEffectsExamples/NestedComponent';

function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <Posts/> */}
      {/* <AfterRender /> */}
      {/* <NestedComponent /> */}
      <TodoWithPagination/>
    </div>
  );
}

export default App;
