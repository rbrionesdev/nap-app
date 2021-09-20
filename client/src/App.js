import './App.css';
import NavBar from './Components/Navbar';
import { Route, Switch } from 'react-router';
import { Container } from 'semantic-ui-react'
import Home from './pages/Home';
import Things from './pages/Things';
import ComponentExample from './Components/ComponentExample';

function App() {
  return (
    <>
      <NavBar />
      <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/things' component={Things}/>
        <Route exact path='/components' component={ComponentExample}/>
      </Switch>
      </Container>
    </>
  );
}

export default App;
