import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((col) => {
        const letterToDisplay = guess ? guess[col].letter : undefined;
        const classes = guess ? `cell ${guess[col].status}` : "cell";
        return (
          <span key={col} className={classes}>
            {letterToDisplay}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
