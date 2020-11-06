const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
if(input==1){
    console.log('Unit');
}else if(input==10){
    console.log('Ten');
}else if(input==100){
    console.log('Hundred');
}else if(input==1000){
    console.log('Thousand');
}else
console.log('Not in unit,ten,hundred,thousand !');