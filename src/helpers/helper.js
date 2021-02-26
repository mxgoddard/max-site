/// helper.js

export const CalculateTimePeriod = (startDateData, endDateData) => 
{
        // Get month and year
        let startDateSplit = startDateData.split('/');
        let startMonth = startDateSplit[0];
        let startYear = startDateSplit[1];

        let endDateSplit = endDateData.split('/');
        let endMonth = endDateSplit[0];
        let endYear = endDateSplit[1];

        if (endDateData === 'Current') {
            let date = new Date();
            endYear = date.getFullYear();
            endMonth = date.getMonth();
        }

        // Get the day difference
        let startDate = new Date(startYear, startMonth, '01');
        let endDate = new Date(endYear, endMonth, '30');

        let difference = endDate.getTime() - startDate.getTime();

        const day = 1000 * 60 * 60 * 24;
        let days = Math.floor(difference/day);

        return FormatTimePeriodString(days);
};

export const FormatTimePeriodString = (days) => 
{
    let years = 0;
    let months = 0;
    let finishCount = false;
    do 
    {
        if (days >= 365) 
        {
            days -= 365;
            years++;
        } 
        else if (days >= 30) 
        {
            days -= 30;
            months++;
        } 
        else 
        {
            finishCount = true;
        }
    } while (!finishCount);

    let yearText = years > 1 ? `${years} years` : `${years} year`;
    let monthText = months > 1 ? `${months} months` : `${months} month`;

    if (years === 0) yearText = '';
    if (months === 0) monthText = '';

    // Add comma in between text if years and months are both displayed
    let addComma = years.length + months.length === 0 ? ', ' : '';

    return `${yearText}${addComma}${monthText}`;
};