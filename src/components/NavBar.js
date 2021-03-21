import React from "react";
import { BrowserRouter as Switch,NavLink } from "react-router-dom";
import { Button, withStyles } from "@material-ui/core";
const styles = {
    active: {
        color: '#8db1ab',
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
        background: '#ffffff',
        zIndex: '999',
        height:'5vh',
    }
};
@withStyles(styles)
class NavBar extends React.Component {
    render() {
        return (
            <div>
                    <nav className={this.props.classes.container} id="navBar">
                        <Button component={NavLink} activeClassName={this.props.classes.active} exact to="/">
                        Home
                        </Button>

                        <Button component={NavLink} activeClassName={this.props.classes.active} to="/MyStory">
                        My Story
                        </Button>

                    </nav>

            </div>

        );
    };
}
export default NavBar;