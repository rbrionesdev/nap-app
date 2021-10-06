import './App.css';
import NavBar from './Components/Navbar';
import { Route, Switch } from 'react-router';
import { Container } from 'semantic-ui-react'
import Home from './pages/Home';
import Things from './pages/Things';
import NoMatch from './Components/NoMatch';
import Login from './Components/Login';
import Register from './Components/Register';
import FetchUser from './Components/FetchUser';
import ProtectedRoute from './Components/ProtectedRoute';
import EditUser from './Components/EditUser';

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <ProtectedRoute exact path='/things' component={Things} />
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
