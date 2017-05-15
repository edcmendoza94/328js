/*var jsAssignPt1 = "Introduction to JavaScript";

console.log(jsAssignPt1);*/

/*var jsAssignPt2 = 1;

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
}*/

var jsAssignPt3 = "Baby Back RiBs";

function countBs(string) {
    var numOfBs = countChar(string, "B");
    
    return numOfBs;
}

/*var jsAssignPt4 = "SIC SEMPER FIDELIS";
var charToFind = "P";*/

function countChar(string, searchChar) {
    var numOfSearchChar = 0;
    
    for(var i = 0; i < string.length; i++) {
        if(string.charAt(i) === searchChar) {
            numOfSearchChar++;
        }
    }
    
    return numOfSearchChar++;
}

console.log("Number of B's: " + countBs(jsAssignPt3));

/*console.log("Number of " + charToFind +  "'s: " +
            countChar(jsAssignPt4, charToFind));*/