/**
 * Created by tanzmitdemtod on 8/13/15.
 */
//Jessica Pomakis, August 13, 2015, SDI Section 02, Conditionals Assignment

var dogWtPounds =  prompt("How much does your dog weigh, in pounds?"); //prompt to get variable for dog's weight
var calories = prompt("How many calories per ounce of your dog's food? \nIf unsure, enter 50 for an average."); //prompt to get variable for the number of calories per ounce of food
var supplementalFeed = prompt("Are you also feeding your dog with supplemental foodstuffs? Enter the percentage. If not, enter 0."); //prompt to get variable for the percent of the dog's diet fulfilled by supplemental feeding
var feedingPercentage = prompt("How is your dog's weight level? Enter underweight, average, or overweight to calculate feeding percentage."); //prompt to get variable for the level of feeding to maintain a healthy weight

var dogWtOz = dogWtPounds * 16; //a variable to convert the dogs weight into ounces for ease of calculation
var calorieCount = dogWtOz * calories; //how many calories at 100% of dogs weight
var feedingAmount = calorieCount * (feedingPercentage * .01); //equation to find out the required calories

var mealSize = (((100 - supplementalFeed) * .01) * feedingAmount) / 2; //final equation, 100% minus the percentage of supplemental feeding, times .01 to turn it into a percent, times the amount of required calories, divided by two for two meals a day


if(dogWtPounds = ""){
    prompt("Please enter your dog's weight in pounds."); //to check that the prompt was filled out
}
if(calories = ""){
    prompt("Please enter how many calories are your dog's food per ounce.");
}

if (feedingPercentage = "underweight"){ //if the user entered underweight
    feedingPercentage = 3; //then feedingPercentage is 3
} else if (feedingPercentage = "overweight"){ //if overweight,
    feedingPercentage = 2; //feedingPercentage is 2
} else { //otherwise,
    feedingPercentage = 2.5; //feedingPercentage is 2.5
}

if (supplementalFeed = 0){ //if supplemental feeding is 0%,
    feedingAmount = calorieCount * (feedingPercentage * .01); //then feeding amount is total calories times feeding percent
} else {
    feedingAmount = (((100 - supplementalFeed) * .01) * calorieCount * (feedingPercentage * .01)); //otherwise, feeding amount is calories times feeding percentage, times total percent of food required, accounting for subjecting the percent of supplemental feedings
}
console.log(mealSize); //print meal size

//console is only printing NaN, I can't figure out why my code is not working. The validation sequence won't activate either, I don't know maybe I am missing something about the order I have everything written, but I just wanted to make sure I submitted what I have done rather than nothing. Regretfully, I have had an extremely hectic week at work and just have not had the time seek out help on this. I know I am also missing some elements but I wanted to get the code to actually work before adding anything else to it. I hope I will be able to get some advice on this, everything seemed to make sense while following along wit the screencasts and other instruction but it's just not adding up for me with this assignment. I might have just chosen too complicated of a calculation to work with, but I was really having trouble thinking of what to calculate.