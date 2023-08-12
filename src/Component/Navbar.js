
import React from "react";
// import "../style.css"


const Navbar = () => {

    return(
        <nav className="navbar">
            <h1> Pushpendra Chaudhary </h1>
            <div className="menu">
                <a href="home"> Home </a>
                <a href="About"> About </a>
                <a href="Contact"> Contact </a>
                <a href="Blog"> Blog </a>
                <a href="Qualification"> Qualifiction </a>

            </div>
        </nav>
    )
}

export default Navbar;