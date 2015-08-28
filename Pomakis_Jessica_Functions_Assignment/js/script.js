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

//main code vv

whichNumbers = numbersValidation(whichNumbers); //calling the functions to prompt the user to enter a choice to determine whether they'll be getting florida state or powerball numbers.
console.log("You chose " + whichNumbers + "."); //this was just for me to check the code worked!


if (whichNumbers === "powerball") {
    //this is to validate whether the user entered "powerball", if they did, the random number generator will run and they will get:
    lottoNumber = randomNumberGen(1, 59, 5);    //five numbers between 1-59
    powerBall = randomNumberGen(1, 35, 1); //and one number between 1-35, which is their powerball.


    alert("Your numbers are: " + lottoNumber + " and Powerball:  " + powerBall + ". \nGood Luck!"); //their results in an alert,
    //giving them 5 numbers between 1-59 and their 1-35 powerball selection. Also wishing them luck for good measure!


}
if (whichNumbers === "florida state") {     //and this is where it's being determined if they have entered "florida state"
    floridaState = randomNumberGen(1, 53, 6); //and if so, same as before, telling the function to run with the parameters for the florida state lottery; 6 numbers between 1-53.

    alert("Your numbers are " + floridaState + ". \nGood Luck!"); //an alert to tell them their FL state numbers, and wishing them luck!
}
