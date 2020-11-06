const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
let result=false;
if(input==1){
    console.log(input+' is neither prime nor composite');
}
for(i=2;i<=Math.sqrt(input);i++){
    if(input%i==0){
        console.log(input+' is a Composite No :');
        result=true;
        break;
    }
}
if(result==false && input != 1){
    console.log(input+' is a Prime No :');
}