import React from "react";
import { range } from "../../utils";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResult({ items }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row) => (
        <Guess key={row} guess={items[row] ?? []} />
      ))}
    </div>
  );
}

export default GuessResult;
