const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
if(input<1){
    console.log('Enter Valid Number : ');
    return;
}
let mul=1;
for(i=input;i>=1;i--){
    mul=mul*i;
}
console.log('Factorial of '+input+' is '+mul);