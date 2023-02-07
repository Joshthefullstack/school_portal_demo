import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css_modules/NavBar.module.css";
import images from "../images/akatsuki.png";

function NavBar({welcomeName}) {

  let navigate = useNavigate()

  let modal = useRef("")

  const logUserOut = () =>{
    modal.current.showModal()
  }

  const logOut = () => {
    navigate("/")
  }

  const goBack  = () => {
    modal.current.close()
  }
  return (
    <div>
      <nav className={styles.container}>
        <img src={images} alt="My Logo" />
        <div className={styles.display_name}>{}</div>
        <p className={styles.text}>{welcomeName}</p>
        <Link className={styles.container_link} onClick={logUserOut}>
          Log Out
        </Link>
        <dialog ref={modal} className={styles.modal}>
          <p>Are you sure you want to log out?</p>
          <button onClick={logOut} className={styles.logOut}>Yes</button>
          <button onClick={goBack} className={styles.logOut}>No</button>
        </dialog>
      </nav>
    </div>
  );
}

export default NavBar;
