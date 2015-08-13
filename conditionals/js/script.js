/**
 * Created by tanzmitdemtod on 8/13/15.
 */

//conditional logic - ternary operators

var age = 6;
var book;

//if child is under 10, they get Green Eggs and Ham, otherwise the get The Time Machine

/*if(age < 10) {
    book = "Green Eggs and Ham";
} else {
    book = "The Time Machine";
}
*/
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);
