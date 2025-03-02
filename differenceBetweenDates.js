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


const formatInput = function(inputs){
    const date1 = inputs[1]+"/"+inputs[0]+"/"+inputs[2]
    const date2 = inputs[4]+"/"+inputs[3]+"/"+inputs[5]
    return {date1, date2}
}

const isLeap = function(year){
    // condition: divisable by for BUT not by a hundered at the same time OR divisable by 400 
    return (year%4 == 0 && year%100 != 0) || year%400 == 0;
}



const numberOfDaysBetweenDates = function(start, end){
    const startDate = new Date(start);
    const endDate = new Date(end)
    let numberOfDays = Math.floor((endDate-startDate)/(3600*24*1000));
    return numberOfDays;
    // return the number of days between two dates
}

const difference = function(date1, date2){
    const differenceInDays = numberOfDaysBetweenDates(date1, date2)
    // check for the years:
    let numberOfYear = Math.floor(differenceInDays/365);
    let remainderInDays = differenceInDays - (numberOfYear*365)
    // check for the number of LeapYears (number to substract to the remainder !)
    let counterLeapYear = 0;
    for (let i = new Date(date1).getFullYear(); i<= new Date(date2).getFullYear(); i++){
        if (isLeap(i)){
            counterLeapYear ++
        }
    }
    return `${numberOfYear} years, ${remainderInDays-1} days`
}

const dates = formatInput(inputs)

const startDate = dates.date1; // formalism of the date is mm/dd/yyyy
const endDate = dates.date2; // formalism of the date is mm/dd/yyyy


console.log(difference(startDate, endDate));