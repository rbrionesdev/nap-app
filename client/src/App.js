import './StyleSheets/App.css'
import NavBar from './Components/Navbar';
import { Route, Switch } from 'react-router';
import { Container } from 'semantic-ui-react'
import Home from './pages/Home';
import NoMatch from './Components/NoMatch';
import Login from './Components/Login';
import Register from './Components/Register';
import FetchUser from './Components/FetchUser';
import EditUser from './Components/EditUser'
import Leaderboard from './pages/Leaderboard';
import LandingPage from './pages/LandingPage';
import About from './pages/About';

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/leaderboard' component={Leaderboard} />
            <Route exact path='/landing_page' component={LandingPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/edit_user' component={EditUser} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
