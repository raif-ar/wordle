import React from "react";
import { range } from "../../utils";

const KEYBOARD_LETTERS = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

const LETTER_IN_ROWS = [10, 9, 7];

function Keyboard({ completedLetters }) {
  let count = -1;
  return (
    <>
      {LETTER_IN_ROWS.map((numLetters) => (
        <div className="keyboard-row" key={numLetters}>
          {range(numLetters).map(() => {
            count += 1;

            const letterToDisplay = KEYBOARD_LETTERS[count].toUpperCase();
            const status = completedLetters[letterToDisplay];
            const classes = status
              ? `keyboard-item ${status}`
              : "keyboard-item";

            return (
              <button className={classes} key={count}>
                {letterToDisplay}
              </button>
            );
          })}
        </div>
      ))}
    </>
  );
}

export default Keyboard;
