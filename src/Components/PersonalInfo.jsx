import style from "../css_modules/PersonalInfo.module.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

function PersonalInfo({ welcomeName, setWelcomeName }) {
  let navigate = useNavigate();

  let [userPersonalDeatils, setUserPersonalDetails] = useState({
    fName: "",
    lName: "",
    midName: "",
    dateOfBirth: "",
    sOfOrigin: "",
    mStatus: "",
    telePhoneNum: "",
    eAddress: "",
    faculty: "",
    department: "",
  });

  let [personalArray, setPerosnalArray] = useState([]);

  let [errorMessage, setErrorMessage] = useState("");

  const errorMessageDiv = useRef("");

  function submitPersonalDetails() {
    if (userPersonalDeatils.fName.length < 2) {
      setErrorMessage((errorMessage = "Please input a valid first name"));
      errorMessageDiv.current.style.padding = ".6em";
      return false;
    } else if (userPersonalDeatils.lName.length < 2) {
      setErrorMessage((errorMessage = "Please input a valid last name"));
      errorMessageDiv.current.style.padding = ".6em";
      return false;
    } else if (userPersonalDeatils.midName.length < 2) {
      setErrorMessage((errorMessage = "Please input a valid middle name"));
      errorMessageDiv.current.style.padding = ".6em";
      return false;
    } else if (userPersonalDeatils.dateOfBirth === "") {
      setErrorMessage((errorMessage = "Please input a valid date"));
      errorMessageDiv.current.style.padding = ".6em";
      return false;
    } else if (userPersonalDeatils.sOfOrigin === "") {
      setErrorMessage((errorMessage = "Please input a valid state of Origin"));
      errorMessageDiv.current.style.padding = ".6em";
      return false;
    } else if (userPersonalDeatils.mStatus === "") {
      setErrorMessage((errorMessage = "Please input a valid Marital Status"));
      errorMessageDiv.current.style.padding = ".6em";
      return false;
    } else if (
      userPersonalDeatils.telePhoneNum === "" ||
      userPersonalDeatils.telePhoneNum.length === 12
    ) {
      setErrorMessage((errorMessage = "Please input a valid Phone Number"));
      errorMessageDiv.current.style.padding = ".6em";
      return false;
    } else if (
      userPersonalDeatils.eAddress === "" ||
      userPersonalDeatils.eAddress.length < 2 ||
      !userPersonalDeatils.eAddress.includes("@") ||
      !(userPersonalDeatils.eAddress.slice(-4) === ".com")
    ) {
      setErrorMessage((errorMessage = "Please input a valid Email Address"));
      errorMessageDiv.current.style.padding = ".6em";
      return false;
    } else if (userPersonalDeatils.faculty === "") {
      setErrorMessage((errorMessage = "Please input a valid Faculty"));
      errorMessageDiv.current.style.padding = ".6em";
      return false;
    } else if (userPersonalDeatils.department === "") {
      setErrorMessage((errorMessage = "Please input a valid Department"));
      errorMessageDiv.current.style.padding = ".6em";
      return false;
    } else {
      setErrorMessage((errorMessage = ""));
      errorMessageDiv.current.style.backgroundColor = "transparent";
      setWelcomeName(`Welcome ${userPersonalDeatils.fName} ${userPersonalDeatils.midName} ${userPersonalDeatils.lName}`)
      setPerosnalArray(
        (personalArray = [...personalArray, userPersonalDeatils])
      );
      localStorage.setItem(
        "User Personal Details",
        JSON.stringify(personalArray)
      );
      navigate("/about");
    }
  }

  let dropDown = {
    state: [
      "--Please select a state--",
      "Abia",
      "Adamawa",
      "Akawa-Ibom",
      "Anambra",
      "Bauchi",
      "Bayelsa",
      "Benue",
      "Borno",
      "Cross-River",
      "Delta",
      "Ebonyi",
      "Edo",
      "Ekiti",
      "Enugu",
      "Gombe",
      "Imo",
      "Jigawa",
      "Kaduna",
      "Kaduna",
      "Katsina",
      "Kebbi",
      "Kogi",
      "Kwara",
      "Lagos",
      "Nassarawa",
      "Niger",
      "Ogun",
      "Ondo",
      "Osun",
      "Oyo",
      "Plateau",
      "Rivers",
      "Sokoto",
      "Taraba",
      "Yobe",
      "Zamfara",
    ],
    marital_status: [
      "--Please select a marital status--",
      "Single",
      "Married",
      "God, am I a spoon",
      "Ashawo",
    ],
    faculty_select: [
      "--Please select a faculty--",
      "Faculty of Management Sciences",
      "Faculty of Arts",
      "Faculty of Architecture",
      "Faculty of Social Sciences",
      "Faculty of Education",
      "Faculty of Education",
      "Faculty of Engineering",
    ],
    department_select: [
      "--Please select a department--",
      "I am still working on this",
      "One",
      "Two",
      "Three",
    ],
  };

  const faculty = [
    "--Please select--",
    "Faculty Of Management Sciences",
    "Faculty Of Social Sciences",
    "Faculty of Engineering",
    "Faculty of Science",
    "Faculty of Education",
    "Faculty of Law",
    "Faculty of Arts",
    "Faculty of Architecture",
  ];
  let departmentOfManagementSciences = [
    "--Please select--",
    "Accounting",
    "Insurance",
    "Banking and Finance",
    "Actuarial Science",
    "Business Administration",
  ];
  let departmentofSocialSciences = [
    "--Please select--",
    "Political Science",
    "Sociology",
    "Psychology",
    "Social Science",
  ];
  let departmentofEngineering = [
    "--Please select--",
    "Electrical Engineering",
    "Computer Engineering",
    "Petroleum Engineering",
    "Chemical Engineering",
    "Mechanical Engineering",
    "Aeronautical Engineering",
  ];
  let departmentofScience = [
    "--Please select--",
    "Zoology",
    "Botany",
    "Pharmacology",
    "Computer Science",
    "Medical Laboratory",
  ];
  let departmentofEducation = [
    "--Please select--",
    "Adult Education",
    "Estate Education",
  ];
  let departmentofLaw = ["--Please select--", "Law", "Business Law"];
  let departmentofArts = [
    "--Please select--",
    "Philosophy",
    "Theatre Acting",
    "European Language",
  ];
  let departmentofArchitecture = [
    "--Please select--",
    "Estate Management",
    "Estate Surveying",
    "Civil Engineering",
  ];


  let [facultySelect, setFacultySelect] = useState("");
  let [dropdowndepartment, setDropDownDepartment] = useState("");

  useEffect(() => {
    if (facultySelect === faculty[1]) {
      setDropDownDepartment(
        departmentOfManagementSciences.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })
      );
    } else if (facultySelect === faculty[2]) {
      setDropDownDepartment(
        departmentofSocialSciences.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })
      );
    } else if (facultySelect === faculty[3]) {
      setDropDownDepartment(
        departmentofEngineering.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })
      );
    } else if (facultySelect === faculty[4]) {
      setDropDownDepartment(
        departmentofScience.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })
      );
    } else if (facultySelect === faculty[5]) {
      setDropDownDepartment(
        departmentofEducation.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })
      );
    } else if (facultySelect === faculty[6]) {
      setDropDownDepartment(
        departmentofLaw.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })
      );
    } else if (facultySelect === faculty[7]) {
      setDropDownDepartment(
        departmentofArts.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })
      );
    } else if (facultySelect === faculty[8]) {
      setDropDownDepartment(
        departmentofArchitecture.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })
      );
    }
  }, [facultySelect]);

  return (
    <div className="container">
      <NavBar welcomeName={welcomeName}/>
      <div className={style.outer_block}>
        <SideBar welcomeName={welcomeName} />
        <div className="first_block">
          <p className={style.para_style}>Personal Information</p>
          <div className={style.error_message} ref={errorMessageDiv}>
            {errorMessage}
          </div>
          <div className={style.double_div}>
            <div className={style.each_div}>
              <label>First Name:</label>
              <input
                type="text"
                onChange={(e) => {
                  setUserPersonalDetails(
                    (userPersonalDeatils = {
                      ...userPersonalDeatils,
                      fName: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <div className={style.each_div}>
              <label>Last Name:</label>
              <input
                type="text"
                onChange={(e) => {
                  setUserPersonalDetails(
                    (userPersonalDeatils = {
                      ...userPersonalDeatils,
                      lName: e.target.value,
                    })
                  );
                }}
              />
            </div>
          </div>
          <div className={style.double_div}>
            <div className={style.each_div}>
              <label>Middle Name:</label>
              <input
                type="text"
                onChange={(e) => {
                  setUserPersonalDetails(
                    (userPersonalDeatils = {
                      ...userPersonalDeatils,
                      midName: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <div className={style.each_div}>
              <label>Date Of Birth:</label>
              <input
                type="date"
                onChange={(e) =>
                  setUserPersonalDetails(
                    (userPersonalDeatils = {
                      ...userPersonalDeatils,
                      dateOfBirth: e.target.value,
                    })
                  )
                }
              />
            </div>
          </div>
          <div className={style.double_div}>
            <div className={style.each_div}>
              <label>State Of Origin:</label>
              <select
                name="state_of_origin"
                onChange={(e) => {
                  setUserPersonalDetails(
                    (userPersonalDeatils = {
                      ...userPersonalDeatils,
                      sOfOrigin: e.target.value,
                    })
                  );
                }}
              >
                {dropDown.state.map((value, index) => {
                  return (
                    <option key={index} id={index} value={value}>
                      {value}{" "}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={style.each_div}>
              <label>Marital Status:</label>
              <select
                name="marital_status"
                onChange={(e) => {
                  setUserPersonalDetails(
                    (userPersonalDeatils = {
                      ...userPersonalDeatils,
                      mStatus: e.target.value,
                    })
                  );
                }}
              >
                {dropDown.marital_status.map((value, index) => {
                  return (
                    <option key={index} id={index} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={style.double_div}>
            <div className={style.each_div}>
              <label>Telephone Number:</label>
              <input
                type="text"
                onChange={(e) => {
                  setUserPersonalDetails(
                    (userPersonalDeatils = {
                      ...userPersonalDeatils,
                      telePhoneNum: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <div className={style.each_div}>
              <label>Email Address:</label>
              <input
                type="text"
                onChange={(e) => {
                  setUserPersonalDetails(
                    (userPersonalDeatils = {
                      ...userPersonalDeatils,
                      eAddress: e.target.value,
                    })
                  );
                }}
              />
            </div>
          </div>
          <div className={style.double_div}>
            <div
              className={style.each_div}
              onChange={(e) => {
                setUserPersonalDetails(
                  (userPersonalDeatils = {
                    ...userPersonalDeatils,
                    faculty: e.target.value,
                  })
                );
              }}
            >
              <label>Faculty:</label>
              <select
                name=""
                id=""
                onChange={(event) => {
                  setFacultySelect(event.target.value);
                }}
              >
                {faculty.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className={style.each_div}>
              <label>Department:</label>
              <select
                onChange={(e) => {
                  setUserPersonalDetails(
                    (userPersonalDeatils = {
                      ...userPersonalDeatils,
                      department: e.target.value,
                    })
                  );
                  console.log(userPersonalDeatils.department);
                }}
              >
                {dropdowndepartment}
              </select>
            </div>
          </div>
          <div className={style.each_div}>
            <button
              onClick={() => {
                navigate(-1);
              }}
            >
              Previous
            </button>
            <button
              className={style.button_style}
              onClick={() => {
                submitPersonalDetails();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
