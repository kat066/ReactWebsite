import React from "react";
import "../App.css";
import {Typography, withStyles,} from '@material-ui/core'
import TritonGroup from "../assets/images/Triton.jpg"
import Captioner from "../assets/images/Captioner.jpg"
import Calculator from "../assets/images/Calculator.jpg"
import GameOfLife from "../assets/images/GameOfLife.jpg"
import LFSR from "../assets/images/LFSR.jpg"
import MySite from "../assets/images/MySite.jpg"
import ShowCard from "./ShowCard.js"
import ScrollButton from "../components/ScrollButton"
const styles = {
    container: {
        background: '#2F2F2F',
        maxWidth: '100vw',
        margin: '0px',
    },

}
@withStyles(styles)
class Project extends React.Component {
    render() {
        return (
            <div className="centerFlexCol" style={styles.container}>
                <Typography style={{ color: '#ffcb69', fontWeight: 'bold', letterSpacing: '0.2em', fontSize: '1.5rem', marginTop: '5%' }}>
                    Projects
                </Typography>
                <Typography variant='h6' color='secondary' style={{ fontWeight: 'bolder' }}>
                    Come check out my creation!
                </Typography>
                <div className="centerFlex" >
                    <ShowCard
                        href="https://tritongroups-c26fa.web.app/"
                        type="Web Development"
                        title="Triton Groups"
                        src={TritonGroup}
                    >
                        Triton Groups is a platform made by Tritons, for Tritons.
                        The idea of Triton Groups came about as a response to
                        the COVID-19 pandemic that caused all of us to change
                        how we learn. No longer can we talk to the person next to us
                        in class. The way we socialize, the way we study, the way we
                        network has all changed. Making friends, connections and study
                        mates has become more challenging than ever.
                    </ShowCard>
                    <ShowCard
                        href="https://github.com/kat066/Image-Captioner"
                        type="Deep Learning Network"
                        title="Image Captioner"
                        src={Captioner}
                    >
                        A model that can generate captions for images using an encoder/decoder architecture, 
                        encoding the images into vectors of feature values and passing those vectors through an LSTM network.
                    </ShowCard>
                    <ShowCard
                        href="https://www.youtube.com/watch?v=-tkbBjxO4cc&t=11s"
                        type="C++ project"
                        title="Graphing Calculator"
                        src={Calculator}
                    >
                        Graphing calculator is a C++ program that is able to graph any function in a 2D graph.
                        User is able to zoom in, zoom out, and move around in the graph. I use reverse polish notation
                        and pointers to design this calculator.
                    </ShowCard>
      
                </div>
                <div className="centerFlex">
                    <ShowCard
                        href="https://www.youtube.com/watch?v=QTjq6bjy3jo"
                        type="C++ project"
                        title="Game of Life"
                        src={GameOfLife}
                    >
                        Yes, the classic game, Game Of Life. Game of Life is the first program I designed with graphical user interface!
                        It is a game written in C++ that only has a few rules:
                        Each cell is either alive or dead, and whether it should be set alive or be killed depends on the number of
                        alive neibors it has. A must do project for any new programmer!
                    </ShowCard>
                    <ShowCard
                        href="https://github.com/kat066/ISA"
                        type="Customized Instruction Set Architecture"
                        title="SIPS"
                        src={LFSR}
                    >
                        SIPS, short for seventeen instructions per second, is an 9 bit instruction set
                        architecture optimized to encrypt and decrypt message using LFSR patterns. We make use of
                        a psudo-accumulator (setting one of the operands as a specific registers) to be able to encode 
                        17 different instructions and 8 different registers.
                    </ShowCard>
                    <ShowCard
                        href="/"
                        type="Web Development"
                        title="My personal website"
                        src={MySite}
                    >
                        Aha, this is refers to exactly this site. This is my personal website designed and programmed using
                        React and material UI without the use of any template. In the past, my team always perfers to use template
                        to make things easier, but I prefer to design things from scratch and make customizations. So, everything right
                        here is programmed by myself.
                    </ShowCard>
                </div>
                <div className="centerFlex">
                    <ScrollButton className={this.props.classes.button} href={this.props.hrefUp} transform="scaleY(-1)" color="#212529" />
                    <ScrollButton className={this.props.classes.button} href={this.props.hrefDown} color="#212529" />
                </div>
            </div>   

        );
    }
}

export default Project;