console.log("Up and running");

let cards = [
  {
   rank : "queen",
   suit : "hearts",
   cardImage : "images/queen-of-hearts.png"
  },
  {
   rank : "queen",
   suit : "diamonds",
   cardImage : "images/queen-of-diamonds.png"
  },
  {
  	rank : "king",
  	suit : "hearts",
  	cardImage : "images/king-of-hearts.png"
  },
  {
  	rank : "king",
  	suit : "diamonds",
  	cardImage : "images/king-of-diamonds"
  }
];
let cardsInPlay = [ ];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else{
		alert('Sorry try again');
	}
}

function flipCard(cardId){

if (i = 0, cardsInPlay.length === 2, ++i) {
	console.log(cardsInPlay.length);

checkForMatch();		
}
console.log("User flipped" + " " + cards[0].rank);

console.log("User flipped" + " " + cards[2].rank);

console.log("User flipped" + " " + cards[2].suit);
cardsInPlay.push(cards[cardId].suit);

console.log("User flipped" + " " + cards[2].cardImage);
cardsInPlay.push(cards[cardId].cardImage);

}
flipCard (0);
flipCard (0);







