import React from 'react'
import login from '../css/Login.module.css';

const Login = () => {

const sesion = () =>{
    window.sessionStorage.setItem("Logged","True");
    window.location.reload();
}

  return (
    <div className={login}>
     <div className='main-wrap'>
      <form>
      <div className="sas-title">SAS Login</div>
        <label >Name</label>
        <div>
          <img src='https://cdn-dynamic.talent.com/ajax/img/get-svg.php?icon=mail_icon&size=24&color=661D72' />
        <input type='text'></input>
        </div>
        <label >Password</label>
        <div>
          <img src='https://cdn-dynamic.talent.com/ajax/img/get-svg.php?icon=lock&size=24&color=661D72' />
        <input type='password'></input>
        </div>
        <button onClick={sesion} className={login.sasMainAction }>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login