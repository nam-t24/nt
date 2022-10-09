import React from 'react';
import './css/Home.css';

function ProjectCard(props){

    return(
        <a href={props.path} target="_blank" rel="noreferrer">
            <div id = "project" className="project flex flex-col rounded-md w-72 min-h-22rem lg:my-4 my-2 lg:mx-8 mx-2 wow fadeIn" data-wow-offset="125">
                <div className="">
                    <img src={props.pic} alt="ProjectPic" className="rounded-t-sm"></img>
                </div>
                <div className="p-3">
                    <h1 className="text-2xl my-3">{props.title}</h1>
                    <div>{props.description}</div>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;