import React from "react";
import { withRouter,NavLink  } from "react-router-dom";
import { withStyles, Button} from "@material-ui/core";
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
        width: '100vw',
        background: '#221e22',
        opacity: '0.8',
        zIndex: '999',
        height:'5vh',
    },
    button: {
        height: '100%',
        fontSize: 'min(3vh,3vw)'
    }
};


@withStyles(styles)
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            pathname: this.props.history.location.pathname,
            homeButton: true,
            aboutButton: false,
            projectButton: false,
            storyButton: false,
            footerButton: false,
        }
    }
    
    handleScroll() {
        clearTimeout(this.f);
        this.f = setTimeout(this.UpdateNavBar.bind(this), 100);

    }
    UpdateNavBar() {
        let halfOffSet = window.innerHeight / 2;
        if (this.props.firstPage.includes(this.state.pathname)) {
            if ((document.getElementById("footer").offsetTop - document.getElementById("navBar").offsetHeight - window.pageYOffset) <= halfOffSet) {
                this.props.history.replace('/footer', { activeNav: '/footer' });
                this.setState({
                    homeButton: false,
                    aboutButton: false,
                    projectButton: false,
                    storyButton: false,
                    footerButton: true,
                });
            } else if ((document.getElementById("project").offsetTop - document.getElementById("navBar").offsetHeight - window.pageYOffset) <= halfOffSet) {
                this.props.history.replace('/project', { activeNav: '/project' });
                this.setState({
                    homeButton: false,
                    aboutButton: false,
                    projectButton: true,
                    storyButton: false,
                    footerButton: false,
                });
            }else if ((document.getElementById("about").offsetTop - document.getElementById("navBar").offsetHeight - window.pageYOffset) <= halfOffSet ) {
                this.props.history.replace('/about', { activeNav: '/about' });
                this.setState({
                    homeButton: false,
                    aboutButton: true,
                    projectButton: false,
                    storyButton: false,
                    footerButton: false,
                });
            }else {
                this.props.history.replace('/', { activeNav: '/' });
                this.setState({
                    homeButton: true,
                    aboutButton: false,
                    projectButton: false,
                    storyButton: false,
                    footerButton: false,
                });
            }
        } else {

            this.setState({
                homeButton: false,
                aboutButton: false,
                projectButton: false,
                storyButton: true,
                footerButton: false,
            });
        }
    }
    UpdateNavBarOnRender() {
        if (this.props.firstPage.includes(this.state.pathname)) {
                this.setState({
                    homeButton: true,
                    aboutButton: false,
                    projectButton: false,
                    footerButton: false,
                    storyButton: false,
                    
                });
        } else {
            this.setState({
                homeButton: false,
                aboutButton: false,
                projectButton: false,
                footerButton: false,
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
                        About
                    </MenuButton>
                    <MenuButton href="project" to="/project" isActive={this.state.projectButton}>
                        Project
                    </MenuButton>
                    <MenuButton href="footer" to="/footer" isActive={this.state.footerButton}>
                        Contact
                    </MenuButton>
{/*                    <Button component={NavLink} activeClassName={this.props.classes.active} className={this.props.classes.button} to="/Blog" isActive={(()=> {return this.state.storyButton})}>
                            Blog
                    </Button>*/}
                    
                </nav>
                
            </div>

        );
    };
}
NavBar.defaultProps = { firstPage: ["/", "/about", "/project", "/footer"]}
export default withRouter(NavBar);