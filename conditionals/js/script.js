/**
 * Created by tanzmitdemtod on 8/13/15.
 */

//conditional logic - logical operators

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

//if the price of the phone is less than budget AND if paycheck is over 300

if(iPhonePrice < budget && paycheck > 300){
   console.log("We can buy the phone!");
}else{
   console.log("No phone for you!");
}