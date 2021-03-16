import React from 'react';
import '../styles/Home.scss';

class Home extends React.Component {
    render() {
        return (
            /* Blog / update feed */
            <div className="HomeContainer">
                <div className='format-styling padding-right-50-percent'> 
                    <p>Hi, I'm Max and I'm a full-stack software developer living in Manchester, England.</p>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log('Hello, World!');
    }
}

export default Home;