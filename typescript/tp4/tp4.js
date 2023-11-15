let secretNumber = Math.floor(Math.random() * 21);
let score = 20;
let highscore = 0;

document.getElementById('check-btn').addEventListener('click', () => {
	const guess = Number(document.getElementById('guess').value);
	const message = document.querySelector('.message');

	if (!guess) {
		message.textContent = 'Pas de nombre !';
		message.style.color = 'red';
	} else if (guess === secretNumber) {
		message.textContent = 'Correct !';
		message.style.color = 'green';
		if (score > highscore) {
			highscore = score;
			document.getElementById('highscore').textContent = highscore;
		}
	} else if (guess > secretNumber) {
		message.textContent = 'Trop haut !';
		message.style.color = 'red';
		score--;
	} else if (guess < secretNumber) {
		message.textContent = 'Trop bas !';
		message.style.color = 'red';
		score--;
	}

	document.getElementById('score').textContent = score;
});

document.getElementById('reset-btn').addEventListener('click', resetGame);

function resetGame() {
	score = 20;
	secretNumber = Math.floor(Math.random() * 21);
	document.getElementById('score').textContent = score;
	document.querySelector('.message').textContent = 'Commencez à deviner...';
	document.querySelector('.message').style.color = '#333'; // Ou toute autre couleur par défaut
	document.getElementById('guess').value = '';
}
