function startGame(e) {
    e.preventDefault();
    e.stopPropagation();
    game.start();
};

function rollDice(e) {
    e.preventDefault();
    game.randomDice();
    dice.textContent = game.dice;
    if (game.dice != 1) {
        game.activPlayer.currentScore += game.dice;
    }
    else {
        game.activPlayer.currentScore = 0;
        game.switchPlayer();
    }
    game.displayScore();
};

function saveScore(e) {
    e.preventDefault();
    game.activPlayer.globalScore += game.activPlayer.currentScore;
    game.activPlayer.currentScore = 0;
    game.displayScore();
    game.checkScore();
};

