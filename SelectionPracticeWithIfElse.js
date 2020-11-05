//Take the 5 random 3 digit numbers and find max min
let maximum=0;
let minimum=0;
arr=[];
console.log('The random numbers are : ')
for(i=0;i<5;i++){
    let num=0;
    while(num < 100 || num >999){
    num=Math.floor(Math.random()*1000);
    }
    arr[i]=num;
    console.log(arr[i]);
}
for(i=0;i<5;i++){
    if(i==0){
        minimum=arr[i];
        maximum=arr[i];
    }
    if(arr[i]>maximum){
        maximum=arr[i];
    }
    if(arr[i]<minimum){
        minimum=arr[i];
    }
}
console.log('Minimum no is '+minimum+' Maximum no is '+maximum);