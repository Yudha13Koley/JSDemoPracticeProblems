const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
let choice=parseInt(myArgs[1]);
console.log('Length in Feet is : '+input+' feets');
const FEET_TO_INCH_FACTOR=12;
const FEET_TO_METER_FACTOR=0.3048;
switch(choice){
    case 1 : console.log(input+' feets is converted to inches : '+input*FEET_TO_INCH_FACTOR+' inches');
    break;
    case 2 : console.log(input+' feets is converted to meters : '+input*FEET_TO_METER_FACTOR+' meters');
    break;
    default : console.log('Choose Proper Converter : (1 or 2) : ');
}
