/**
 * Created by tanzmitdemtod on 8/27/15.
 */
//Jessica Pomakis, August 27, 2015, Functions worksheet

//Calculate the circumference of a circle

var radius = 10; //setting variable for radius to 10
var circumference = calcCircumference(radius); // creating a variable for our function to return

function calcCircumference(radius) { //passing the variable for the radius to the function
    return 2 * Math.PI * radius; //the return is the formula for finding the circumference of a circle
}

console.log("The circumference of the circle is " + circumference); //printing the result to console, using the variable we created for the result


//How many bee stings to kill an animal.

var victimsWeight = 50; //variable for the weight of the animal, in pounds, defined at 50.
var fatalBeeStings = beeStings(victimsWeight); //created a variable for the function return

function beeStings(victimsWeight){ //passing the victim's weight variable to the function
    return 8.666666667 * victimsWeight; //the return is the number of stings(8.666666667) multiplied by the number of pounds
}
console.log("It takes " + fatalBeeStings + " bee stings to kill this animal."); //printing the result to the console