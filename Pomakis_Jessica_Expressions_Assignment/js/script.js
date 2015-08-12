/**
 * Created by tanzmitdemtod on 8/12/15.
 */
//Jessica Pomakis, Expressions Assignment, August 12, 2015, SDI Section 02

var userInput = [length, width, depth]; //this is an array to hold the values for my equation. This calculator will help the user determine how many bags of soil they will need to fill in a plot for their garden.

var length = userInput[0]; //defining the length variable in the array
var width = userInput[1]; //defining the width variable in the array
var depth = userInput[2]; //defining the depth variable in the array

userInput[0] = prompt("This calculator will figure out how many 1 cubic foot bags of soil you will need for your garden. \nPlease enter the length, in feet.");
userInput[1] = prompt("Please enter the width.");
userInput[2] = prompt("Now please enter the depth of your garden.");

var volume = userInput[0] * userInput[1] * userInput[2];//this variable holds the result for the volume equation
var bagsOfSoil = volume / 3; //taking the total volume and dividing by three to convert into yards
alert("Your garden plot is " + volume + " cubic feet.\n You will need " + bagsOfSoil + " one cubic yard bags of soil to fill it." ); //alert to tell the user the results
console.log("Your garden plot is " + volume + " cubic feet. You will need " + bagsOfSoil + " one cubic yard bags of soil to fill it.");//printing the same results to the console

//I tested with 12 length, 5 width and 2 depth, results: 120 cubic feet, need 40 bags of soil
// 50 length, 9 width, 6 depth = 2700 cubic feet, 900 bags of soil
// 5 length, 2 width, .5 depth = 5 cubic feet, 1.6666666666666667 bags of soil