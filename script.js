const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('check');
const messageElement = document.getElementById('message');

checkButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        messageElement.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        messageElement.style.color = 'green';
        guessInput.disabled = true;
        checkButton.disabled = true;
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'Try a higher number.';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Try a lower number.';
        messageElement.style.color = 'red';
    }
});
