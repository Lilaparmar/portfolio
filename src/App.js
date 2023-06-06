import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
          <Navbar />        
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Skills">
                <Skills />
              </Route>
              <Route exact path="/Projects">
                <Projects />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
            </Switch>
        </Router>
    </>
  );
}

export default App;
