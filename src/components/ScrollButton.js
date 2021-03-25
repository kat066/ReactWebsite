import React from "react"
import "../App.css";
import {makeStyles, IconButton } from '@material-ui/core'
import ArrowDown from '@material-ui/icons/ArrowDropDownCircleOutlined';


const useStyles = makeStyles({
    icon: {
        fontSize: "5vmin",
        transform: props => props.transform,
    },

});
function handleClick(href){
    let topOfElement = document.getElementById(href).offsetTop - document.getElementById("navBar").offsetHeight;
    if (topOfElement < 0) {
        topOfElement = 0;
    }
    window.scroll({ top: topOfElement, behavior: "smooth" });
}

function ScrollButton(props={ href: "", transform: "scaleY(1)",color:"secondary" }) {
    const classes = useStyles(props);

    return (
        <IconButton onClick={handleClick.bind(this, props.href)}>
            <ArrowDown className={classes.icon} color={props.color} />
        </IconButton>

    );
}

export default ScrollButton;