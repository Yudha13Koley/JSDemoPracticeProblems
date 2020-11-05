// Get A Random Single Digit 
let a=Math.floor(Math.random()*10);
console.log('Value of a :'+a);

//Get a Dice Roll Number
let b=(Math.floor(Math.random()*10)%6)+1;
console.log('Dice no is : '+b);

//Get Two Dice Roll And Print Sum 
let c=(Math.floor(Math.random()*10)%6)+1;
console.log('Dice Roll no 1 : no is : '+c);
let d=(Math.floor(Math.random()*10)%6)+1;
console.log('Dice Roll no 2 : no is : '+d);
console.log('Sum of Dice Rolls :  '+(c+d));

//Reads 5 Random 2 digit values and calculates sum and avg 
let arr=[];
let sum=0;
console.log('Random Numbers Are : ')
for(i=0;i<5;i++){
    let num=0;
    while(num < 10 || num >99){
    num=Math.floor(Math.random()*100);
    }
    arr[i]=num;
    sum=sum+arr[i];
    console.log(arr[i]);
}
console.log('The Sum is : '+sum);
let avg=sum/arr.length;
console.log('The Average is : '+avg);

//Unit Conversion
const FEET_TO_INCH_FACTOR=12;
let inches=42;
let feets=inches/FEET_TO_INCH_FACTOR;
console.log('Inch '+inches+' is equal to '+feets+' feets .');

const FEET_TO_METER_FACTOR=0.3048;
let length =60;
let breadth=40;
let area_in_sqft=length*breadth;
let area_in_sqm=area_in_sqft*FEET_TO_METER_FACTOR*FEET_TO_METER_FACTOR;
console.log('The area of rectangular plot in sqft is '+area_in_sqft+' and in sqm is '+area_in_sqm);

const ACRE_TO_SQM_FACTOR=4046.86;
const NO_OF_PLOTS=25;
let area_in_acres=area_in_sqm*NO_OF_PLOTS/ACRE_TO_SQM_FACTOR;
console.log('The area of '+NO_OF_PLOTS+' rectangular plot in sqm is '+area_in_sqm*NO_OF_PLOTS+' in acres is '+area_in_acres);


