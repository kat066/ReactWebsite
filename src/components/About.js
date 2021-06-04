import React from "react"
import "../App.css";
import { withStyles, Avatar, Typography} from '@material-ui/core'
import profile from "../assets/images/avatar.jpg"
import ScrollButton from "../components/ScrollButton"
import Hexagon from "./Hexagon"
const styles = {
    avatar: {
        height: '15vw',
        width: '15vw',
        margin: '2vh',
    },
    button: {
        position: 'absolute',
        marginTop: '100vh',
        top: '100vh',
    },
    category: {
        color: '#B8BDB5',
        fontWeight: 'bold',
        fontSize: ' 1rem',
        letterSpacing: '0.2em',
        opacity: '0.7',
        margin: '5%'
    },
    content: {
        color: '#E0E2DB',
        fontWeight: 'bold',
        fontSize: '1rem',
        letterSpacing: '0.1em'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: ' 1.5rem',
        letterSpacing: '0.1em',
    },
    intro: {
        color: '#B8BDB5',
        fontSize: '1rem',
        lineHeight: '2',
        
    },
    propIntro: {
        color: '#D2D4C8',
        fontSize: ' 1rem',
        lineHeight: '2', 
        alignSelf: 'center',
    },
    centerSelf: {
        alignSelf: 'center'
    }
};

@withStyles(styles)
class About extends React.Component {
    render() {

        return (
            <div className="centerFlexCol" style={{ backgroundColor: "black",  margin: 'auto',}}>
                <Typography style={{ color: '#6a605c', fontWeight: 'bold', letterSpacing: '0.2em' ,fontSize: '1.2rem', marginTop: '5%' }}>
                    About
                </Typography>
                <Typography variant='h6' color= 'primary' style={{ fontWeight: 'bold' }}>
                    Hey,This is me!
                </Typography>
                <div style={{ marginLeft: '15%', marginRight: '15%' }}>
                    <div className="centerFlex">
                        <Avatar src={profile} className={this.props.classes.avatar} style={styles.centerSelf} />
                        <div style={{ width: '450px'}}>
                            <Typography style={styles.intro}>
                                I'm a 4th undergradaute majoring in Computer Science
                                in University of California, San Deigo.
                                My interest lies in using computer programming
                                to solve problems once and for all.
                            </Typography>
                        </div>
                        
                    </div>
                    
                </div>
                
                <div className="centerFlex">
                    <div className="centerFlexCol">
                        <Typography color='primary' style={styles.heading}>
                            PROFILE
                        </Typography>

                        <Typography style={styles.propIntro}>
                            Currently, I'm seeking a software engineering internship position 
                            perferbly in California. If you think I'm a good fit, 
                            please contact me via&nbsp;
                            <a href="mailto:kevint02221999@gmail.com" style={{ color: '#5F7470', fontSize: ' 1rem', textDecorationLine: 'none' }}>
                                kevint02221999@gmail.com
                            </a>
                        </Typography>
                        <Typography style={styles.category}>
                            FULLNAME:
                        </Typography>
                        <Typography style={styles.content}>
                            Kaiwen Tan
                        </Typography>
                        <Typography style={styles.category}>
                            BIRTHDAY:
                        </Typography>
                        <Typography style={styles.content}>
                            February 22, 1999
                        </Typography>
                        <Typography style={styles.category}>
                            EMAIL:
                        </Typography>
                        <Typography style={styles.content}>
                            Kevint02221999@gmail.com
                        </Typography>
                    </div>
                    <div className="centerFlexCol">
                        <Typography color='primary' style={styles.heading}>
                            POWER LEVEL
                        </Typography>
                        <Typography style={styles.propIntro}>
                            I'm an independent teamworker strong in quick-learing and solving problems. 
                            I am most familiar with C++, but I can also pick up other languages in a short time.
                            Below is the power levels of some of my technical skills:
                        </Typography>
                        <Hexagon strength={{ c: 1, python: 0.8, java: 0.9, verilog: 0.8, js: 0.9, others: 0.7 }} />
                    </div>
                </div>
                <div className="centerFlex">
                    <div>
                        <ScrollButton className={this.props.classes.button} href={this.props.hrefUp} transform="scaleY(-1)" color="#ffffff" />
                        <ScrollButton className={this.props.classes.button} href={this.props.hrefDown} color="#ffffff" />
                    </div>
                    
                </div>
                
            </div>
        );
    }

}

export default About;