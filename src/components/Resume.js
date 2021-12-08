import React from 'react';
import { Link } from "react-router-dom";
import HomeButton from '../images/N.png';
import ResumeJPG from '../images/NamTruong_Resume.jpg';
import ResumePDF from '../images/NamTruong_Resume.pdf';
import './css/Resume.css';
import Roblox from '../sounds/roblox.mp3';

function Resume(){

    //play Roblox oof audio on click
    let audio = new Audio(Roblox)
    const PlayRoblox = () => {
        audio.play()
    }

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
            {/* Copyright footer */}
            <div className="w-full bg-EnglishLavender flex justify-center">
                <div className="copyright w-3/5 border-t-1 border-OldLavender text-center text-xs p-2">
                    © 2021 Nam Truong
                </div>
            </div>
        </>
    )
}

export default Resume;