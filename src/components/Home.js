import React from "react";
import PFP from '../images/pfp.jpg';
import './Home.scss';
import './Home.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
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
import Terminal from '../images/icons/terminal.jpg';


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

    //type writer
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
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    

    return(
        <>
        <Navbar/>
        <div className="min-h-screen bg-gradient-to-b from-EnglishLavender to-PastelPink flex flex-col justify-center items-center content-center" onload = "typewrite()">
            <img alt="ProfilePicture" src={PFP} className = "PFP sm:w-56 w-40 border-2 border-white"/>
            <div className="md:text-5xl text-2xl text-center md:my-4 mb-1 mt-4">Nam Truong</div>
            {/* typewriter section */}
            <div className="md:text-2xl text-lg typewrite" data-period="1000" data-type='["Student at the University of Texas at Dallas", "B.S. in Computer Science", "Ardent Explorer and Hiker","Casual Volleyball Player", "Açaí Enthusiast", "Thanks for reading!"]'>
                <span class="wrap" ></span>
            </div>
            {/* Socials section */}
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
        {/* about section */}
        <div className="about bg-gradient-to-b from-PastelPink to-white flex justify-center">
            <div className="md:my-40 my-32 md:w-3/5 w-4/5 flex flex-col items-center justify-center">
                <div id="about" className="md:text-4xl text-3xl my-4">Howdy!</div>
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
        <div className="bg-white flex justify-center">
            <div className="tech md:w-3/5 w-4/5 border-2 rounded-lg border-OldLavender hover:border-Melon flex flex-col items-center p-4">
                <div className="md:text-4xl text-3xl md:mb-4 mb-2">Tools and Technologies</div>
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
        <Footer/>
        </>
    );
}

export default Home;