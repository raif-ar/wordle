import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessForm from "../GuessForm/GuessForm";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function addGuessToList(guess) {
    setGuessList([...guessList, guess]);
  }

  return (
    <>
      <GuessResult items={guessList} />
      <GuessForm addItemToList={addGuessToList} />
    </>
  );
}

export default Game;
