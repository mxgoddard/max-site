import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SideNav from './components/NavBar';
import './styles/App.scss';

function App() {
    return (
        <Router>
            <div className='App'>
                <SideNav />
                <Switch>
                    <div className='Main'>
                        {/* <Route path='/'>
                            <Header />
                        </Route> */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/experience">
                            <Experience />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </div>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
