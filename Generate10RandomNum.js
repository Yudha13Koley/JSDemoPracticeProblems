//1 : Find second max and second min without sorting
const No_Of_ELEMENTS=10;
let count=0;
let numArray=new Array();
while(count<No_Of_ELEMENTS){
let a=0;
while(a<100 || a>999){
    a=Math.floor(Math.random()*1000); 
}
numArray.push(a);
count++;
}
console.log(numArray);
let max=0;
let min=0;
numArray.forEach(num=>{
    if(max==0)max=num;
    if(min==0)min=num;
    if(num>max){
        max=num;
    }
    if(num<min){
        min=num;
    }
});
console.log('Max : '+max+' Min : '+min);
let Smax=0;
let Smin=0;
numArray.forEach(num=>{
    if(!(num==max || num==min)){
    if(Smax==0)Smax=num;
    if(Smin==0)Smin=num;
    if(num>Smax){
        Smax=num;
    }
    if(num<Smin){
        Smin=num;
    }
}
});
console.log('Second Max : '+Smax+' Second Min : '+Smin);

//Second Max and Second Min WIth Sorting
numArray.sort();
console.log(numArray);
console.log('Second Max : '+numArray[numArray.length-2]+' Second Min : '+numArray[1]);