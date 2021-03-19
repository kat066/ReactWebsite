import { MuiThemeProvider } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from './theme';
import './App.css';
import Root from './routes/Root'

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Root/>
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
