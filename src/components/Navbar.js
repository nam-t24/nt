import React from 'react';
import HomeButton from '../images/N.png';
import { Link } from "react-router-dom";
import { HashLink as LinkHash } from 'react-router-hash-link';

function Navbar(){

    //scroll offset
    const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return(
        <div className = "bg-HookersGreen flex justify-between items-center py-4">
            <Link to="/" className = "sm:ml-16 ml-6">
                <img alt="HomeButton" src={HomeButton} className = "sm:w-12 w-10"/>
            </Link>
            <div id="MenuItems" className = "sm:mr-16 mr-6 flex items-center md:text-xl text-sm">
                <LinkHash smooth={true} to="#about" className="MenuHover" scroll={el => scrollWithOffset(el)}>
                    About
                </LinkHash>
                <LinkHash smooth={true} to="#projects" className="MenuHover md:mx-20 sm:mx-12 mx-6">
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