import React from 'react';
import './css/ProjectTimeline.css';
import './css/ProjectTimeline.scss';
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
            <div className = "flex justify-center">
              <div className="container lg:max-w-2/5">
                <div className="wrapper">
                  <h1 className = "title"> Project Timeline</h1>
                  <ul className="sessions">
                    <li className='list'>
                      <div className="time">2021 - currrent</div>
                      <div className="projectTitle">
                        HackPortal
                        <a
                          href="https://github.com/acmutd/hackportal"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="HackPortal"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">
                          A streamlined hackathon event management platform aimed at assisting hackathon organizers and hackers nationwide.
                          Features hacker registration, log-in, qr code check-in, and hackathon information.
                      </p>
                    </li>
                    <li className='list'>
                      <div className="time">2022</div>
                      <div className="projectTitle">
                        HackUTD IX Website
                        <a
                          href="https://github.com/acmutd/hackutd-ix-site"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="HackUTD IX"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">
                        Event website for the 9th iteration of HackUTD, utilizing parts of HackPortal. Reached 1000+ applicants.
                      </p>
                    </li>
                    <li className='list'>
                      <div className="time">2021</div>
                      <div className="projectTitle">
                        HackUTD VIII Website
                        <a
                          href="https://github.com/acmutd/hackportal-hackutd"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="HackUTD VIII"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">Event website for the 8th iteration of HackUTD, utilizing parts of HackPortal. Reached 800+ hackathon users and 1000+ applicants.</p>
                    </li>
                    <li className='list'>
                      <div className="time">2021</div>
                      <div className="projectTitle">
                        Mind Reader Game - CS2340 Computer Architecture
                        <a
                          href="https://github.com/nartmobile/MindReaderGame"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="MindReaderGame"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">
                        Simple number guessing game built using MIPS. 
                      </p>
                    </li>
                    <li className='list'>
                      <div className="time">2021</div>
                      <div className="projectTitle">
                        Blink - HackDFW
                        <a
                          href="https://github.com/zzeneric/Blink"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Blink"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">
                        Real-time video conference platform that mimics an in-person engaging classroom environment.
                        Uses integrated activites such as instant teacher dm, quizzes, and question checkups.
                        Aimed at bridging the gap between in-person and online classroom experiences.
                      </p>
                    </li>
                    <li className='list'>
                      <div className="time">2021</div>
                      <div className="projectTitle">
                        AppAcademy Projects
                        <a
                          href="https://github.com/nam-t24/AppAcademy"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="AppAcademy"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">
                        Projects done for AppAcademy Open, an online full-stack bootcamp. Contains projects using Ruby, Ruby on Rails, SQL, PostgreSQL, SQLite, and more. 
                      </p>
                    </li>
                    <li className='list'>
                      <div className="time">2021</div>
                      <div className="projectTitle">
                        Chess
                        <a
                          href="https://github.com/nam-t24/Chess"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Chess"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">
                        Chess game built using Ruby. Features game saving through YAML, move assist, and cursor input through keyboard. 
                      </p>
                    </li>
                    <li className='list'>
                      <div className="time">2021</div>
                      <div className="projectTitle">
                        Minesweeper
                        <a
                          href="https://github.com/nam-t24/Minesweeper"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Minesweeper"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">
                        Minesweeper game built using Ruby. Features game saving through YAML.
                      </p>
                    </li>
                    <li className='list'>
                      <div className="time">2021</div>
                      <div className="projectTitle">
                        Minos' Quest - TamuHack
                        <a
                          href="https://github.com/KevinCai319/TAMUHacks2021"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Minos'Quest"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">
                        Real-time multiplayer tile based labrynth game using Processing.
                      </p>
                    </li>
                    <li className='list'>
                      <div className="time">2021</div>
                      <div className="projectTitle">
                        HackUTD VII Website
                        <a
                          href="https://github.com/acmutd/hackutd-vii-site"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="HackUTD VII"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">Event website for the 7th iteration of HackUTD. Used plain html, css, js. </p>
                    </li>
                    <li className='list'>
                      <div className="time">2020</div>
                      <div className="projectTitle">
                        Typer
                        <a
                          href="https://github.com/nam-t24/Typer"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Typer"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">Site to test typing speed using quotes API generator to generate text. Features light and pastel theme options. Used plain html, css, js.</p>
                    </li>
                    <li className='list'>
                      <div className="time">2020</div>
                      <div className="projectTitle">
                        CookAlong - ACM Projects
                        <a
                          href="https://github.com/acm-projects/CookAlong"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="CookAlong"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">
                        Digital sous chef web application that allows users to search for recipes and to be guided through desired recipe hands free using text-speech and speech-text functionalities. 
                        Implemented web-speech API for speech functionalities. Won first place project.</p>
                    </li>
                    <li className='list'>
                      <div className="time">2020</div>
                      <div className="projectTitle">
                        First Personal Site
                        <a
                          href="https://github.com/nam-t24/namtruong"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="PersonalSiteV1"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">Very first site I've created. Purpose was to learn about web development and React.</p>
                    </li>
                    <li className='list'>
                      <div className="time">2020</div>
                      <div className="projectTitle">
                        Tobor's Treasure Troph - HackUTD GameJame
                        <a
                          href="https://github.com/KendalUTD/GamerJamProject"
                          target="_blank"
                          rel="noreferrer"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Tobor's Treasure Troph"
                          className = "githubIcon mx-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <p className = "projectDesc">3D puzzle and adventure game created through Unity.</p>
                    </li>
                  </ul>
                </div>
              </div> 
              
            </div>
            {/* Socials Section */}
            <div className = "text-3xl pb-4 z-50 flex justify-center">
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
                className = "mx-6 socialIcon"
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
        </>
    );
}

export default ProjectTimeline;