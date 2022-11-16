//1.Given an array consisting of movie names, iterate over the array with the
//output of the names of each movie to the console
let arr_movies = ["Forsage", "Matrix", "Tor"]
for (let i=0; i<arr_movies.length; i++){
    console.log(arr_movies[i])
}

//2.Given an array of car manufacturers, convert the array to a string and back 
//to an array
let arr_car_manufactures = ["Mercedes", "Bmw", "Audi", "Volksawagen"]
let arr_car_manufactures_to_str = arr_car_manufactures.join();
console.log(arr_car_manufactures_to_str);
let arr_car_manufactures_to_arr = arr_car_manufactures_to_str.split(",");
console.log(arr_car_manufactures_to_arr);

//3.Given an array of the names of your friends, add the words hello to each 
//element of the array
let friends_name_arr = ["Andrii", "Serhii", "Vasyl"];
for (let i=0; i<friends_name_arr.length; i++){
    console.log(friends_name_arr[i] + " hello")
}

//4.Convert numeric array to Boolean
let numeric_arr = [2, 0, 7, 10, 0, 2, 1]
let converted_arr = [];
for (let i=0; i<numeric_arr.length; i++){    
    converted_arr.push(Boolean(numeric_arr[i]))
}
console.log(converted_arr)

//5.Sort the array [1,6,7,8,3,4,5,6] in descending order
let some_arr = [1,6,7,8,3,4,5,6];
const descArr = some_arr.sort().reverse();
console.log(descArr)

//6.Filter array [1,6,7,8,3,4,5,6] by value> 3
let array_by_value = [1,6,7,8,3,4,5,6]
let sorted_arr = [];
for (let i=0; i<array_by_value.length; i++){
    
    if(array_by_value[i]>3){
        sorted_arr.push(array_by_value[i])
    }
    
}
console.log(sorted_arr)

//7.Write a function that takes two parameters - an array and a number
//and outputs the index of an array element equal to a number
let arr_of_numbs = [1,6,7,8,3,4,5,6];
function index_of_arr_ellement(array, number){
    let indexOfnumber = array.indexOf(number);
    return indexOfnumber
}
console.log(index_of_arr_ellement(arr_of_numbs, 5))


//8.Implement a loop that will print the number 'a' until it is less than 10
let a = 1;
while (a<10){
    console.log(a)
    a++
}

//9.Implement a loop that prints prime numbers to the console
let primeNumberTo = 10;
for(let number=2 ; number<=primeNumberTo; number++){
    let prime = true;
for (let i=2; i<= number-1;i++){
    if(number%i===0){
        prime = false;
    }
}
if (prime===true) {
console.log(number);
}
}

//10.Implement a loop that prints odd numbers to the console
let some_numb = 10
for(let i=0; i<some_numb; i++){
    if (i%2!=0){
        console.log(i)
    }
}
