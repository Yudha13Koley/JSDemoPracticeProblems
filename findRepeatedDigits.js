let numArr=new Array();
for(i=0;i<=100;i++){
    let div=Math.floor(i/10);
    let rem=i%10;
    if(div==rem){
        numArr.push(i);
    }
}
console.log(numArr);