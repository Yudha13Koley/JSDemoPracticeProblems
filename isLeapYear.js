var myArgs = process.argv.slice(2);
let year=parseInt(myArgs[0]);
console.log('Year is : '+year);
if((year%4 == 0 && year%100 != 0)||(year%400 == 0)){
    console.log('This Year '+year+' is Leap Year !');
}else
console.log('This Year '+year+' is Not Leap Year !');