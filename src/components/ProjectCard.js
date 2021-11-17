import React from 'react';
import './Home.css';

function ProjectCard(props){
    return(
        <a href={props.path} target="_blank" rel="noreferrer">
            <div className="project border-2 rounded-md border-OldLavender w-72 min-h-22rem lg:my-4 my-2 lg:mx-4 mx-2">
                <div className="">
                    <img src={props.pic} alt="ProjectPic" className="rounded-t-sm"></img>
                </div>
                <div className="p-3">
                    <div className="text-2xl my-3">{props.title}</div>
                    <div>{props.description}</div>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;