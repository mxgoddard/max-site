import React, { Component } from 'react';
import '../styles/NavBar.css';
import '../app.css';

class NavBar extends Component {

    state = {
        text: "Welcome to my site! - Max"
    }

    render() {
        return (
            <div className="topnav">
                <a href="#home">Home</a>
                <a href="#home2">Home2</a>
                <a href="#home3">Home3</a>
                {/* <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#resume">Résumé</a>
                <a href="#contact">Contact</a> */}
            </div>
        )
    }

    componentDidMount(){
        console.log(this.state.text);
    };
}

export default NavBar;
