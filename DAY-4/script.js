// spread operator 
let fruits1 = ["apple", "banana"];
let fruits2 = ["cherry","banana"];
console.log([...fruits1,...fruits2]);
// ternary operator
// condition ? true : false this is the syntax of ternary operator
let age = 18;
let canVote = age >= 18 ? "You can Vote" : "you can't";
console.log(canVote)
//  Q1 find out the number is even or odd
let num = 2;
let evenNum = num%2===0 ? "number is even" : "nuumber is not";
console.log(evenNum)
// Q2 check a year is leap or not 
let year = 2100;
let Result =(year%4===0 && year%100!==0 )|| (year%400===0 )? "year is leap year" : "not a leap year";
console.log(Result)
// first class function
const demo=function(){}
function sample(){
    console.log("sample")
    return function demo(){
        console.log("demo")
        return function test(){
            console.log("test")
        }
    }
}
// sample()()()
var value = sample()
let valueTwo = value()
valueTwo()
// Anonymous function: Anonymous functions are functions without a name 
// syntax: setTimout(Callback,delay)
setTimeout(function(){
    console.log("Hello World!");
},1000)
// self invoking funtion(IIFE): a self invoking function also kown as an immediately
//  invoked function Expression is a funcion that is
function(){
    console.log("This is IIFE.");
    
}


