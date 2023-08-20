import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, 5).map((col) => (
        <span key={col} className="cell">
          {guess[col] ?? ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
