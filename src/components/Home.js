import React from "react";
import PFP from '../images/pfp.jpg';
import './Home.scss';
import './Home.css';
import Navbar from './Navbar.js';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();
function Home(){
    return(
        <>
        <Navbar/>
        <div className="min-h-screen bg-gradient-to-b from-EnglishLavender to-PastelPink flex flex-col justify-center items-center">
            <img alt="ProfilePicture" src={PFP} className = "PFP sm:w-56 w-40 border-2 border-white"/>
        </div>
        <div id="about" class="about" className="about">
           about
        </div>
        <div className="min-h-screen bg-Apricot">
            
        </div>
        </>
    );
}

export default Home;