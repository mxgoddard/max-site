import React from 'react';
import '../styles/SideNav.css';

class SideNav extends React.Component {
    render() {
        return (
            <div class="SideNav">
                <a href="#home1">
                    <div class="SideNavHeader">
                        <p>Max Goddard</p>
                    </div>
                </a>
                <div class="SideNavMain">
                    <a href="#home1">About Me</a>
                    <a href="#home2">Projects</a>
                    <a href="#home3">Work</a>
                    <a href="#home4">Contact</a>
                </div>
            </div>
        )
    }
}

// function SideNav() {
//     return (

//     )
// }

export default SideNav;