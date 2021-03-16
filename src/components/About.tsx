import React from 'react';
import { Link } from 'react-router-dom';
import { CalculateAge } from '../helpers/helper';
import '../styles/App.scss';

class About extends React.Component {
    render() {
        return (
            <div className='format-styling'>
                <h2>About Me</h2>
                {/* TODO - Pull birthdate from Redux */}
                <p>
                    My name's Max Goddard and I'm a {CalculateAge(new Date(2000, 8, 5))} year old British software developer living in Manchester, England. 

                    I've been working for {CalculateAge(new Date(2018, 1, 1))} years since 2018 and I'm currently working for an agency,
                    <a href='https://www.degree53.com/' target='_blank' rel='noopener noreferrer'> Degree53</a>. 
                    
                    So far in my career I've had the pleasure of working on a multitude of projects in varying fields: Fintech, gambling and medical research to name 
                    just a few. 
                    
                    If you want a bit more information on my experience, click <Link to="/experience">here</Link>.
                </p>
            </div>
        )
    }
}

export default About;

/*
    TODO

    - Pull birthdate from Redux global variables
    - Emphasis key points / values
*/