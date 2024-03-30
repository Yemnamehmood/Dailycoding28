"use strict";
//DAY 28 
//Task 1 (find the length of String) using function
function stringlength(str) {
    return str.length; //it returns the number of characters in the string 
}
//for example measuring the length of a name
console.log(stringlength("Yemna")); //we are looking forward that how long the string "yemna" is,
//result = 5
//TASK 2 (Converting to upper and lower case) using function
//this function changes a string to uppercase and then to lowercase 
function convertcase(str) {
    let upperstr = str.toUpperCase(); //it converts to uppercase
    let lowerstr = str.toLowerCase(); //it converts to lowercase
    console.log("Uppercase:", upperstr, "Lowercase:", lowerstr);
}
//Example" changing the case of "Hello Coding"
convertcase("Hello Coding"); //uppercase output be like: HELLO CODING
// lowercase output be like: hello coding 
//TASK 3 (Replacing a text in string) using functions
//words javascript and typescript 
function replaceJavaScriptWithTypescript(sentence) {
    return sentence.replace(/JavaScript/g, "Typescript"); //uses a regular expression with the "g" flag for a global replacement
}
//example: Changing a programming language name in the sentence
console.log(replaceJavaScriptWithTypescript("I Love JavaScript and it is amazing!!"));
//output is "I Love TypeScript and it is amazing!!"
//Every "JavaScript" word replace by "TypeScript"
