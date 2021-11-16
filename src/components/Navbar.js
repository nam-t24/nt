import React from 'react';
import HomeButton from '../images/N.png';
import { Link } from "react-router-dom";
import { HashLink as LinkHash } from 'react-router-hash-link';
// md:gap-20 sm:gap-16 gap-6
function Navbar(){
    return(
        <div className = "bg-EnglishLavender flex justify-between items-center py-4">
            <Link to="/" className = "sm:ml-16 ml-6">
                <img alt="HomeButton" src={HomeButton} className = "sm:w-12 w-10"/>
            </Link>
            <div id="MenuItems" className = "sm:mr-16 mr-6 flex items-center md:text-xl text-sm">
                <LinkHash smooth={true} to="#about" className="MenuHover">
                    About
                </LinkHash>
                <LinkHash smooth={true} to="#about" className="MenuHover md:mx-20 sm:mx-12 mx-6">
                    Projects
                </LinkHash>
                <Link to="/resume" className="ResumeHover md:py-2 sm:py-1 md:px-4 px-2">
                    Resume
                </Link>
            </div>
        </div>
    );
}

export default Navbar;