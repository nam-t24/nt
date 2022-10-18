import PFP from '../images/pfp.jpg';
import './css/Home.scss';
import './css/Home.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import ProjectCard from './ProjectCard.js';
import smoothscroll from 'smoothscroll-polyfill';
import { Link } from "react-router-dom";
import $ from 'jquery';
import { useEffect, useState } from "react";
import 'animate.css';
import WOW from 'wow.js';
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
import Firebase from '../images/icons/firebase.png';
import Python from '../images/icons/python.png'
import Terraform from '../images/icons/terraform.png'
import AWS from '../images/icons/aws.png'
//project images
import CookAlong from '../images/CookAlong.png';
import Tobor from '../images/tobor.jpg';
import Minos from '../images/Minos.png';
import Blink from '../images/blink.png';
import HackUTDVIII from '../images/hackutdVIII.png';
import HackUTDVII from '../images/hackutdVII.png';
import HackPortal from '../images/HackPortal.png';
import HackUTDIX from '../images/hackutdIX.png'
import SimpliFarm from '../images/SimpliFarm.png'

smoothscroll.polyfill();
function Home(){
    //refresh on page load
    useEffect(() => {
        typewriter();
        $("#socials_bottom").css("opacity", 0);
        new WOW().init();
        accordion();
    });
    
    document.documentElement.style.setProperty('--animate-duration', '1.8s');

    //fade in/out
    $(document).ready(function(){
        $(window).scroll(function(){
            $("#socials").css("opacity", 1 - $(window).scrollTop() / (500));
            $("#socials_bottom").css("opacity", $(window).scrollTop() / (250));

        });
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

        this.el.innerHTML = '<span className="wrap">'+this.txt+'</span>';

        var that = this;
        // var delta = 200 - Math.random() * 100;
        // Speed of typing animation
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

    function typewriter() {
        var elements = document.getElementsByClassName('typewrite');

        for(const element of elements){
            var toRotate = element.getAttribute('data-type');
            var period = element.getAttribute('data-period');
            if (toRotate) {
              new TxtType(element, JSON.parse(toRotate), period);
            }
        }
    }
    // End typewriter

    const accordion = () => {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                } 
            });
        }
    }

    return(
        <>
        {/* <div className="absoluteBackground fixed top-0 left-0 min-w-screen min-h-screen"></div> */}
        <Navbar/>
        {/* Home screen for lg screens */}
        <div className="lg:flex hidden min-h-screen bg-[#FDFCFF] flex-row items-center content-center">
            <div className="flex flex-col ml-16 w-1/2 2xl:w-3/5 relative">
                <div className='2xl:w-[60rem] 2xl:h-[60rem] w-[45rem] h-[45rem] rounded-full absolute top-1/2 2xl:left-8 left-0 -translate-y-1/2 -translate-x-1/2 softGlow z-0'></div>
                <h1 id = "fadein" className="font-semibold text-7xl 2xl:text-8xl my-6 fadein animate__animated animate__fadeInDown z-10">Nam Truong</h1>
                {/* Typewriter Section */}
                <p className='z-10'>
                    <span
                        data-period="1500"
                        className="typewrite typeBlink text-3xl 2xl:text-4xl"
                        data-type='["Student at the University of Texas at Dallas", "B.S. in Computer Science", "Incoming SWE Intern @ StateFarm","Ardent Explorer and Hiker","Casual Volleyball Player", "Açaí Enthusiast", "Thanks for reading!"]'
                    ></span>
                </p>
                {/* Socials Section */}
                <div id="socials" className = "socials text-4xl my-6 animate__animated animate__fadeInUp">
                    <a
                        href="https://github.com/nam-t24"
                        target="_blank"
                        rel="noreferrer"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="nam-t24"
                        className = "socialIcon"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/namtruongcs/"
                        target="_blank"
                        rel="noreferrer"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="namtruongcs"
                        className = "socialIcon mx-6"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a 
                        href="mailto:namtruong831@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="namtruong831@gmail.com"
                        className = "socialIcon"
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
            <div className='animate__animated animate__jackInTheBox'>
                <img alt="ProfilePicture" src={PFP} className = "PFP w-64 2xl:w-96 border-2 border-white"/>
            </div>

        </div>
        {/* Home screen for sm-md screens */}
        <div className="lg:hidden inline min-h-screen bg-[#FDFCFF] flex flex-col justify-center items-center content-center">
            <div className='animate__animated animate__jackInTheBox'>
            <img alt="ProfilePicture" src={PFP} className = "PFP sm:w-56 w-40 border-2 border-white"/>
            </div>
            <h1 className="md:text-5xl text-2xl text-center md:my-4 mb-1 mt-4 animate__animated animate__zoomIn font-semibold">Nam Truong</h1>
            {/* Typewriter Section */}
            <p>
            <span className="md:text-2xl text-lg typewrite typeBlink" data-period="1000" data-type='["Student at the University of Texas at Dallas", "B.S. in Computer Science", "Ex-SWE Intern at StateFarm", "Ardent Explorer and Hiker","Casual Volleyball Player", "Açaí Enthusiast", "Thanks for reading!"]'>
                
            </span>
            </p>
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
                    <i className="fab fa-github"></i>
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
                    <i className="fab fa-linkedin"></i>
                </a>
                <a 
                    href="mailto:namtruong831@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="namtruong831@gmail.com"
                >
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>
        {/* About Section */}
        <div id="about" className = "bg-[#1a1c1e] 2xl:py-48 lg:py-32 py-24 overflow-x-hidden overflow-y-hidden">
            <div className='flex lg:flex-row flex-col justify-center items-center wow fadeInRight' data-wow-offset="100">
                <h1 className="xl:text-8xl text-6xl font-bold howdy lg:mr-12 mr-0 py-2 lg:mb-0 mb-8">Howdy!</h1>
                <div name="wrapper" className='z-10 lg:w-1/2 w-11/12'>
                    <div className='bg-[#FDFCFF] w-full p-8 rounded-lg text-[#334155] relative'>
                        {/* Glow */}
                        <div className='2xl:w-[70rem] 2xl:h-[45rem] xl:w-[40rem] xl:h-[40rem] lg:w-[35rem] lg:h-[40rem] w-[40rem] h-[30rem] absolute blueGlow z-[-1] right-16 top-1/2 -translate-y-1/2 translate-x-1/3'></div>
                        <p className="2xl:text-2xl lg:text-xl md:text-base text-sm font-medium z-10">
                            My name is Nam Truong and I am a second year student from the University of Texas
                            at Dallas studying computer science. I created this site to not only
                            highlight my work and accomplishments but to exhibit my
                            growth within computer science.
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
                            <br />
                            <br />
                            When I'm not coding or learning, I enjoy weight training, playing guitar and volleyball,
                            hiking, and creating latte art :)
                        </p>
                        {/* accordion section */}
                            <div className='w-full my-4'>
                                <button className="accordion flex justify-between text-white font-semibold 2xl:w-1/2 lg:w-3/4 md:w-1/2 w-full text-left p-2 lg:text-lg md:text-base text-sm">Hiking Trails Bucket List</button>
                                <div className="panel 2xl:w-1/2 lg:w-3/4 md:w-1/2 w-full px-2 lg:text-base text-sm rounded-b-md">
                                    <ul className='list-disc list-inside'>
                                        <li className=''>The Narrows - Zion Nat. Park, Utah</li>
                                        <li className=''>Angel's Landing - Zion Nat. Park, Utah</li>
                                        <li className=''>Devil's Garden - Arches Nat. Park, Utah</li>
                                        <li className=''>Navajo Loop - Bryce Canyon Nat. Park, Utah</li>
                                        <li className=''>Grinnell Glacier - Glacier Nat. Park, Montana</li>
                                        <li className=''>Sky Pond - Rocky Mt. Nat. Park, Colorado</li>
                                        <li className=''>High Dune - Great Sand Dunes Nat. Park, Colorado</li>
                                        <li className=''>Garfield Peak - Crater Lake Nat. Park, Oregon</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col justify-center items-center wow fadeInLeft lg:mt-32 mt-28' data-wow-offset="100">
                <div name="wrapper" className='z-10 lg:w-1/3 w-11/12 lg:order-1 order-2'>
                    <div id = "toolsNtech" className="toolsNtech bg-[#FDFCFF] w-full rounded-lg flex flex-col items-center lg:p-12 p-8 relative">
                        {/* Glow */}
                        <div className='2xl:w-[60rem] 2xl:h-[35rem] lg:w-[40rem] lg:h-[35rem] w-[30rem] h-[25rem] absolute purpleGlow z-[-1] left-12 top-1/2 -translate-y-1/2 -translate-x-1/3'></div>
                        <div className="icons flex flex-wrap justify-center">
                            <img src={Python} alt="python" className="smallIcon"></img>
                            <img src={Java} alt="java" className="smallIcon"></img>
                            <img src={JS} alt="javascript" className="smallIcon"></img>
                            <img src={TS} alt="typescript" className="smallIcon"></img>
                            <img src={CPP} alt="c++" className="smallIcon"></img>
                            <img src={Ruby} alt="ruby" className="smallIcon"></img>
                            <img src={HTML} alt="html" className="smallIcon"></img>
                            <img src={CSS} alt="css" className="smallIcon"></img>
                            <img src={Tailwind} alt="tailwindcss" className="largeIcon"></img>
                            <img src={react} alt="react" className="smallIcon"></img>
                            <img src={NextJS} alt="nextjs" className="largeIcon"></img>
                            <img src={Rails} alt="rubyonrails" className="largeIcon"></img>
                            <img src={Firebase} alt="firebase" className="smallIcon"></img>
                            <img src={SQL} alt="sql" className="smallIcon"></img>
                            <img src={Terraform} alt="terraform" className="smallIcon"></img>
                            <img src={AWS} alt="aws" className="smallIcon"></img>
                            <img src={Git} alt="git" className="smallIcon"></img>
                            <img src={VSCode} alt="vscode" className="smallIcon"></img>
                            <img src={Terminal} alt="terminal" className="smallIcon"></img>
                        </div>
                    </div>
                </div>
                <h1 id="about" className="xl:text-8xl text-5xl font-bold technologies lg:ml-12 ml-0 py-2 lg:mb-0 mb-8 lg:order-2 order-1">Technologies</h1>
            </div>
        </div>
        {/* Experience Section */}
        <div className='bg-[#141414] 2xl:py-32 md:py-20 py-16 overflow-y-hidden'>
            <h1 className="lg:text-8xl md:text-7xl text-6xl experience font-black mb-4 text-center wow fadeInUp">Experience</h1>
            {/* border */}
            <div className='xl:w-3/5 w-4/5 lg:my-12 my-6 rounded-xl mx-auto experienceBorder lg:pt-8 lg:px-8 md:pt-6 md:px-6 pt-4 px-4 wow fadeInUp'>
                {/* actual content */}
                <div className='w-full h-full bg-[#FDFCFF] rounded-t-xl md:p-8 p-6'>
                    <div className='flex justify-between'>
                        <p className='font-semibold xl:text-4xl md:text-3xl text-xl'>State Farm</p>
                        <p className='xl:text-2xl md:text-xl text-sm text-[#334155]'>May 2022 - Aug 2022</p>
                    </div>
                    <p className='xl:text-2xl md:text-xl text-sm text-[#334155]'>Software Engineering Intern, Research and Development Team</p>
                    <ul className='list-disc list-outside xl:text-2xl md:text-xl text-sm my-2 text-[#334155]'>
                        <li>
                            Designed and constructed an internal State Farm GitLab web scraper to extract repositories/issues pertaining to Research & Development
                        </li>
                        <li>
                            Deployed scraper process within AWS Lambda, SQS, and S3 and implemented AWS infrastructure using Terraform
                        </li>
                        <li>
                            Increased runtime efficiency of scraping 4000+ repositories by 80% by integrating the GitLab API and AWS SQS queues
                        </li>
                    </ul>
                    <div className='xl:text-2xl md:text-xl text-sm text-[#334155]'>Technologies Used: Python, GitLab API, AWS Lambda, AWS SQS, AWS S3, Terraform</div>
                </div>
            </div>
        </div>
        {/* Projects Section */}
        <div id="projects" className="min-h-screen bg-[#FDFCFF] flex flex-col justify-center items-center">
            <div className="md:w-11/12 w-full md:my-16 bg-[#040d21] py-16 px-4 md:rounded-xl">
                <h1 className="lg:text-8xl text-7xl projects font-black mb-8 text-center py-2">Projects</h1>
                {/* Project Cards */}
                <div className="w-full flex flex-wrap justify-center">
                    <ProjectCard
                        path="https://github.com/acm-projects/CookAlong"
                        pic={CookAlong}
                        title="CookAlong"
                        description="Digital sous chef web application for ACM Projects Fall 2020. First place project winner"
                        className = "project wow"
                    />
                    <ProjectCard
                        path="https://github.com/acmutd/hackutd-vii-site"
                        pic={HackUTDVII}
                        title="HackUTD VII"
                        description="Developed HackUTD VII event site with a team of HackUTD technical officers for Spring HackUTD 2021"
                        className = "project wow"
                    />
                    <ProjectCard
                        path="https://github.com/zzeneric/Blink"
                        pic={Blink}
                        title="Blink"
                        description="Real-time video conference platform that mimics an engaging classroom environment using integrated activities for HackDFW 2021"
                        className = "project wow"
                    />
                    <ProjectCard
                        path="https://github.com/acmutd/hackportal-hackutd"
                        pic={HackUTDVIII}
                        title="HackUTD VIII"
                        description="Developed HackUTD VIII event site with a team of HackUTD technical officers for Fall HackUTD 2021"
                        className = "project wow"
                    />
                    <ProjectCard
                        path="https://github.com/acmutd/hackportal"
                        pic={HackPortal}
                        title="HackPortal"
                        description="Hackathon event management platform aimed at assisting hackathon organizers and hackers nationwide"
                        className = "project wow"
                    />
                    <ProjectCard
                        path="https://github.com/acmutd/hackutd-ix-site"
                        pic={HackUTDIX}
                        title="HackUTD IX"
                        description="Developed HackUTD IX event site with a team of HackUTD technical officers for Fall HackUTD 2022"
                        className = "project wow"
                    />
                    <ProjectCard
                        path="https://github.com/raghavpillai/SimpliFarm"
                        pic={SimpliFarm}
                        title="SimpliFarm"
                        description="Constructed a machine learning application to determine optimal water and fertilization usage for farmers"
                        className = "project wow"
                    />
                </div>
                <div className="mt-16 mb-2 text-white text-center lg:text-6xl md:text-5xl text-4xl font-bold">
                    <p className='inline'>
                        Check out the rest of my&nbsp;
                    </p>
                    <p className='projectsSub pb-2 inline'>
                        projects
                    </p>
                </div>
                <div className = "flex justify-center">
                    <Link to="/projecttimeline" className="md:text-2xl text-lg text-center">
                        <p className = "timelineLink md:pb-3 pb-4">➣ view the timeline</p>
                    </Link>
                </div>
            </div>
        </div>
        
        {/* Copyright footer */}
        <div className="w-full md:bg-[#FDFCFF] bg-[#040d21] flex justify-center md:text-black text-white">
            <div className="copyright w-3/5 border-t-1 md:border-Charcoal border-white text-center text-xs p-2">
                © 2021 Nam Truong
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Home;