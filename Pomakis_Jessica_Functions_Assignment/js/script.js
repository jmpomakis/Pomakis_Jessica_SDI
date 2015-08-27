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
        choice = prompt("Please re-enter your choice.\n\nWould you like Powerball or Florida State lottery numbers?");

    }
    return choice;
} //this function is used to validate that the user has entered their choice, they will get asked again until they type in their response