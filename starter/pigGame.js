var newGame = document.querySelector(".btn-new");
var rollDice = document.querySelector(".btn-roll");
var hold = document.querySelector(".btn-hold");
var dice = document.querySelector(".dice");
var player0Panel = document.querySelector(".player-0-panel");
var player1Panel = document.querySelector(".player-1-panel");
var playerName0 = document.getElementById("name-0");
var playerName1 = document.getElementById("name-1");
var totalScore0 = document.getElementById("total-0");
var totalScore1 = document.getElementById("total-1");
var currentScore0 = document.getElementById("current-score-0");
var currentScore1 = document.getElementById("current-score-1");

var totalScores, currentScore, activePlayer, gamePlaying, previousDice;

init(); 

newGame.addEventListener('click', init);
	
rollDice.addEventListener("click", function() {
	if (gamePlaying) {
		var diceNum = Math.floor(Math.random() * 6) + 1;
		dice.style.display = "block";
		dice.src = "dice-" + diceNum + ".png";
		if (diceNum === 6 && previousDice === 6) {
			totalScores[activePlayer] = 0;
			document.querySelector("#total-" + activePlayer).textContent = 0;
			document.querySelector("#current-score-" + activePlayer).textContent = 0;
			nextPlayer();
		}
		else if (diceNum !== 1) {
			currentScore += diceNum;
			document.querySelector("#current-score-" + activePlayer).textContent = currentScore;
		} else {
			nextPlayer();
		}
	previousDice = diceNum;
	}

});

hold.addEventListener("click", function() {
	if (gamePlaying) {
		totalScores[activePlayer] += currentScore;
		document.querySelector("#total-" + activePlayer).textContent = totalScores[activePlayer];
		if (totalScores[activePlayer] >= 100) {
			gamePlaying = false;
			document.querySelector(".dice").style.display = "none";
			document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
		} else {
			nextPlayer();
		}
	}
	
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    currentScore = 0;

    currentScore0.textContent = "0";
    currentScore1.textContent = "0";
 
    player0Panel.classList.toggle("active");
    player1Panel.classList.toggle("active");
 
    // dice.style.display = 'none';
}


function init() {
	totalScores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	dice.style.display = "none";
	
    totalScore0.textContent = "0";
    totalScore1.textContent = "0";

    currentScore0.textContent = "0";
    currentScore1.textContent = "0";

    playerName0.textContent = "Player 1";
    playerName1.textContent = "Player 2";

    player0Panel.classList.remove("winner");
    player1Panel.classList.remove("winner");

    player0Panel.classList.remove("active");
    player1Panel.classList.remove("active");
    
    player0Panel.classList.add("active");
}










