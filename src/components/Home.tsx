import React from 'react';
import Introduction from './Introduction';
import '../styles/Home.scss';

export default class Home extends React.Component 
{
    render() {
        return (
            <div className="HomeContainer">
                <div className="IntroMyWorkContainer">
                    <Introduction />
                </div>
            </div>
        )
    }
}