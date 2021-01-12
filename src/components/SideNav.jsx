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
                    <a href="#home1">Home1</a>
                    <a href="#home2">Home2</a>
                    <a href="#home3">Home3</a>
                    <a href="#home4">Home4</a>
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