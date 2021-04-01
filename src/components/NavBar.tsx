import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';

class NavBar extends React.Component {
    render() {
        return (
            <div className='NavBarContainer'>
                <div className="NavBarLeft">
                    <Link to='/'>
                        <span>Max</span>
                        <span>Goddard</span>
                    </Link>
                </div>
                <div className="NavBarRight">
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/experience'>
                        <span>Resume</span>
                    </Link>
                </div>
                

            </div>
        )
    }
}

export default NavBar;