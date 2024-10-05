/*Day 1
message = "Happy Fall!";
console.log(message); */
//Day 2 Candy per cost calculator

function howMuchCandy(myMoney, cost){
let quantity = Math.round(myMoney/cost)
return quantity + " candy bars is how much you can buy with $" + myMoney
}
console.log(howMuchCandy(10, 1.25));
//Day 3, it just wanted a basic loop, but I used a function to make a simple countdown until Halloween
function countdown(number){
     for(let i=number; i>= 0; i--){
          console.log(i + " days til Halloween!")}
 }

countdown(10);
//Day 4, loop through array of activities
let fallActivities = ["carving pumpkins", "playing in leaves", "drinking apple cider", "going to the pumpkin patch", "watch a Halloween themed movie"];

function chooseActivity() {
const randomIndex = Math.floor(Math.random() * fallActivities.length)
console.log("Today's activity is " + fallActivities[randomIndex] )
}
chooseActivity();