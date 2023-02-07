import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import style from '../css_modules/Login.module.css'


function LoginPage() {

  let navigate = useNavigate();

  let container = useRef('')

  let [matric, setMatric] = useState("")
  let [password, setPassWord] = useState("")
  let [errorMessage, seterrorMessage] = useState("")  //style error message

  let check = () => {
      navigate('/personal+info'); 
      container.current.style.display = "none";
      localStorage.setItem('matric_number', JSON.stringify(matric));

  }


  return (
    <div ref={container} className={style.containers}>
      <h1>Login to your Student Portal</h1>
      <div className={style.main}>
        <div>{errorMessage}</div>
        <div className={style.flex_main}>
          <label htmlFor="matric_no" className={style.main_label}>Matric Number:</label>
          <input type="text" name="matric" id="matric" onChange={(e)=>{setMatric(e.target.value);}} />
        </div>
        <div className={style.flex_main}>
          <label htmlFor="matric_no" className={style.main_label}>Password:</label>
          <input type="password" name="password" id="password" onChange={(e)=>{setPassWord(e.target.value)}}/>
        </div>
        <div className={style.btn}>
          <button onClick={()=>{check()}}>Next</button>
        </div>
      </div>

    </div>
  )
}

export default LoginPage