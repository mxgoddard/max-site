import React from 'react';
import Typewriter from './Typewriter';
import '../styles/Home.scss';

interface IState {
    typewriterText: string
}

export default class Home extends React.Component 
{
    state : IState = {
        typewriterText: ''
    }

    render() {
        return (
            <div className="HomeContainer">
                <Typewriter text={this.state.typewriterText} />
            </div>
        )
    }

    componentDidMount() {
        let text = "Hi, I'm Max and I build [d]experiences.[r] stuff.";
        this.setState({ typewriterText: text })
    }
}