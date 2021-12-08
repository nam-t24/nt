import React from 'react';
import './css/ProjectTimeline.css';
import './css/ProjectTimeline.scss';
import { Link } from "react-router-dom";
import HomeButton from '../images/N.png';
import $ from 'jquery';

function ProjectTimeline(){

    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });

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
                            <li>
                              <div className="time">2021 - currrent</div>
                              <div className="time">HackPortal</div>
                              <p className = "projectDesc">
                                  A streamlined hackathon event management platform aimed at assisting hackathon organizers and hackers nationwide
                                  Features hacker registration, log-in, qr code check-in, and hackathon information.
                              </p>
                            </li>
                            <li>
                              <div className="time">2021</div>
                              <div className="time">HackUTD VIII Website</div>
                              <p className = "projectDesc">Event website for the 8th iteration of HackUTD, utilizing parts of HackPortal. Reached 800+ hackathon users and 1000+ applicants</p>
                            </li>
                            <li>
                              <div className="time">2021</div>
                              <div className="time">MindReader Game - CS2340 Computer Architecture</div>
                              <p className = "projectDesc">
                                Simple number guessing game built using MIPS. 
                              </p>
                            </li>
                            <li>
                              <div className="time">2021</div>
                              <div className="time">Blink - HackDFW</div>
                              <p className = "projectDesc">
                                Real-time video conference platform that mimics an in-person engaging classroom environment.
                                Uses integrated activites such as instant teacher dm, quizzes, and question checkups.
                                Aimed at bridging the gap between in-person and online classroom experiences.
                              </p>
                            </li>
                            <li>
                              <div className="time">2021</div>
                              <div className="time">AppAcademy Projects</div>
                              <p className = "projectDesc">
                                Projects done for AppAcademy Open, an online full-stack bootcamp. Contains projects using Ruby, Ruby on Rails, SQL, PostgreSQL, SQLite, and more. 
                              </p>
                            </li>
                            <li>
                              <div className="time">2021</div>
                              <div className="time">Chess</div>
                              <p className = "projectDesc">
                                Chess game built using Ruby. Features game saving through YAML, move assist, and cursor input through keyboard. 
                              </p>
                            </li>
                            <li>
                              <div className="time">2021</div>
                              <div className="time">Minesweeper</div>
                              <p className = "projectDesc">
                                Minesweeper game built using Ruby. Features game saving through YAML.
                              </p>
                            </li>
                            <li>
                              <div className="time">2021</div>
                              <div className="time">Minos' Quest - TamuHack</div>
                              <p className = "projectDesc">
                                Real-time multiplayer tile based labrynth game using Processing.
                              </p>
                            </li>
                            <li>
                              <div className="time">2021</div>
                              <div className="time">HackUTD VII Website</div>
                              <p className = "projectDesc">Event website for the 7th iteration of HackUTD. Used plain html, css, js. </p>
                            </li>
                            <li>
                              <div className="time">2020</div>
                              <div className="time">Typer</div>
                              <p className = "projectDesc">Site to test typing speed using quotes API generator to generate text. Features light and pastel theme options. Used plain html, css, js.</p>
                            </li>
                            <li>
                              <div className="time">2020</div>
                              <div className="time">CookAlong - ACM Projects</div>
                              <p className = "projectDesc">
                                Digital sous chef web application that allows users to search for recipes and to be guided through desired recipe hands free using text-speech and speech-text functionalities. 
                                Implemented web-speech API for speech functionalities. Won first place project</p>
                            </li>
                            <li>
                              <div className="time">2020</div>
                              <div className="time">First Personal Site</div>
                              <p className = "projectDesc">Very first site I've created. Purpose was to learn about web development and React.</p>
                            </li>
                            <li>
                              <div className="time">2020</div>
                              <div className="time">Tobor's Treasure Troph - HackUTD GameJame</div>
                              <p className = "projectDesc">3D puzzle and adventure game created through Unity.</p>
                            </li>
                          </ul>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
}

export default ProjectTimeline;