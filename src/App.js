import { MuiThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import NavBar from './components/NavBar'
import {Switch, Route} from "react-router-dom"
import MainPage from "./routes/MainPage"
import Blog from "./routes/Blog.js"


function App() {

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
                <NavBar />
            <Switch>
                <Route exact path="/blog">
                    <Blog />
                </Route>
                <Route exact path={["/", "/home", "/about","/project","/footer"]}>
                    <MainPage/>
                </Route>

            </Switch>
        </MuiThemeProvider>
/*    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}


export default App;
