import React from 'react';
const experienceJson = require('../data/experience.json');

export default class Experience extends React.Component {

    state = {
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
                                <span>{ obj.endDate } | </span>
                                <span>{ this.CalculatePeriod(obj.startDate, obj.endDate) }</span>
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

    componentDidMount() 
    {
        if (experienceJson.experience !== undefined) {
            this.setState({ experience: this.SortExperience(experienceJson.experience) })
        }
    }

    CalculatePeriod(startDate, endDate) 
    {
        let splitDate = startDate.split('/'); 
        let startMonth = splitDate[0], startYear = splitDate[1];

        let date1 = new Date(startYear, startMonth, '01');

        splitDate = endDate.split('/'); 
        let endmonth = splitDate[0], endYear = splitDate[1];

        let date2 = new Date(endYear, endmonth, '01');
        let difference = date2.getTime() - date1.getTime();

        console.log('difference' + difference);
        
        let day = 1000 * 60 * 60 * 24;

        let days = Math.floor(difference/day);
        let months = Math.floor(days/31);
        let years = Math.floor(months/12);

        console.log('Years' + years);
        console.log('Months' + months);
        console.log('Days' + days);

        let value = `${years} Years, ${months} Months, ${days} Days`;
        return value;
    }

    SortExperience(experience) 
    {
        return experience.sort(function(a, b) {
            let d = a.startDate.split('/'); 
            let aMonth = d[0], aYear = d[1];

            let e = b.startDate.split('/'); 
            let bMonth = e[0], bYear = e[1];
            
            return new Date(bYear, bMonth, 1) - new Date(aYear, aMonth, 1);
        });
    }
}
