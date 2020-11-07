const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
if(input<1){
    console.log('Enter Valid Number !');
    return;
}
console.log('Factors of '+input+' are :');
let factors=new Array();
for(i=1;i<=Math.sqrt(input);i++){
    if(input%i==0){
        factors.push(i);
        if(i!=input/i){
        factors.push(input/i);
        }
    }
}
factors.sort((a,b)=>a-b);
console.log(factors);