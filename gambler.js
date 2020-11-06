let money=100;
let countWin=0;
let countBet=0;
let winHeads=0;
while(money>0 && money<200){
    let num=Math.floor(Math.random()*10)%2;
    countBet++;
    if(num==winHeads){
        money++;
        countWin++;
    }
    if(num==1){
        money--;
    }
}
if(money==0){
    console.log('Bankrupt ! Bets Played '+countBet+' Wins '+countWin+' Money '+money);
}else
console.log('Goal Acheived ! Bets Played '+countBet+' Wins '+countWin+' Money '+money);