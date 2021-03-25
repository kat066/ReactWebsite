import React from "react"
import "../App.css";
import { withStyles, Avatar} from '@material-ui/core'
import profile from "../assets/images/avatar.jpg"
import ScrollButton from "../components/ScrollButton"
import Hexagon from "./Hexagon"
const styles = {
    avatar: {
        height: '8vw',
        width: '8vw',
        margin: '2vh',
    },
    button: {
        position: 'absolute',
        marginTop: '100vh',
        top:'100vh',
    }
};

@withStyles(styles)
class About extends React.Component {
    render() {

        return (
            <div className="centerFlex" id="about" style={{ backgroundColor: "black"}}>
                <Avatar src={profile} className={this.props.classes.avatar} />
                <Hexagon strength={{ c: 1, python: 0.8, java: 0.9, verilog: 0.8, js: 0.9, others: 0.7 }}/>
                <ScrollButton className={this.props.classes.button} href={this.props.href} transform="scaleY(-1)" color="primary"/>
            </div>
        );
    }

}

export default About;