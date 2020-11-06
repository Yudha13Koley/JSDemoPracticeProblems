const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
const limit=256;
console.log('The powers of 2s upto '+limit+' are : ');
let term=0;
let i=0;
while(term<Math.pow(2,input) && term<256){
    term=Math.pow(2,i);
    i++;
    console.log(term);
}