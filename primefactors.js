const prompt = require('prompt-sync')();
let num=prompt('Enter a Number To Get Its Prime Factors : ');
console.log('The number is : '+num);
function primeFactors(n){
    var factors = [], 
        divisor = 2;
    while(n>=2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
  }
  let primeFactorsArr=primeFactors(num);
  console.log(primeFactorsArr);