import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Committee from './components/Committee'
import Papers from './components/Papers'
import Dates from './components/Dates'
import Workshops from './components/Workshops'
import Registration from './components/Registration'
import Contact from './components/Contact'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/committee">
            <Committee />
          </Route>
          <Route exact path="/papers">
            <Papers />
          </Route>
          <Route exact path="/dates">
            <Dates />
          </Route>
          <Route exact path="/workshops">
            <Workshops />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;