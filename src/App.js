import React from 'react';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
// import NavBar from './components/NavBar.jsx';
import Personal from './components/Personal.jsx';
import SideNav from './components/SideNav.jsx';
import './app.css';

function App() {
    return (
        <div className="App">
            {/* <NavBar /> */}
            <SideNav />
            <div class="Main">
                <Personal />
                <About />
                <Contact />
            </div>
        </div>
    );
}

export default App;
