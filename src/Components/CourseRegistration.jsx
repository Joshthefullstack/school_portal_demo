import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import TableComp from "./TableComp";
import style from "../css_modules/CourseReg.module.css";
import courses from "../courses.json";

function CourseRegistration({ welcomeName }) {
  const value = JSON.parse(localStorage.getItem("academicDetails"));
  const matric_num = JSON.parse(localStorage.getItem("matric_number"));
  let [displayCourses, setDisplayCourses] = useState(() => "");
  let [displayExtraCourses, setDisplayExtraCourses] = useState(() => "");
  const navigate = useNavigate();


  useEffect(() => {
    if (
      value[0].sessionTitle === "2020/21 ACADEMIC SESSION" &&
      value[0].semester === "1"
    ) {
      setDisplayCourses(
        courses[0].map((item, index) => {
          return <TableComp item={item} index={index} key={index} />;
        })
      );
      setDisplayExtraCourses(
        <div className={style.flex}>
          <p>Please check the courses and their corresponding units</p>
          <button
            className={style.submit_btn}
            onClick={() => {
              navigate("/success");
            }}
          >
            Submit
          </button>
        </div>
      );
    } else if (
      value[0].sessionTitle === "2020/21 ACADEMIC SESSION" &&
      value[0].semester === "2"
    ) {
      setDisplayCourses(
        courses[1].map((item, index) => {
          return <TableComp item={item} index={index} key={index} />;
        })
      );
      setDisplayExtraCourses(
        <div className={style.flex}>
          <p>Please check the courses and their corresponding units</p>
          <button
            className={style.submit_btn}
            onClick={() => {
              navigate("/success");
            }}
          >
            Submit
          </button>
        </div>
      );
    }
  }, []);

  return (
    <div>
      <NavBar welcomeName={welcomeName} />
      <div className={style.outer_block}>
        <SideBar />
        <div className={style.container}>
          {value.map((item, index) => {
            return (
              <div key={index}>
                <p>Session: {item.sessionTitle}</p>
                <p>Semester: {item.semester}</p>
                <p>Matric Number: {matric_num}</p>
              </div>
            );
          })}
          <p>Please select your courses below</p>
          {displayCourses}
          {displayExtraCourses}
        </div>
      </div>
    </div>
  );
}

export default CourseRegistration;
