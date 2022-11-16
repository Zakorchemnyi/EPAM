//1.Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular 
//expression that matches the strings ahb, acb, aeb by pattern: letter 'a', 
//any character, letter 'b'
let some_str = 'ahb acb aeb aeeb adcb axeb'
let reg_ex = /a[a-z]b/g;
console.log(some_str.match(reg_ex));

//2.Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 
//without capturing the rest
let second_str = '2 + 3 223 2223';
let re = /2 [\+] 3/g;
console.log(second_str.match(re));

//3.Get the day, month and year of the current date and output it to the console
//separately
const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();
console.log(day);
console.log(month);
console.log(year);