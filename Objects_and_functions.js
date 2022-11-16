//-Create a car object, add a color property to it with the value equals 'black'
let car = {
    color: "black"
}
console.log(car)
//-Change the color property of the car object to 'green'
car.color = "green";
console.log(car)
//-Add the power property to the car object, which is a function and displays 
//the engine power to the console
car.power = function (){
    console.log("The engine power is 1.5")
};
car.power()
console.log(car)

//-Pears and apples are accepted to the warehouse, write a function that returns
//the result of adding the number of accepted pears and apples
function sum_of_fruits(pears, apples){
    let sum = pears+apples;
    return sum;
}
console.log(sum_of_fruits(5, 8))

//-Your name is saved in the payment terminal, write a function to define 
//the name in the terminal (if you entered your name, then hello + name, if not,
//then there is no such name)
function verifiyed_name(name){
if (name==="Roman"){
    console.log("Hello " + name)
}
else {
    console.log("there is no such name")
}
}
console.log(verifiyed_name("Roman"))

//-Write a function for calculating the type of argument and type output 
//to the console
function calc_of_arg_type(parametr){
if (typeof parametr === "number"){
   console.log("The type of argument is Number")
}
if (typeof parametr === "string"){
   console.log("The type of argument is String")
}
if (typeof parametr === "boolean"){
   console.log("The type of argument is Boolean")
}
}
console.log(calc_of_arg_type(true))

//-Write a function that determines whether a number is prime or not
function prime_number_or_not(number){
    let prime=true;
    for(let i = 2; i<number; i++){
if (number%i===0){
    prime = false;
}
}
console.log("The number is prime = " + prime)
}
prime_number_or_not(30)