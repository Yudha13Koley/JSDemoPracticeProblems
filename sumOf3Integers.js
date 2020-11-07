const prompt = require('prompt-sync')();
let numbers=new Array();
numbers[0]=prompt('Enter first num : ');
numbers[1]=prompt('Enter second num : ');
numbers[2]= parseInt(0-(parseInt(numbers[0])+parseInt(numbers[1])));
console.log(numbers);
let sum=0;
numbers.forEach(num=>{sum+=parseInt(num);});
console.log('Sum is : '+sum);