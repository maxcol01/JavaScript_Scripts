// input data
// wrong output: x years, and x days -> review the logic

inputs = [
    "1",
    "9",
    "1939",
    "2",
    "9",
    "1945",
]

const isLeap = function(year){
    // condition: divisable by for BUT not by a hundered at the same time OR divisable by 400 
    return (year%4 == 0 && year%100 != 0) || year%400 == 0;
}

const numberOfDaysBetweenDates = function(start, end){
    let numberOfDays = Math.floor(end-start)/(3600*24*1000);
    return numberOfDays;
    // return the number of days between two dates
}


const difference = function(date1, date2){
    let year1 = new Date(date1);
    let year2 = new Date(date2);
    // convert the number of days in the formal X year, y day
    let differenceInDays = numberOfDaysBetweenDates(year1, year2);
    let startYear = year1.getFullYear();
    let endYear = year2.getFullYear();
    if (endYear > startYear){
        for (let yearIt = startYear; yearIt <= endYear; yearIt++){
            console.log(yearIt)
        }
    }
    return differenceInDays

}

const startDate = "1/1/1939"; // formalism of the date is mm/dd/yyyy
const endDate = "1/5/1940"; // formalism of the date is mm/dd/yyyy

console.log(difference(startDate, endDate));