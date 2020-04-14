import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

    state = {
        text: "Welcome to my site! - Max"
    }

    render() {
        return (
            <div className="topnav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#resume">Résumé</a>
                <a href="#contact">Contact</a>
            </div>
        )
    }

    componentDidMount(){
        console.log(this.state.text);
    };
}

export default NavBar;
