import React from "react";
import { NavLink, withRouter} from "react-router-dom";
import { Button, withStyles } from "@material-ui/core";
import MenuButton from "./MenuButton"
const styles = {
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
        height:'5vh',
    },
    button: {
        maxHeight: '100%',
    }
};


@withStyles(styles)
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            pathname: "/",
            homeButton: true,
            aboutButton: false,
            storyButton:false,
        }
    }
    
    handleScroll() {
        clearTimeout(this.f);
        this.f = setTimeout(this.UpdateNavBar.bind(this), 100);

    }
    UpdateNavBar() {
        let halfOffSet = window.innerHeight / 2;
        if (this.props.firstPage.includes(this.state.pathname)) {
            if ((document.getElementById("about").offsetTop - document.getElementById("navBar").offsetHeight - window.pageYOffset) <= halfOffSet ) {
                this.props.history.replace('/about', { activeNav: '/about' });
                this.setState({
                    homeButton: false,
                    aboutButton: true,
                    storyButton: false,
                });
            } else {
                this.props.history.replace('/', { activeNav: '/' });
                this.setState({
                    homeButton: true,
                    aboutButton: false,
                    storyButton: false,
                });
            }
        } else {

            this.setState({
                homeButton: false,
                aboutButton: false,
                storyButton: true,
            });
        }
    }
    UpdateNavBarOnRender() {
        if (this.props.firstPage.includes(this.state.pathname)) {
                this.setState({
                    homeButton: true,
                    aboutButton: false,
                    storyButton: false,
                });
        } else {
            this.setState({
                homeButton: false,
                aboutButton: false,
                storyButton: true,
            });
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentDidUpdate(prevProps, previousState) {
        if (previousState.pathname !== this.props.history.location.pathname) {
            this.setState({ pathname: this.props.history.location.pathname });
            this.UpdateNavBarOnRender();
        }
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    f = null;
    render() {
        
        return (
            <div>
                <nav className={this.props.classes.container} id="navBar" >
                    <MenuButton href="home" to="/" isActive={this.state.homeButton}>
                        Home
                    </MenuButton>
                    <MenuButton href="about" to="/about" isActive={this.state.aboutButton}>
                        about
                    </MenuButton>
                    <Button component={NavLink} activeClassName={this.props.classes.active} className={this.props.classes.button} to="/MyStory" isActive={(()=> {return this.state.storyButton})}>
                            My Story
                    </Button>
                    
                    </nav>
            </div>

        );
    };
}
NavBar.defaultProps = { firstPage: ["/","/about"]}
export default withRouter(NavBar);