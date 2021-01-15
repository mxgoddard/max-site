import React from 'react';

class Home extends React.Component {
    render() {
        return (
            /* Blog / update feed */
            <div className='format-styling'> 
                <h2>Home</h2>
            </div>
        )
    }

    componentDidMount() {
        console.log('Hello, World!');
    }
}

export default Home;