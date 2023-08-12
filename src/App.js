import React from "react";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
// import "./style.css"


const sectionData = [
    {title: "Skills", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, blanditiis sed! Rerum culpa illum placeat maiores esse sint sequi, exercitationem illo alias dicta blanditiis quas enim eveniet. Dolores voluptatum numquam atque distinctio rem officiis labore cupiditate perferendis, maxime architecto, fugit voluptate doloremque voluptates necessitatibus quo impedit esse vel, eveniet excepturi?"},

    {title: "Experience", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, blanditiis sed! Rerum culpa illum placeat maiores esse sint sequi, exercitationem illo alias dicta blanditiis quas enim eveniet. Dolores voluptatum numquam atque distinctio rem officiis labore cupiditate perferendis, maxime architecto, fugit voluptate doloremque voluptates necessitatibus quo impedit esse vel, eveniet excepturi?"},

    {title: "Education", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, blanditiis sed! Rerum culpa illum placeat maiores esse sint sequi, exercitationem illo alias dicta blanditiis quas enim eveniet. Dolores voluptatum numquam atque distinctio rem officiis labore cupiditate perferendis, maxime architecto, fugit voluptate doloremque voluptates necessitatibus quo impedit esse vel, eveniet excepturi?"}
]






const App = () => {
   

    return(
        <div>
            <Navbar />
            <AboutMe />
             {
                sectionData.map((value)=>(
                       <Section  title={value.title} des={value.des} />
                ))
             }
             {/* {
               a>b? (<h1> Bigger is {a}</h1>) : (<h1>Bigger is {b}</h1>)
             } */}

        </div>
    )
}

export default App;


// in Jsx 
// if else => ternary operator 
// loops => map, filter, reduce => higher order function 