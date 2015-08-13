/**
 * Created by tanzmitdemtod on 8/13/15.
 */

//conditional logic - logical operators

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than budget OR if we won the lottery

if(iPhonePrice < budget || wonLottery === true){
   console.log("We can buy the phone!");
}else{
   console.log("No phone for you!");
}