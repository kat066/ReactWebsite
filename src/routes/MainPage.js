import React from "react"
import "../App.css";
import Home from "../components/Home"
import About from "../components/About"
import Project from "../components/Project"
import Footer from "../components/Footer"


class MainPage extends React.Component {
    
    render() {
        return (
            <div id="container">
                <section id="home">
                    <Home href="about"/> 
                </section>
                <section id="about" >
                    <About hrefUp="home" hrefDown="project"/>
                </section>
                <section id="project" >
                    <Project hrefUp="about" hrefDown="footer"/>
                </section>
                <section id="footer" >
                    <Footer hrefUp="project"/>
                </section>
{/*                <div className="centerAbout">
                </div>
                <div className="centerAbout">
                </div>
                <div className="centerAbout">
                </div>*/}
            </div>

        );
    }
    
}

export default MainPage;
