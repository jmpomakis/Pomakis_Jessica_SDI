/**
 * Created by tanzmitdemtod on 8/13/15.
 */
//Jessica Pomakis -- August 13, 2015 -- Conditionals Worksheet

//Problem I ~ "Stuff Your Face"

var competitorWeight = 260; //variable for how much the competitor weighs

if(competitorWeight >= 250){ //if the competitor weighs 250 or more, he qualifies
    console.log("The competitor qualifies for the heavyweight division!"); //print result

}else{ //otherwise, if he DOESN'T weigh 250 more, he does not qualify
    console.log("The competitor needs to gain some weight!"); //print result
}

//Problem II ~ "Last Chance for Gas!"

var fuelEfficiency = 20; //miles per gallon
var gasRemaining = 50; //percent of tank full of gas
var tankCapacity = 12; //capacity in gallons of their gas tank
var nextStop = 200; //distance to next stop

var gallonsLeft = tankCapacity * (gasRemaining * .01); //converting the percent of tank full to number of gallons
//console.log(gallonsLeft); test print gallonsLeft equation
var distancePossible = fuelEfficiency * gallonsLeft; //calculating how far their remaining gas will get them

if(distancePossible >= nextStop){ //if the distance their gas will take them is greater or equal the distance to the next gas station
    console.log("Yes, you can make it without stopping for gas!"); //they can proceed
}else{ //otherwise, they will not make it and should stop to fill up first
    console.log("You only have " + gallonsLeft + " gallons of gas in your tank, better get gas now while you can!");
}

//Problem III ~ "Check the Login"

var correctUsername = true;
var correctPassword = false;
var enteredUsername = "CoolDude99";
var enteredPassword = "goldfish";

if(correctUsername && correctPassword) { //if both password AND username are true,
    console.log("Welcome, " + enteredUsername + "."); //print welcome
}else if(correctUsername === false){ //but if username is false
    console.log("User not found. Try again."); //print to try again
}else{
    console.log("Password does not match records."); //otherwise, the password would be false, they must try again
}

//Problem IV ~ "Movie Ticket Price"

var movieTime = 4; //time of the movie
var customerAge = 24; //age of the customer
var discountPrice = "7.00"; //discount price
var regularPrice = "12.00"; // regular price

if(movieTime >= 3 && movieTime <= 5 || (customerAge >= 55 || customerAge <= 10)){ //if the time is greater than or equal to three AND less than or equal to 5, OR if customer age is greater than or equal to 55 OR less than or equal to 10, they get the discount
    console.log("The ticket price is $" + discountPrice + "." );
}else{ //otherwise, tickets are regular price
    console.log("The ticket price is $" + regularPrice + ".");
}