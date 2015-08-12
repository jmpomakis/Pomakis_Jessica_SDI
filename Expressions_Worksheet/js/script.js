/**
 * Created by tanzmitdemtod on 8/12/15.
 */
    //Jessica Pomakis, August 12, 2015 Section 02

//Problem One: Dog Years

var sparkyAge = 8; //declaring Sparky's age in human years is 8

var dogYears = sparkyAge * 7; //Sparky's age in human years multiplied by 7 gives us his age in dog years

console.log("Sparky's age in dog years is " + dogYears + ", which is " + sparkyAge + " in human years.");
//printing the result of the equation to the console



//Problem Two: Slice of Pie part I

var slices = 6;
var pizzas = 5;
var partiers = 9; //declaring variables for givens for how many people (partiers), pizzas(pizzas) and slices per pizza (slices) are at the party

var slicesEach  = slices * pizzas / partiers;
//to find out how many slices each person can have,
// we multiply the number of slices by the number of pizzas (to get the total number of slices) and divide by the number of people at the party.

console.log("Each person got " + slicesEach + " slices of pizza at the party."); //printing our result of slices per person.



//Problem Three: Slice of Pie part II
//since our variables were declared in the previous part, there is no need to list them again

var sparkysPizza = slices * pizzas % partiers; //creating a variable to hold the result
//changing the division symbol in the original code to the modulo operator to display the remainder of the division, which will show the leftover slices that Sparky gets

console.log("Sparky got " + sparkysPizza + " slices of pizza."); //printing our solution to the console



//Problem Four: Average Shopping bill

var groceryBills = [120, 97, 65, 80, 105]; //an array displaying the past five grocery bills

var totalSpent = groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4];
//to add the total of each bill from the array
var averageCost = totalSpent / 5; //to find the average, dividing the total of each item by the number of items

console.log("You have spent a total of $" + totalSpent + " on groceries over 5 weeks. That is an average of $" + averageCost + " per week.");
//printing out the results to the console


//Problem Five: Discounts

var item = "Coffee Table Book";
var originalPrice = 75;
var percentDiscount = 15;
var taxRate = 5;

var amountOff = originalPrice * (percentDiscount *.01); //multiply by .01 to turn 15 into 15% (.15)

var baseDiscountPrice = originalPrice - amountOff; //original price minus the amount of the discount

//console.log(baseDiscountPrice); commenting out test print

var addedTax = baseDiscountPrice * (taxRate * .01); //to get the percent value
var discountAfterTax = baseDiscountPrice + addedTax; //to get the new total cost, with tax

console.log("Your " + item + " was originally $" + originalPrice + ", but after a " + percentDiscount + "% discount, it is now $" + baseDiscountPrice + " without tax, and $" + discountAfterTax + " with tax." );