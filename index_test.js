const expect = chai.expect
const assert = chai.assert

describe('Week 6 Assignment Tests:', () => {
    describe('Display outcome of card game', () => {
      it('', () => {
        // Copy & paste your debugged code from index.js
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
        }//player 1 or 2 with empty hand 
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

 
      })
  
      describe('', () => {
        it('#Should match', () => {
          function sumOfTwoNumbers(num1, num2) {
            num1 + num2
          }
  
          expect(sumOfTwoNumbers(2, 3)).to.equal(5)
        })
      })
    })
    
  })