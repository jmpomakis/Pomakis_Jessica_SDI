/**
 * Created by tanzmitdemtod on 8/27/15.
 */
//Jessica Pomakis, Functions Assignment August 27, 2015, SDI Section 02

//variables to be used later for the different sets of results based on the users input
var whichNumbers = prompt("Would you like Powerball or Florida State lottery numbers?");
var lottoNumber;
var powerBall;
var floridaState;


//functions
function numbersValidation(choice) {


    while (choice === "") {
        choice = prompt("Oops! Please re-enter your choice.\n\nWould you like Powerball or Florida State lottery numbers?");

    }
    return choice;
} //this function is used to validate that the user has entered their choice, they will get asked again until they type in their response

//random number generation vv

function randomNumberGen(min, max, num){

    var luckyNumbers = []; //creating an empty array that will be filled with the random numbers that the following three lines will generate. we're making sure the numbers will be within a specified range and that they will be whole numbers.


    for (var i = 0; i < num; i++) {
        var randomNum = Math.random() * (max - min) + min;
        luckyNumbers[i] = Math.round(randomNum);
    }

    return luckyNumbers;
} //this function is used to generate the random numbers, which for each option, we'll fill in the min and max and tell the function how many numbers to give us.