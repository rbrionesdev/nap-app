import './App.css';
import NavBar from './Components/Navbar';
import { Route, Switch } from 'react-router';
import { Container } from 'semantic-ui-react'
import Home from './pages/Home';
import Things from './pages/Things';
import ComponentExample from './Components/ComponentExample';
import NoMatch from './Components/NoMatch';
import Login from './pages/Login';
import Register from './pages/Register';
import FetchUser from './Components/FetchUser';
import ProtectedRoute from './Components/ProtectedRoute';
import Restaurant from './Components/Restaurant';
import Restaurants from './pages/Restaurants';

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path='/' component={Home}/>    
            <ProtectedRoute exact path='/things' component={Things}/>
            <Route exact path='/components' component={ComponentExample}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/restaurants' component={Restaurants}/>
            <Route component={NoMatch}/>
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
