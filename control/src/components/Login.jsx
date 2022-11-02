import React from 'react'

const Login = () => {

const sesion = () =>{
    window.sessionStorage.setItem("Logged","True");
    window.location.reload();
}

  return (
    <div>Login ....
        <button onClick={sesion}>Login</button>
    </div>
  )
}

export default Login