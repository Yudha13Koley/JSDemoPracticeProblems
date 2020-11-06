const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
if(input<1){
    console.log('Enter Valid Number !');
    return;
}
console.log('Factors of '+input+' are :');
for(i=1;i<=Math.sqrt(input);i++){
    if(input%i==0){
        console.log(i);
        if(i!=input/i){
        console.log(input/i);
        }
    }
}