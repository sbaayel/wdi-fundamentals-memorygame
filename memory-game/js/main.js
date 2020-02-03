console.log("Up and running");

let cards = ["queen", "queen", "king", "king"];
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
console.log("User flipped" + " " + cards[cardId]);
cardsInPlay.push(cards[cardId]);

}
flipCard (0);
flipCard (2);
