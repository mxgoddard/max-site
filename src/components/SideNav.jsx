import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideNav.css';

class SideNav extends React.Component {
    render() {
        return (
            <div className='SideNav'>
                <div className='SideNavHeader'>
                    <Link to='/'>
                        <p>Max Goddard</p>
                    </Link>
                </div>
                <nav>
                    <div className='SideNavMain'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About Me</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/work'>Work</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default SideNav;