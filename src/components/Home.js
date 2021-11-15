import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className = "bg-blue-200 w-3/4">
            <Link to="/resume">RESUME</Link>
        </div>
    );
}

export default Home;