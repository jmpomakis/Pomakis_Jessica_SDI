/**
 * Created by tanzmitdemtod on 8/13/15.
 */

//conditional logic - with an expression

var kidHeight = 46;
var minHeight = 48;
var wParentHeight = 45; //height of kid with parent


//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight > minHeight){
    //you can ride
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight ){
    //you can ride with parent
    console.log("You can ride, but only with a parent present.");

}else {
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}