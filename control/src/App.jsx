import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import login from "./css/Login.module.css";
import axios from "axios";
import Login from "./components/Login";
import Weekdays from "./components/Weekdays";

function App() {
  const urlWithProxy = "/api/usuario/obtenerusuarios";

  const [displayLogin, setdisplayLogin] = useState("block");
  const [displayDays, setDisplayDays] = useState("none");

  useEffect(() => {
    if (window.sessionStorage.getItem("Logged")) {
      setdisplayLogin("none");
      setDisplayDays("block");
    } else {
      console.log("No hay sesio");
    }
  }, []);

  console.log(displayLogin);

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  getDataFromServer();

  return (
    <div>
      {/* ---------------------------------- LOGIN --------------------------------- */}
      <div style={{ display: displayLogin }} className="login">
        <Login />
      </div>
      {/* ---------------------------- Days of the week ---------------------------- */}
      <div className="daysOfWeek" style={{ display: displayDays }}>
        <Weekdays/>
      </div>
    </div>
  );
}

export default App;
