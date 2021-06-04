import React from "react"
import "../App.css";
import { Button,makeStyles} from '@material-ui/core';
import { NavLink,useHistory } from "react-router-dom";

const useStyles = makeStyles({
    active: {
        color: '#6a605c',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        background: '#221e22',
        opacity: '0.8',
        zIndex: '999',
        height: '5vh',
    },
    button: {
        height: '100%',
        fontSize: 'min(3vh,3vw)'
    }
});
async function handleClick(e, href, to, history) {
    e.preventDefault();
    await history.replace(to);
    let topOfElement = document.getElementById(href).offsetTop - document.getElementById("navBar").offsetHeight;
    if (topOfElement < 0) {
        topOfElement = 0;
    }
    window.scroll({ top: topOfElement, behavior: "smooth" });
}
function handleActive(isActive) {
    return isActive;
}
function MenuButton(props = { href: "", to: "/", isActive: false }) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Button component={NavLink} activeClassName={classes.active} className={classes.button} exact to={props.to}
            onClick={(e) => { handleClick(e, props.href, props.to, history) }}
            isActive={handleActive.bind(props.isActive)}>
            {props.children}
        </Button>

    );
}

export default MenuButton;