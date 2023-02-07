import React from 'react'
import NavBar from './NavBar';
import SideBar from './SideBar';
import style from '../css_modules/SuccessPage.module.css';
// import PDFFile from './PDFFile'
// import { PDFDownloadLink } from "@react-pdf/renderer";


function SuccessPage({ welcomeName }) {
  
  return (
    <div>
        <NavBar welcomeName={welcomeName}/>
        <div className={style.outer_block}>
            <SideBar/>
            <div>
                <p>You have successfully registered for your courses</p>
                <button className={style.print_btn}>Print</button>
                {/* <PDFDownloadLink document={<PDFFile/>} fileName="Course Registration">
                  {({loading})=>(loading ? <button>Loading Document...</button> : <button>Download</button>)}
                </PDFDownloadLink> */}
                {/* <PDFFile/> */}

            </div>
        </div>
    </div>
  )
}

export default SuccessPage