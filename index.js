//Coding Steps:

// For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
// You do not need to do anything special when there is a tie in a round.
// Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
// You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser's console.

// The completed project should, when executed, do the following:

// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

const suits = ['h','s','c','d']
const values = ['Ace','1','2','3','4','5','6','7','8','9','10','Jack','Queen','King']

class Card {
    constructor(suit,value,face){
        this.suit=suit;
        this.value= value;
        this.face= face;
    }
}

 class Player {
    constructor(num){
        this.name = `Player ${num}`;
        this.hand = [];
    }
 }

 class Game {
    constructor(cards){
        this.deck = [];
        this.makeDeck();
        this.round = 0;
        this.player1 = new Player(1);
        this.player2 = new Player(2);
        this.dealCards();
        this.flipCards();
    }

    makeDeck() {
        for (let x = 0; x < values.length; x++) {
            for (let suit of suits){
                let card = new Card(suit,x + 1, values[x]);
                this.deck.push(card);
            }
        }

        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

    dealCards() {
        this.player1.hand = this.deck.splice(0,26);
        this.player2.hand = this.deck.splice(0,26);
    }

    flipCards() {
    let player1Points = 0;
    let player2Points = 0;
    
    //display the scores and declare winnner
    for (let i = 0; i < this.player1.hand.length; i++){
        console.log(this.player2.hand[i].value);
        if (this.player1.hand[i].value > this.player2.hand[i].value){
            console.log(`Player 1 wins round!`)
            player1Points++
        }
        else if (this.player1.hand[i].value === this.player2.hand[i].value){
            console.log(`It's a tie!`)
        }
        else {
            console.log (`Player 2 wins round!`)
            player2Points++
        }
    }
    }

    
 }

 let war = new Game();

 