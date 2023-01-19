function startGame(e) {
    e.preventDefault();
    e.stopPropagation();
    textP1.classList.add('active');
    textP2.classList.remove('active');
    dotP1.classList.remove('hide-element');
    dotP2.classList.add('hide-element');
    game.start();
};

function rollDice(e) {
    e.preventDefault();
    game.randomDice();
    
    if (game.dice != 1) {
        game.activPlayer.currentScore += game.dice;
        switch (game.dice) {
            case 2 : 
                game.displayTwo();
                break;
            case 3 : 
                game.displayThree();
                break;
            case 4 :
                game.displayFour();
                break;
            case 5 : 
                game.displayFive();
                break;
            case 6 :
                game.displaySix();
                break;
            default : 
            console.error("Une erreur s'est produite !");
        }
    }
    else {
        game.displayOne();
        game.activPlayer.currentScore = 0;
        game.displayScore();
        game.switchPlayer();
    }
    game.displayScore();
};

function saveScore(e) {
    e.preventDefault();
    game.activPlayer.globalScore += game.activPlayer.currentScore;
    game.activPlayer.currentScore = 0;
    game.displayOne();
    game.displayScore();
    game.checkScore();
};

