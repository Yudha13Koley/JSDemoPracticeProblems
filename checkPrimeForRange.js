const myArgs=process.argv.slice(2);
let start=parseInt(myArgs[0]);
let end=parseInt(myArgs[1]);
if(start>end || start<1 || end<1){
    console.log('Define Range Properly (Start,end) : ');
    return;
}
for(i=start;i<=end;i++){
let result=false;
if(i==1){
    console.log(i+' is neither prime nor composite');
}
for(j=2;j<=Math.sqrt(i);j++){
    if(i%j==0){
        console.log(i+' is a Composite No :');
        result=true;
        break;
    }
}
if(result==false && i != 1){
    console.log(i+' is a Prime No :');
}
}