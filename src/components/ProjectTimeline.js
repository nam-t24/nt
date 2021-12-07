import React from 'react';
import './ProjectTimeline.css';
import { Link } from "react-router-dom";
import HomeButton from '../images/N.png';

function ProjectTimeline(){
    return(
        <>
            <div className = "timelinePage min-h-screen">
                <div className="p-4 flex items-center">
                    <Link to="/" className = "sm:ml-16 ml-6">
                        <img alt="HomeButton" src={HomeButton} className = "sm:w-12 w-10"/>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ProjectTimeline;