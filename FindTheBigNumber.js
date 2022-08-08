// import permition on user input 
const prompt = require("prompt-sync")();


var a = prompt("Enter the first number :");
var b = prompt("Enter the second number :");
var c = prompt("Enter the third number :");

if(a>b && a>c){
    console.log("The Largest number is : " + a);
}
else if(b>a && b>c){
    console.log("The Largest number is : " + b);
}
if(c>a && c>b){
    console.log("The Largest number is : " + c);
}
