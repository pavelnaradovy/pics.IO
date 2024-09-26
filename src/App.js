import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { init } from "./store/redusers/commentSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/comments", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      // .then((response) => dispatch(init(response.comments)));
      console.log("ssss");
      
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
