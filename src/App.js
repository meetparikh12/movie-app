import React from 'react';
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Layout/Navbar';
import {ThemeProvider as MuiThemeProvider}  from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import LatestMovies from './pages/Movies/LatestMovies';
import NowPlayingMovies from './pages/Movies/NowPlayingMovies';
import UpcomingMovies from './pages/Movies/UpcomingMovies';
import AllMovies from './pages/Movies/AllMovies';
import MovieDetails from './pages/Movies/MovieDetails/MovieDetails';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    }
  }
});
function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={AllMovies}/>
                <Route path='/movie/latest' component={LatestMovies}/>
                <Route path='/movie/now-playing' component={NowPlayingMovies}/>
                <Route path='/movie/upcoming' component={UpcomingMovies}/>
                <Route path='/movie/details/:movieId' component={MovieDetails}/>
                <Redirect to="/"/>
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
  );
}

export default App;
