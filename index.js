/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

let aEx1 = 12;
let bEx1 = 2;
let sumEx1 = aEx1 + bEx1;


function sumOfTwo() {

    if (aEx1 === bEx1) {
        return sumEx1 * 3;
    } else
        return sumEx1;
};

console.log(sumOfTwo(sumEx1));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

let aEx2 = 30;
let bEx2 = 20;
let sumEx2 = aEx2 + bEx2;

function numCheck(/*vibe check*/) {
    if (aEx2 === 50) {
        return true;
    } else if (bEx2 === 50) {
        return true;
    } else if (sumEx2 === 50) {
        return true;
    } else {
        return false;
    }
}

console.log(numCheck(Boolean))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/



/*
4)
 Create a function to find the largest of three given integers.
*/

let aEx4 = 14;
let bEx4 = 12;
let cEx4 = 13;

function biggestOfThree() {
    if (aEx4 > bEx4) {
        return console.log("a is bigger than b and c")
    } else if (bEx4 > cEx4) {
        return console.log("b is bigger than a and c")
    } else {
        return console.log("c is bigger than a and b")
    }
}

biggestOfThree();
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/



/*
6)
Create a function to create a new string of specified copies (positive number) of a given string.
*/



/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

let string0Ex7 = "los angeles"
let string1Ex7 = "new york"

function displayName() {
    if (string1Ex7.startsWith("new") === true) {
        return console.log("new york")
    } else {
        return console.log("los angeles")
    }
}

displayName();

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

let arrayEx8 = [1, 2, 3, 4];

function calcSumThree() {

    return arrayEx8.reduce(function (a, b) {
        return a + b;
    }, 0)
}
console.log(calcSumThree(arrayEx8))

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3.
*/

let arrayEx9 = [1, 2, 4]

function testNum() {
    for (let i = 0; i < arrayEx9.length; i++) {
        if (arrayEx9[i] === 1) {
            return console.log("there's a one in here")
        } else {
            return console.log("there's a three in here")
        }
    }
}
testNum();
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 */

let arrayEx10 = [3, 9, 4]

function testNum2() {
    for (let i = 0; i < arrayEx10.length; i++) {
        if (arrayEx10[i] === 1, 3) {
            return console.log("there aren't a one or a three in here")
        } else {
            return console.log("there are a one or a three in here")
        }
    }
}
testNum2();
/*
11)
Create a function to find the longest string from a given array of strings.*/

let arrayEx11 = ["abcd", "abcde", "gkosdfnklgjkl"]
let testSub = "a";

function testString() {
    for (let i = 0; i < arrayEx11.length; i++) {
        if (arrayEx11[i].length > testSub.length) {
            testSub = i;
        }
    }
    return testSub;
}

console.log(testString());
/* 12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
13)
Create a function to find the index of the greatest element of a given array of integers*/

function findGreatest(myArray) {

    let greatest = 0

    for (let i = 0; i < myArray.length; i++) {

        if (myArray[i].length > myArray[greatest].length) {
            greatest = i
        }
    }

    return greatest
}

console.log(findGreatest([0, 6, 100, 45, 76]))

/*
14)
Create a function to get the largest even number from an array of integers.
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.*/

let aEx15 = 30;
let bEx15 = 20;
let sumEx15 = aEx15 + bEx15;

function numCheck(/*vibe check*/) {
    if (aEx15 === 50) {
        return true;
    } else if (bEx15 === 50) {
        return true;
    } else if (sumEx15 === 50) {
        return true;
    } else {
        return false;
    }
}

console.log(numCheck(Boolean))

/*16)
Create a function to check from two given integers, whether one is positive and another one is negative.
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case.If the string length is less than 3 convert all the characters in upper case.
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".* /

// 28 % 5 = 3

//10 % 4  = 2

// 30 % 3 = 0, 1, 2
/*
function convertNumber(a) {
    let aEx19 = a % 3;
    if (aEx19 === 3) {
        return console.log("diego")
    } else if ()
}
convertNumber(28);*/
/* 20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
    */