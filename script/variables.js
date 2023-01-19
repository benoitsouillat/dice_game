var newGame = document.getElementById('new_game');
var roll = document.getElementById('roll');
var hold = document.getElementById('hold');
var dotP1 = document.getElementById('playerone').getElementsByClassName('bi')[0];
var dotP2 = document.getElementById('playertwo').getElementsByClassName('bi')[0];
var textP1 = document.getElementById('playerone').getElementsByClassName('player')[0];
var textP2 = document.getElementById('playertwo').getElementsByClassName('player')[0];
var winner = document.getElementById('winner');
var playerOneRound = document.getElementById("round-score-p1");
var playerTwoRound = document.getElementById("round-score-p2");
var playerOneGlobal = document.getElementById("gscore1");
var playerTwoGlobal = document.getElementById("gscore2");


class Player{
    constructor(name, globalScore, currentScore) {
        this.name = name
        this.globalScore = globalScore
        this.currentScore = currentScore
    }
   
}

/* class Dice{
    constructor(center, topLeft, topRight, botLeft, botRight, sixLeft, sixRight, dice)
    {
        this.center = center
        this.topLeft = topLeft
        this.topRight = topRight
        this.botLeft = botLeft
        this.botRight = botRight
        this.sixLeft = sixLeft
        this.sixRight = sixRight
        this.dice = dice
    }
    addHide()
    {
        elm.classList.add('hide-element');

    }
    removeHide()
    {
} */

class Game{
    constructor(playerOne, playerTwo)
    {
        this.playerOne = playerOne
        this.playerTwo = playerTwo
        this.activPlayer = playerOne
        this.dice = 1
       
    }

    switchPlayer()
    {
        if(this.activPlayer === this.playerOne)
        {
            this.activPlayer = this.playerTwo
            dotP1.classList.add('hide-element');
            dotP2.classList.remove('hide-element');
            textP1.classList.remove('active')
            textP2.classList.add('active');
        }
        else {
            this.activPlayer = this.playerOne
            dotP1.classList.remove('hide-element');
            dotP2.classList.add('hide-element');
            textP2.classList.remove('active')
            textP1.classList.add('active');
        }
    }
    displayScore()
    {
        playerOneRound.textContent = this.playerOne.currentScore;
        playerTwoRound.textContent = this.playerTwo.currentScore;
        playerOneGlobal.textContent = this.playerOne.globalScore;
        playerTwoGlobal.textContent = this.playerTwo.globalScore;
    }

    start()
    {
        this.playerOne = new Player("Player 1", 0, 0);
        this.playerTwo = new Player("Player 2", 0, 0);
        this.activPlayer = this.playerOne;
        this.displayScore();
        roll.classList.remove('hide-element');
        hold.classList.remove('hide-element');
        winner.classList.add('hide-element');
    }
    randomDice()
    {
        this.dice = Math.floor(Math.random() * 6 + 1);
        return this.dice;
    }
    checkScore()
    {
        if(this.activPlayer.globalScore >= 100)
        {
            roll.classList.add('hide-element');
            hold.classList.add('hide-element');
            winner.textContent = "Le joueur " + this.activPlayer.name + " a gagné la partie avec un score de " + this.activPlayer.globalScore;
            winner.classList.remove('hide-element');
            
        }
        this.switchPlayer();
    }
    hideAll()
    {
        center.classList.add('hide-element');
        topLeft.classList.add('hide-element');
        topRight.classList.add('hide-element');
        botLeft.classList.add('hide-element');
        botRight.classList.add('hide-element');
        sixLeft.classList.add('hide-element');
        sixRight.classList.add('hide-element');
    }
    removeAll()
    {
        center.classList.remove('hide-element');
        topLeft.classList.remove('hide-element');
        topRight.classList.remove('hide-element');
        botLeft.classList.remove('hide-element');
        botRight.classList.remove('hide-element');
        sixLeft.classList.remove('hide-element');
        sixRight.classList.remove('hide-element');
    }
    displayOne()
    {
        this.hideAll();
        center.classList.remove('hide-element');
    }
    displayTwo()
    {
        this.hideAll();
        topLeft.classList.remove('hide-element');
        botRight.classList.remove('hide-element');
    }
    displayThree()
    {
        this.displayTwo();
        center.classList.remove('hide-element');

    }
    displayFour()
    {
        this.displayTwo();
        botLeft.classList.remove('hide-element');
        topRight.classList.remove('hide-element');
    }
    displayFive()
    {
        this.removeAll();
        sixLeft.classList.add('hide-element');
        sixRight.classList.add('hide-element');
    }
    displaySix()
    {
        this.removeAll();
        center.classList.add('hide-element');
    }

}

let playerOne = new Player("Player 1", 0, 0);
let playerTwo = new Player("Player 2", 0, 0);
let game = new Game(playerOne, playerTwo);