import React from "react";

function ResultBanner({ isWin, answer, numOfGuesses, onRestartGame }) {
  return isWin ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numOfGuesses} guesses</strong>.
      </p>
      {/* TODO: Make this a component */}
      <button className="restart-btn" onClick={onRestartGame}>
        Restart Game
      </button>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      {/* TODO: Make this a component */}
      <button className="restart-btn" onClick={onRestartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default ResultBanner;
