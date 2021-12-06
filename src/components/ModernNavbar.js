import React from 'react';
import HomeButton from '../images/N.png';
import { Link } from "react-router-dom";
import { HashLink as LinkHash } from 'react-router-hash-link';


//FAIL: DO NOT IMPLEMENT

function ModernNavbar(){

    //scroll offset
    const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return(
        <div className = "bg-EnglishLavender flex justify-center items-center py-4">
            <div id="MenuItems" className = "flex justify-end md:text-xl text-sm w-1/6">
                <LinkHash smooth={true} to="#about" className="MenuHover mr-14" scroll={el => scrollWithOffset(el)}>
                    About
                </LinkHash>
                <LinkHash smooth={true} to="#projects" className="MenuHover mr-20">
                    Projects
                </LinkHash>
            </div>

            <div>
                <Link to="/" className = "">
                    <img alt="HomeButton" src={HomeButton} className = "sm:w-16 w-10"/>
                </Link>
            </div>
            
            <div id="MenuItems" className = "flex md:text-xl text-sm w-1/6 pl-18px">
                <Link to="/resume" className="ResumeHover md:py-2 sm:py-1 md:px-4 px-2 ml-20">
                    Resume
                </Link>
            </div>
        </div>
    );
}

export default ModernNavbar;