import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return(
        <div>
            <h1>Microblog</h1>
            <h2>Get in the Rithm of blogging</h2>
            <ul>
            <li><Link to = "/">Blog</Link></li>
            <li><Link to = "/new">Add a new post</Link></li>
            </ul>


        </div>
    )



}

export default Navbar;