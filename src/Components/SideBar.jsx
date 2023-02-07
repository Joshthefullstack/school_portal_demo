import React from "react";
import { Link } from "react-router-dom";
import martins from "../images/profile_picture.png";
import { FaAlignJustify } from "react-icons/fa";
import styles from '../css_modules/SideBar.module.css'

function SideBar() {
  return (
      <div className={styles.first_section_first_div}>
        <img src={martins} alt="" />
        <div className={styles.nested_links}>
          <Link to="/" className={styles.nested_links_link}>
            <FaAlignJustify /> Update Bio
          </Link>
          <Link to="/" className={styles.nested_links_link}>
            <FaAlignJustify /> Academic Calendar
          </Link>
          <Link to="/about" className={styles.nested_links_link}>
            <FaAlignJustify /> Course Registration
          </Link>
          <Link to="/about" className={styles.nested_links_link}>
            <FaAlignJustify /> Academic Profile
          </Link>
        </div>
      </div>
  );
}

export default SideBar;
