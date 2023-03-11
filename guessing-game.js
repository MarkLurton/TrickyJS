function guessingGame() {
  const number = Math.floor(Math.random() * 100);
  let guesses = 0;
  let gameOver = false;
  return (game = (guess) => {
    if (!gameOver) {
      guesses++;
      if (guess < number) {
        return `${guess} is too low!`;
      } else if (guess > number) {
        return `${guess} is too high!`;
      } else {
        gameOver = true;
        return `You win! You found ${guess} in ${guesses} guesses.`;
      }
    } else {
      return "The game is over, you already won!";
    }
  });
}

module.exports = { guessingGame };
