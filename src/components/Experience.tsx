import React from 'react';
import { CalculateTimePeriod } from '../helpers/helper';
const experienceJson = require('../data/experience.json');

interface IState {
    experience: Array<string>
}

export default class Experience extends React.Component {

    state: IState = {
        experience: []
    }

    render() {
        return (
            <>
                <div className='format-styling'>
                    <h1>Experience</h1>
                </div>
                <div className='format-styling padding-bottom-10'>
                    <h2>Work</h2>
                    {
                        this.state.experience.map((obj:any, index:number) => {
                            return (
                                <div key={index} className='padding-bottom-10'> 
                                    <span>{ obj.company } | </span>
                                    <span>{ obj.position } | </span>
                                    <span>{ obj.startDate } | </span>
                                    <span>{ obj.endDate } | </span>
                                    <span>{ CalculateTimePeriod(obj.startDate, obj.endDate) }</span>
                                    { obj.notes.length > 0 &&
                                        <span> | { obj.notes }</span>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div className='format-styling'>
                    <h2>Skills</h2>
                    <h3>Back-end</h3>
                    <h3>Front-end</h3>
                    <h3>General / Miscellaneous</h3>
                </div>
            </>
        )
    };

    componentDidMount():void
    {
        if (experienceJson.experience !== undefined) {
            this.setState({ experience: this.SortExperience(experienceJson.experience) })
        }
    }

    SortExperience(experience:Array<string>):Array<string>
    {
        return experience.sort(function(a:any, b:any) {
            let d = a.startDate.split('/'); 
            let aMonth = d[0], aYear = d[1];

            let e = b.startDate.split('/'); 
            let bMonth = e[0], bYear = e[1];

            return new Date(bYear, bMonth, 1).getTime() - new Date(aYear, aMonth, 1).getTime();
        });
    }
}
