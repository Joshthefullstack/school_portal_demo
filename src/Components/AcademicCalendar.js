import React, { useState, useRef } from 'react';
import styles from '../css_modules/AcademicCalendar.module.css';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import NavBar from './NavBar';

function About({welcomeName}) {
    const navigate = useNavigate()
    const [allUserObj, setAllUserobj] = useState({
        startYear: '',
        endYear: '',
        sessionTitle: '',
        semester: ''
    })

    let year = ['--Please Select a Year--',2020, 2021, 2022, 2023, 2024]


    let ref = useRef('')

    let [errorMessage, setErrorMessage] = useState('');
    
    let [academicArray, setAcademicArray] = useState([])


    function submitForm(){
        // console.log(allUserObj);
        // let convertedStartYear = Number(allUserObj.startYear)

        if(allUserObj.startYear === "--Please Select a Start Year" || allUserObj.startYear === ""){
            setErrorMessage(errorMessage = "Input a valid start year");
            ref.current.style.padding = '.4em';
        }
        else if(allUserObj.endYear === "0" || allUserObj.endYear === ""){
            setErrorMessage(errorMessage = "Input a valid end year");
            ref.current.style.padding = '.4em';
        }
        else if(allUserObj.startYear > allUserObj.endYear || allUserObj.startYear === allUserObj.endYear){
            setErrorMessage(errorMessage = 'Please check if your start year is less than your end year');
            ref.current.style.padding = '.4em';
        }
        else if(allUserObj.semester === "0" || allUserObj.semester === ""){
            setErrorMessage(errorMessage = "Input a valid semester");
            ref.current.style.padding = '.4em';
        }
        else{
            ref.current.style.display='none';
            setAcademicArray(academicArray = [...academicArray, allUserObj])
            localStorage.setItem('academicDetails', JSON.stringify(academicArray))
            navigate("/course+registration")
        }
    }

    return ( 
        <div className={styles.container}>
            <NavBar welcomeName={welcomeName}/>
            <div className={styles.outer_block}>
                <SideBar/>
                <div className="first_block">
                    <h1>Academic Calendar</h1>
                    <div className={styles.error_message} ref={ref}>{errorMessage}</div>
                    <div className={styles.each_div}>
                        <label>Start Year:</label>
                        <select onChange={(e)=>{setAllUserobj({...allUserObj, startYear: e.target.value})}}>
                            {
                                year.map((year, index) => <option key={index} value={year}>{year}</option>)
                            }
                        </select>
                    </div>
                    <div className={styles.each_div}>
                        <label>End Year:</label>
                        <select onChange={(f)=>{setAllUserobj({...allUserObj, endYear: f.target.value})}}>
                            {
                                year.map((year, index) => <option key={index} value={year}>{year}</option>)
                            }
                        </select>
                    </div>
                    <div className={styles.each_div}>
                        <label htmlFor="session">Session Title:</label>
                        <input type="text" onChange={(e)=>{setAllUserobj({...allUserObj, sessionTitle: e.target.value})}} />
                    </div>
                    <div className={styles.each_div}>
                        <label>Semester:</label>
                        <select onChange={(e)=>{setAllUserobj({...allUserObj, semester: e.target.value})}}>
                            <option value="0">--Please select a semester--</option>
                            <option value="1">1st Semester</option>
                            <option value="2">2nd Semester</option>
                        </select>
                    </div>
                    <div className={styles.each_div}>
                        <button onClick={()=>navigate(-1)}>Previous</button>
                        <button onClick={submitForm}>Submit</button>
                    </div>
                    <p>NOTE: PLEASE WHEN INPUTTING AN SESSION TITLE, MAKE SURE IT'S IN FORMAT, "2022/23 ACADEMIC SESSION".</p>
                </div>
            </div>
           
        </div>
     );
}

export default About;