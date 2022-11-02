import React from "react";
import login from "../css/Login.module.css";
//import "../css/common.css";


const Login = () => {
  const sesion = () => {
    window.sessionStorage.setItem("Logged", "True");
    window.location.reload();
  };

  return (
   
      <div className={login.mainWrap}>
        <form method="post">
          <div className={login.sasTitle}>SAS Login</div>

          <div className={login.sasInputHolder}>
            <div className={login.sasInputLabel}>Email</div>
            <div className={login.sasInputText}>
              <img classname={login.sasInputIcon} src="https://cdn-dynamic.talent.com/ajax/img/get-svg.php?icon=mail_icon&size=24&color=661D72" />
              <input className={login.sasInput} type="text"></input>
            </div>
          </div>
          <div className={login.sasInputHolder}>
            <div className={login.sasInputLabel}>Password</div>
            <div className={login.sasInputText}>
              <img classname={login.sasInputIcon} src="https://cdn-dynamic.talent.com/ajax/img/get-svg.php?icon=lock&size=24&color=661D72" />
              <input className={login.sasInput} type="password"></input>
            </div>
          </div>





          
          <button onClick={sesion} className={login.sasMainAction}>
            Login
          </button>
        </form>
      </div>
    
  );
};

export default Login;
