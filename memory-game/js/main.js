console.log("Up and running");

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [ ];
let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped" + " " + cardsInPlay);
let cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("User flipped" + " " + cardsInPlay[1]);
if (i = 0, cardsInPlay.length === 2, ++i) {
	console.log(cardsInPlay.length);

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else{
		alert('Sorry try again');
	};
};
