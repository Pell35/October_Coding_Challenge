/*Day 1
message = "Happy Fall!";
console.log(message); */
//Day 2 Candy per cost calculator

function howMuchCandy(myMoney, cost){
let quantity = Math.round(myMoney/cost)
return quantity + " candy bars is how much you can buy with $" + myMoney
}
console.log(howMuchCandy(10, 1.25));