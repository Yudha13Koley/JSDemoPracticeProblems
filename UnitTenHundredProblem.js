const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
switch(input){
    case 1 : console.log('Unit');
    break;
    case 10 : console.log('Ten');
    break;
    case 100 : console.log('Hundred');
    break;
    case 1000 : console.log('Thousand');
    break;
    default : console.log('Not in unit,ten,hundred,thousand !');
}