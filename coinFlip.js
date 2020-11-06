const limit=11;
let win=0;
let count=0;
while(count<limit){
let num=Math.floor(Math.random()*10)%2;
if(num==0)
console.log('Head');
if(num==1)
console.log('Tail');
if(num==win){
    console.log('Congratulations Win !');
    count++;
}
}