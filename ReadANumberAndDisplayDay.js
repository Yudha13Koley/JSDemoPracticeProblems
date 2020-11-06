const myArgs=process.argv.slice(2);
let day=parseInt(myArgs[0]);
console.log('The day is : '+day);
switch(day){
    case 1 :  console.log('Sunday');
    break;
    case 2 :  console.log('Monday');
    break;
    case 3 :  console.log('Tuesday');
    break;
    case 4 :  console.log('Wednesday');
    break;
    case 5 :  console.log('Thursday');
    break;
    case 6 :  console.log('Friday');
    break;
    case 7 :  console.log('Saturday');
    break;
    default :  console.log('Invalid Date Given !');
}