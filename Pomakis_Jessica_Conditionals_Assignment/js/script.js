/**
 * Created by tanzmitdemtod on 8/13/15.
 */
//Jessica Pomakis, August 13, 2015, SDI Section 02, Conditionals Assignment

var dogWtPounds =  prompt("How much does your dog weigh, in pounds?");
var calories = prompt("How many calories per ounce of your dog's food? \nIf unsure, enter 50 for an average.");
var supplementalFeed = prompt("Are you also feeding your dog with supplemental foodstuffs? Enter the percentage. If not, enter 0.");
var feedingPercentage = prompt("How is your dog's weight level? Enter underweight, average, or overweight to calculate feeding percentage.");

var dogWtOz = dogWtPounds * 16;
var calorieCount = dogWtOz * calories;
var feedingAmount = calorieCount * (feedingPercentage * .01);

var mealSize = (((100 - supplementalFeed) * .01) * feedingAmount) / 2;


if(dogWtPounds = ""){
    prompt("Please enter your dog's weight in pounds.");
}
if(calories = ""){
    prompt("Please enter how many calories are your dog's food per ounce.");
}

if (feedingPercentage = "underweight"){
    feedingPercentage = 3;
} else if (feedingPercentage = "overweight"){
    feedingPercentage = 2;
} else {
    feedingPercentage = 2.5;
}

if (supplementalFeed = "0"){
    feedingAmount = calorieCount * (feedingPercentage * .01);
} else {
    feedingAmount = (calorieCount * (feedingPercentage * .01)) * (supplementalFeed * .01);
}
console.log(mealSize);