import React from "react"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import MainPage from '../routes/MainPage'
import MyStory from '../routes/MyStory'
import { Button, withStyles} from "@material-ui/core"
const styles = {
    active: {
        color: '#8db1ab',
    }
};
@withStyles(styles)
class NavBar extends React.Component {
        return (
            <Router>
                <div>
                <nav>
                    <Button component={NavLink} activeClassName={this.props.classes.active} exact to="/">
                            Home
                        </Button>

                    <Button component={NavLink} activeClassName={this.props.classes.active} to="/MyStory">
                            MyStory
                        </Button>     
                    </nav>
                    <Switch>

                        <Route path="/MyStory">
                            <MyStory />
                        </Route>
                        <Route path="/">
                            <MainPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
}
export default NavBar;