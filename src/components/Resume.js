import React from 'react';
import { Link } from "react-router-dom";
import HomeButton from '../images/N_white.png';
import ResumeJPG from '../images/NamTruong_Resume.jpg';
import ResumePDF from '../images/NamTruong_Resume.pdf';
import './css/Resume.css';

function Resume(){

    return(
        <div className = "resumeSection">
            {/* Header */}
            <div className="p-4 flex items-center">
                <Link to="/" className = "sm:ml-16 ml-6">
                    <img alt="HomeButton" src={HomeButton} className = "sm:w-10 w-8"/>
                </Link>
            </div>
            {/* Resume */}
            <div className = "w-full min-h-screen flex justify-center">
                <a href={ResumePDF} target="_blank" rel="noopener noreferrer" className="md:w-1/2 sm:w-3/4 w-full md:my-14 my-10">
			        <img src={ResumeJPG} alt="Resume" className="resume mx-auto"/>
		        </a>
            </div>
            {/* Copyright footer */}
            <div className="w-full flex justify-center">
                <div className="copyright w-3/5 border-t-1 border-white text-center text-xs p-2 text-white">
                    © 2021 Nam Truong
                </div>
            </div>
        </div>
    )
}

export default Resume;