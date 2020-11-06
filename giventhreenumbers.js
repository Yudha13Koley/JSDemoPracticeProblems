const myArgs=process.argv.slice(2);
let a=parseInt(myArgs[0]);
let b=parseInt(myArgs[1]);
let c=parseInt(myArgs[2]);
console.log('The Values Are A : '+a+' B : '+b+' C : '+c);
let d=a+b*c;
let e=a%b+c;
let f=c+a/b;
let g=a*b+c;
console.log('The Values of Operations : '+d+' '+e+' '+f+' '+g);
let minimum=d;
let maximum=d;
if(e>maximum){
    maximum=e;
}else if(e<minimum){
    minimum=e;
}
if(f>maximum){
    maximum=f;
}else if(f<minimum){
    minimum=f;
}
if(g>maximum){
    maximum=g;
}else if(g<minimum){
    minimum=g;
}
console.log('Minimum is : '+minimum+' Maximum is : '+maximum);