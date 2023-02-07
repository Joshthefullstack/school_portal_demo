import { FaMarker } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import styles from "../css_modules/Home.module.css";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className={styles.container}>
      <NavBar/>
      <div className={styles.outer_block}>
        <SideBar />
        <div className={styles.first_block}>
          <Link
            to="/personal+info"
            className={styles.link_style}
            style={{ backgroundColor: "darkgreen" }}
          >
            <div className={styles.first_block_disp_flex}>
              <FaUserCheck className={styles.icon} />
              <p className={styles.para}>Check Biodata</p>
            </div>
          </Link>

          <Link
            to="/course+registration"
            className={styles.link_style}
            style={{ backgroundColor: "darkred" }}
          >
            <div className={styles.first_block_disp_flex}>
              <FaMarker className={styles.icon} />
              <p className={styles.para}>Course Registration</p>
            </div>
          </Link>

          <Link to="/about" className={styles.link_style}>
            <div className={styles.first_block_disp_flex}>
              <FaListUl className={styles.icon} />
              <p className={styles.para}>View Registrations</p>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;
