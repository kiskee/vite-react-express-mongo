import React from 'react'
import style from '../css/Logout.module.css'

const Logout = () => {

  function destroy() {
    return (
      window.sessionStorage.removeItem('Logged'),
      window.location.reload()
    )
  }


  return (
    <div>
      <button className={style.logout} onClick={() => destroy()} >Logout</button>
    </div>
  )
}

export default Logout