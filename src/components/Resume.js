import React from 'react';
import { Link } from "react-router-dom";
import HomeButton from '../images/N.png';
import ResumeJPG from '../images/NamTruongResume.jpg';
import ResumePDF from '../images/NamTruongResume.pdf';
import './Resume.css';

function Resume(){
    return(
        <>
            {/* Header */}
            <div className="bg-OldLavender p-4 flex items-center">
                <Link to="/" className = "sm:ml-16 ml-6">
                    <img alt="HomeButton" src={HomeButton} className = "sm:w-12 w-10"/>
                </Link>
            </div>
            {/* Resume */}
            <div className = "w-full min-h-screen bg-gradient-to-b from-OldLavender to-EnglishLavender flex justify-center">
                <a href={ResumePDF} target="_blank" rel="noopener noreferrer" className="md:w-1/2 sm:w-3/4 w-full md:my-14 my-10">
			        <img src={ResumeJPG} alt="Resume" className="resume mx-auto"/>
		        </a>
            </div>
        </>
    )
}

export default Resume;