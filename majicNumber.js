const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
if(input >100 || input < 1){
    console.log('Enter Valid No : ');
    return;
}
let lower=0;
let upper=100;
let mid=(lower+upper)/2;
while(mid!=input){
    if(input>mid){
        lower=mid;
        mid=(lower+upper)/2;
    }
    if(input<mid){
        upper=mid;
        mid=(lower+upper)/2;
    }
}
if(mid==input){
    console.log('The number given is '+input+' and generated is : '+mid);
}