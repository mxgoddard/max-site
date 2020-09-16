import React from 'react';
import NavBar from './components/NavBar.jsx';
// import Personal from './components/Personal.jsx';
// import About from './components/About.jsx';
// import Contact from './components/Contact.jsx';
import Markdown from './components/Markdown.jsx';
import './app.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            {/* <Personal /> */}
            {/* <About /> */}
            {/* <Contact /> */}
            <Markdown />
        </div>
    );
}

export default App;
