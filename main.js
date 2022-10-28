//Displaying my current age
const myAge = 32;
//This is my age in the early years of a dog
var earlyYears = 2;
var earlyYears = earlyYears * 10.5;
//Since the above code accounts for the first 2 years i will now assign a variable for later years
var laterYears = myAge - 2;
//I will now convert the other 30 years of my life into dog years and check that my results are accurate using colsole.log
var laterYears = laterYears * 4;
console.log(earlyYears);
console.log(laterYears);
//After getting the correct results, I will now add both early and later years together to get my age in dog years
var myAgeInDogYears = earlyYears + laterYears
console.log(myAgeInDogYears);
//I will use a built in string method to make all lowercase letters and set the myName variable to my name
const myName = `BENJAMIN`;
console.log(myName.toLowerCase());
//Using string interpolation i will display the previous values into a sentence
console.log(`My name is ${myName}, I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years. `);
