import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import Work from './components/Work.jsx';
import SideNav from './components/SideNav.jsx';
import './app.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <SideNav />
                <Switch>
                    <div class='Main'>
                        <Route path='/'>
                            <Header />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/work">
                            <Work />
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
