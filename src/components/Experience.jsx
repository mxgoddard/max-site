import React from 'react';
const experienceJson = require('../data/experience.json');

class Experience extends React.Component {

    state = {
        test: [ 1, 2, 3, 4, 5 ],
        experience: []
    }

    render() {
        return (
            <div className='format-styling'>
                {
                    this.state.experience.map((obj, index) => {
                        return (
                            <div key={index}> 
                                <span>{ obj.company } | </span>
                                <span>{ obj.position } | </span>
                                <span>{ obj.startDate } | </span>
                                <span>{ obj.endDate }</span>
                                { obj.notes.length > 0 &&
                                    <span> | { obj.notes }</span>
                                }
                            </div>
                        );
                    })
                }
            </div>
        )
    };

    componentDidMount() {
        let a = experienceJson.experience;
        console.log(a);
        // Read experience.json - error handle
        // TODO - order chronologically
        this.setState({ experience: a })
    }
}



export default Experience;