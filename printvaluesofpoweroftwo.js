const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
console.log('The powers of 2s are : ');
for(i=0;Math.pow(2,i)<=Math.pow(2,input);i++){
    console.log(Math.pow(2,i));
}