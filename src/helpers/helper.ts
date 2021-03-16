/// helper.ts

export const CalculateAge = (birthDate:Date) => 
{
    var differenceMs = Date.now() - birthDate.getTime();
    var differenceDate = new Date(differenceMs);
    return Math.abs(differenceDate.getUTCFullYear() - 1970);
}

// TODO - Fix this to conform to best practises in terms of declaring types
export const CalculateTimePeriod = (startDateData:string, endDateData:string) => 
{
        // Get month and year
        let startDateSplit = startDateData.split('/');
        let startMonth :any= startDateSplit[0];
        let startYear:any = startDateSplit[1];

        let endDateSplit = endDateData.split('/');
        let endMonth:any = endDateSplit[0];
        let endYear:any = endDateSplit[1];

        if (endDateData === 'Current') {
            let date = new Date();
            endYear = date.getFullYear();
            endMonth = date.getMonth();
        }

        // Get the day difference
        let startDate = new Date(startYear, startMonth, 1);
        let endDate = new Date(endYear, endMonth, 30);

        let difference = endDate.getTime() - startDate.getTime();

        const day = 1000 * 60 * 60 * 24;
        let days = Math.floor(difference/day);

        return FormatTimePeriodString(days);
};

export const FormatTimePeriodString = (days:number) => 
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
    let addComma = years.toString().length + months.toString().length === 0 ? ', ' : '';

    return `${yearText}${addComma}${monthText}`;
};