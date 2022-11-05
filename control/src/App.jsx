import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/Login";
import Weekdays from "./components/Weekdays"
import Test from "./components/Test";
import {motion} from 'framer-motion'

function App() {
  const urlWithProxy = "/api/obtenerusuarios";

  const [displayLogin, setdisplayLogin] = useState("block");
  const [displayDays, setDisplayDays] = useState("none");

  useEffect(() => {
    if (window.sessionStorage.getItem("Logged")) {
      setdisplayLogin("none");
      setDisplayDays("block");
    } else {
      console.log("No hay sesion");
    }
  }, []);

  //console.log(displayLogin);


  /*
  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.error(err);
      });
  }
*/

  return (
    <div>
    
      {/* ---------------------------------- LOGIN --------------------------------- */}
      <div style={{ display: displayLogin }} className="login">
        <Login />
      </div>
      {/* ---------------------------- Days of the week ---------------------------- */}
      <motion.div className="daysOfWeek" style={{ display: displayDays }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      >
        <Weekdays/>
      </motion.div>
    </div>
  );
}

export default App;
