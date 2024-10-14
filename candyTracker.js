let favCandy =[];

 let candy = prompt(" What is your favorite candy?");
if (candy){
favCandy.push(candy);
}
let displayElement = document.getElementById("candyDisplay");

displayElement.textContent = "Your favorite candy is " + favCandy + "!";

