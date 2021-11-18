import React from 'react';
import { HashLink as LinkHash } from 'react-router-hash-link';
import './Home.css';
import Elevator from '../sounds/ElevatorDing.mp3';
import Goteem from '../sounds/goteem.mp3';
function Footer(){

    //Play goteem audio on clik
    let audio = new Audio(Goteem)
    const PlayGottem = () => {
        audio.play()
    }

    return(
        <div id="socials_bottom" className="socials_bottom fixed bottom-0 flex justify-between items-center w-full md:p-4 p-1">
            <div className="socials_left flex lg:flex-row flex-col md:mx-0 mx-3">
                <a
                    href="https://github.com/nam-t24"
                    target="_blank"
                    rel="noreferrer"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="nam-t24"
                    className="lg:text-2xl md:text-xl text-lg"
                >
                    <i class="fab fa-github"></i>
                </a>
                <a 
                    href="https://www.linkedin.com/in/namtruongcs/"
                    target="_blank"
                    rel="noreferrer"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="namtruongcs"
                    className = "lg:mx-6 lg:text-2xl md:text-xl text-lg"
                >
                    <i class="fab fa-linkedin"></i>
                </a>
                <a 
                    href="mailto:namtruong831@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="namtruong831@gmail.com"
                    className = "lg:text-2xl md:text-xl text-lg"
                >
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
            <LinkHash 
                to="#top"
                smooth={true}
                className="up lg:text-5xl text-3xl md:mx-0 mx-1"
            >
                <i class="fa-regular fa-circle-up"></i>
            </LinkHash>
            
        </div>
    );
}

export default Footer;