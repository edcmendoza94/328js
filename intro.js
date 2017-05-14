/*var jsAssignPt1 = "Introduction to JavaScript";

console.log(jsAssignPt1);*/

//For numbers divisible by 3, print "Fizz" instead
//For numbers divisible by 5, print "Buzz" instead
//For numbers divisible by 3 and 5, print "FizzBuzz" instead
var jsAssignPt2 = 1;

while(jsAssignPt2 <= 100) {
    if(jsAssignPt2 % 3 === 0 &&
       jsAssignPt2 % 5 === 0) {
        console.log("FizzBuzz");
    }
    
    else if(jsAssignPt2 % 3 === 0) {
        console.log("Fizz");
    }
    
    else if(jsAssignPt2 % 5 === 0) {
        console.log("Buzz");
    }
    
    else {
        console.log(jsAssignPt2);
    }
    
    jsAssignPt2++;
}