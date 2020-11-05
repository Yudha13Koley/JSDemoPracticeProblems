var myArgs = process.argv.slice(2);
let day=parseInt(myArgs[0]);
let month=parseInt(myArgs[1]);
console.log('Date is '+day+'/'+month);
if(month>=3 && month <=6){
    if(month==3 && day >= 20){
        console.log('True');
    }
    else if(month==6 && day <= 20){
        console.log('True');
    }else if(month==4 || month==5){
    console.log('True');
    }else 
    console.log('False');
}
if(!(month>=3 && month <=6)){
console.log('False');
}