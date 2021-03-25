import React from "react"
import "../App.css";
import {withStyles} from '@material-ui/core'
import Home from "../components/Home"
import About from "../components/About"
const styles = {
    avatar: {
        height: '8vw',
        width: '8vw',
        margin: '2vh',
    },

};



@withStyles(styles)
class MainPage extends React.Component {
    
    render() {
        return (
            <div id="container">
                <section id="home">
                    <Home href="about"/> 
                </section>
                <section id="about">
                    <About href="home"/>
                </section>
                <h1>abc</h1>
                <div className="centerAbout">
                </div>
                <div className="centerAbout">
                </div>
                <div className="centerAbout">
                </div>
            </div>

        );
    }
    
}

export default MainPage;
