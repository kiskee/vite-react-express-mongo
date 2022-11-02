import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0);
  const urlWithProxy = "/api/usuario/obtenerusuarios";

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  console.log(getDataFromServer());

  return (
    <div className="App">
      <h1>Asistance Control by robadoradeperlitas</h1>
    </div>
  );
}

export default App;
