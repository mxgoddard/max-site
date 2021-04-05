import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from './Typewriter';
import '../styles/Introduction.scss';

interface IState {
    typewriterText: string
}

export default class Introduction extends React.Component {
    state : IState = {
        typewriterText: ''
    }

    render() : React.ReactNode {
        return (
            <div className='IntroContainer'>
                <div className='IntroContent'>
                    <p id='RoleLocation'>Full Stack Developer, Manchester GB</p>
                    <h1>
                        <Typewriter text={this.state.typewriterText} />
                    </h1>
                    <span>
                        TODO - I'm a <span>Full Stack Software Developer</span> based in Manchester with experience building and delivering high end web experiences. I'm passionate
                        about improving the lives of other through design and am constantly looking to learn new things everyday.
                    </span>
                    <div className='IntroButtons'>
                        <Link to='/view-works'>View Works</Link>
                        <Link to='/contact'>Contact Me</Link>
                    </div>
                </div>
                <div className='IntroImage'>
                    <img src={require('../assets/images/profile-picture.jpg')} alt='Max Goddard profile' />
                </div>
            </div>
        )
    }

    componentDidMount() {
        let text = "Hi, I'm Max and I build [d]experiences.[r] stuff.";
        this.setState({ typewriterText: text })
    }
}