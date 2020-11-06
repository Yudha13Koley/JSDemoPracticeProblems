const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
let sum=0;
for(i=1;i<=input;i++){
    let term=1/i;
    console.log(i+'th term is : '+term);
    sum=sum+term;
}
console.log('Summation is : '+sum);