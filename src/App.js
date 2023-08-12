import React from "react";
import Navbar from "./Component/Navbar"
import AboutMe from "./Component/AboutMe"
import Section from "./Component/Section"
// import "./style.css"
import sectionData from "./datas/sectionData"
import Footer from "./Component/Footer"







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

             <Footer />

        </div>
    )
}

export default App;


// in Jsx 
// if else => ternary operator 
// loops => map, filter, reduce => higher order function 