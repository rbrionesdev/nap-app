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
import ProtectedRoute from './Components/ProtectedRoute';
import CreateNap from './Components/CreateNap';
import CalendarWeekly from './Components/CalendarWeekly';
import ScheduledNaps from './Components/ScheduledNaps';
import EditNap from './Components/EditNap';
import { useLocation } from 'react-router';


function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/landing_page' ? null : <NavBar />}

      {/* <NavBar /> */}
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <Route exact path='/' component={Home} />
            <ProtectedRoute exact path='/leaderboard' component={Leaderboard} />
            <ProtectedRoute exact path='/calendarweekly' component={CalendarWeekly} />
            <Route exact path='/landing_page' component={LandingPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/nap/new' component={CreateNap} />
            <Route exact path='/naps' component={ScheduledNaps} />
            <Route exact path='/naps/:id/edit' component={EditNap} />
            <ProtectedRoute exact path='/edit_user' component={EditUser} />
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
