import React from "react";
import PFP from '../images/pfp.jpg';
import './Home.scss';
import './Home.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import ProjectCard from './ProjectCard.js';
import smoothscroll from 'smoothscroll-polyfill';
import $ from 'jquery';
import { HashLink as LinkHash } from 'react-router-hash-link';
//icons
import CPP from '../images/icons/c++.svg';
import Java from '../images/icons/java.png';
import Ruby from '../images/icons/ruby.png';
import JS from '../images/icons/javascript.png';
import TS from '../images/icons/typescript.png';
import HTML from '../images/icons/html.dms';
import CSS from '../images/icons/css.png';
import Tailwind from '../images/icons/tailwind.jpg';
import SQL from '../images/icons/sql.png';
import react from '../images/icons/react.png';
import NextJS from '../images/icons/NextJs.png';
import Rails from '../images/icons/rails.png';
import Git from '../images/icons/git.png';
import VSCode from '../images/icons/vscode.png';
import Terminal from '../images/icons/terminal.png';
//project images
import CookAlong from '../images/CookAlong.png';
import Tobor from '../images/tobor.jpg';
import Minos from '../images/Minos.png';
import Blink from '../images/blink.png';
import HackUTD from '../images/hackutd.png';


smoothscroll.polyfill();
function Home(){

    //fade out
    $(document).ready(function(){
        $(window).scroll(function(){
            $("#socials").css("opacity", 1 - $(window).scrollTop() / (500));
        });
    });

    //fade in
    $(document).ready(function(){
        $(window).scroll(function(){
            $("#socials_bottom").css("opacity", $(window).scrollTop() / (250));
        });
    });

    //reload page
    $(document).ready(function(){
        if(document.location.hash){
            window.location = "";
        }
        $("#socials_bottom").css("opacity", 0);
    });

    //typewriter
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        // var delta = 200 - Math.random() * 100;
        var delta = 80;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');

        for(const element of elements){
            var toRotate = element.getAttribute('data-type');
            var period = element.getAttribute('data-period');
            if (toRotate) {
              new TxtType(element, JSON.parse(toRotate), period);
            }
        }

        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
        document.body.appendChild(css);
    };
    // End typewriter
    

    return(
        <>
        <Navbar/>
        {/* Home screen for lg screens */}
        <div className="lg:flex hidden min-h-screen bg-gradient-to-b from-EnglishLavender to-PastelPink flex-row items-center content-center">
            <div className="flex flex-col ml-16 w-1/2">
                <h1 className="text-7xl my-6">Nam Truong</h1>
                {/* Typewriter Section */}
                <div className="text-3xl typewrite" data-period="1000" data-type='["Student at the University of Texas at Dallas", "B.S. in Computer Science", "Ardent Explorer and Hiker","Casual Volleyball Player", "Açaí Enthusiast", "Thanks for reading!"]'>
                    <span class="wrap" ></span>
                </div>
                {/* Socials Section */}
                <div id="socials" className = "socials text-4xl my-6">
                    <a
                        href="https://github.com/nam-t24"
                        target="_blank"
                        rel="noreferrer"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="nam-t24"
                    >
                        <i class="fab fa-github"></i>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/namtruongcs/"
                        target="_blank"
                        rel="noreferrer"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="namtruongcs"
                        className = "mx-6"
                    >
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a 
                        href="mailto:namtruong831@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="namtruong831@gmail.com"
                    >
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
            <div>
                <img alt="ProfilePicture" src={PFP} className = "PFP w-64 border-2 border-white"/>
            </div>

        </div>
        {/* Home screen for sm-md screens */}
        <div className="lg:hidden inline min-h-screen bg-gradient-to-b from-EnglishLavender to-PastelPink flex flex-col justify-center items-center content-center" onload = "typewrite()">
            <img alt="ProfilePicture" src={PFP} className = "PFP sm:w-56 w-40 border-2 border-white"/>
            <h1 className="md:text-5xl text-2xl text-center md:my-4 mb-1 mt-4">Nam Truong</h1>
            {/* Typewriter Section */}
            <div className="md:text-2xl text-lg typewrite" data-period="1000" data-type='["Student at the University of Texas at Dallas", "B.S. in Computer Science", "Ardent Explorer and Hiker","Casual Volleyball Player", "Açaí Enthusiast", "Thanks for reading!"]'>
                <span class="wrap" ></span>
            </div>
            {/* Socials Section */}
            <div id="socials" className = "socials lg:text-2xl md:text-xl text-lg md:my-4 my-1">
                <a
                    href="https://github.com/nam-t24"
                    target="_blank"
                    rel="noreferrer"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="nam-t24"
                >
                    <i class="fab fa-github"></i>
                </a>
                <a 
                    href="https://www.linkedin.com/in/namtruongcs/"
                    target="_blank"
                    rel="noreferrer"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="namtruongcs"
                    className = "mx-6"
                >
                    <i class="fab fa-linkedin"></i>
                </a>
                <a 
                    href="mailto:namtruong831@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="namtruong831@gmail.com"
                >
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
        </div>
        {/* About Section */}
        <div className="about bg-gradient-to-b from-PastelPink to-white flex justify-center">
            <div className="md:my-40 my-32 md:w-3/5 w-4/5 flex flex-col items-center justify-center">
                <h1 id="about" className="md:text-4xl text-3xl my-4">Howdy!</h1>
                <div>
                    <p3 className="lg:text-lg md:text-md text-sm">
                        My name is Nam Truong and I am a second year from the University of Texas
                        at Dallas studying computer science. I created this site to not only
                        highlight my work and accomplishments but to exhibit my growth and
                        development within computer science. Through my academic work, projects,
                        and self interests, I have learned java, c++, ruby, and javascript as
                        well as using git for version control.
                        <br />
                        <br />
                        Currently, I am involved in the{" "}
                        <a href="https://www.acmutd.co/index.html" className="underline" target="-blank">
                          Association for Computing Machinery
                        </a>
                        , having participated in its{" "}
                        <a href="https://www.acmutd.co/projects" className="underline" target="-blank">
                          projects
                        </a>{" "}
                        division, and now part of the{" "}
                        <a href="https://www.hackutd.co/" className="underline" target="-blank">
                          HackUTD
                        </a>{" "}
                        division. After participating in my first hackathon, I became a
                        technical officer for HackUTD to help organize and enrich the experience
                        of the many new students who decide to partake in HackUTD in the future.
                        Additionally, I am involved in the UTD powerlifting team.
                        <br />
                        <br />
                        When I'm not coding or learning, I enjoy weight training, playing guitar,
                        testing my typing speed on{" "}
                        <a href="https://typings.gg/" className="underline" target="-blank">
                          typings.gg
                        </a>
                        , and eating mint chocolate chip ice cream :)
                    </p3>
                </div>
            </div>
        </div>
        {/* Tools and Technologies Section */}
        <div className="bg-white flex justify-center mt-8 mb-32">
            <div className=" md:w-3/5 w-4/5 border-2 rounded-lg border-OldLavender flex flex-col items-center p-4">
                <h1 className="md:text-4xl text-3xl md:mb-4 mb-2 text-center">Tools and Technologies</h1>
                <div className="icons flex flex-wrap justify-center">
                    <img src={CPP} alt="c++" className="smallIcon"></img>
                    <img src={Java} alt="java" className="smallIcon"></img>
                    <img src={Ruby} alt="ruby" className="smallIcon"></img>
                    <img src={JS} alt="javascript" className="smallIcon"></img>
                    <img src={TS} alt="typescript" className="smallIcon"></img>
                    <img src={HTML} alt="html" className="smallIcon"></img>
                    <img src={CSS} alt="css" className="smallIcon"></img>
                    <img src={Tailwind} alt="tailwindcss" className="largeIcon"></img>
                    <img src={SQL} alt="sql" className="smallIcon"></img>
                    <img src={react} alt="react" className="smallIcon"></img>
                    <img src={NextJS} alt="nextjs" className="largeIcon"></img>
                    <img src={Rails} alt="rubyonrails" className="largeIcon"></img>
                    <img src={Git} alt="git" className="smallIcon"></img>
                    <img src={VSCode} alt="vscode" className="smallIcon"></img>
                    <img src={Terminal} alt="terminal" className="smallIcon"></img>
                </div>
            </div>
        </div>
        {/* Projects Section */}
        <div id="projects" className="min-h-screen bg-EnglishLavender flex justify-center">
            <div className="md:w-4/5 w-11/12 my-8">
                <h1 className="md:text-4xl text-3xl md:mb-4 mb-2 text-center">Projects</h1>
                {/* Project Cards */}
                <div className="w-full flex flex-wrap justify-center">
                    <ProjectCard
                        path="https://github.com/acm-projects/CookAlong"
                        pic={CookAlong}
                        title="CookAlong"
                        description="Digital sous chef web application for ACM Projects Fall 2020. First place project winner"
                    />
                    <ProjectCard
                        path="https://github.com/KendalUTD/GamerJamProject"
                        pic={Tobor}
                        title="Tobor's Treasure Troph"
                        description="3D Puzzle and adventure game created through Unity for HackUTD GameJam 2020"
                    />
                    <ProjectCard
                        path="https://github.com/KevinCai319/TAMUHacks2021"
                        pic={Minos}
                        title="Minos' Quest"
                        description="Real-time multiplayer tile based labrynth game using Processing for TAMUHack 2021"
                    />
                    <ProjectCard
                        path="https://github.com/zzeneric/Blink"
                        pic={Blink}
                        title="Blink"
                        description="Real-time video conference platform that mimics an engaging classroom environment using integrated activities for HackDFW 2021"
                    />
                    <ProjectCard
                        path="https://github.com/acmutd/hackportal-hackutd"
                        pic={HackUTD}
                        title="HackUTD VIII"
                        description="Developed HackUTD VIII event site with a team of HackUTD technical officers for Fall HackUTD 2021"
                    />
                </div>
            </div>
        </div>
        {/* Copyright footer */}
        <div className="w-full bg-EnglishLavender flex justify-center">
            <div className="copyright w-3/5 border-t-1 border-OldLavender text-center text-xs p-2">
                © 2021 Nam Truong
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Home;