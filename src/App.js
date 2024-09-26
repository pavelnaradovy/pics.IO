import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { init } from "./store/redusers/commentSlice";

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch("https://reqbin.com/echo/get/json", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((response) => console.log(JSON.stringify(response)));
  //   dispatch(init([1, 1, 2]));
  // }, []);

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
