import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

import GuessForm from "../GuessForm/GuessForm";
import GuessResult from "../GuessResult/GuessResult";
import ResultBanner from "../ResultBanner/ResultBanner";
import Keyboard from "../Keyboard/Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameResult, setGameResult] = React.useState({
    isCompleted: false,
    isWin: false,
  });

  const uniqueLettersGuessed = React.useMemo(() => {
    const lettersGuessedDict = {};
    const allLettersGuessed = guessList.flat();

    allLettersGuessed.forEach((item) => {
      if (lettersGuessedDict[item.letter]) {
        const existingStatus = lettersGuessedDict[item.letter];

        const misplacedCondition =
          existingStatus === "misplaced" && item.status !== "incorrect";
        if (existingStatus === "incorrect" || misplacedCondition) {
          lettersGuessedDict[item.letter] = item.status;
        }
      } else {
        lettersGuessedDict[item.letter] = item.status;
      }
    });

    return lettersGuessedDict;
  }, [guessList]);

  function addGuessToList(guess) {
    const checkedGuess = checkGuess(guess, answer);
    const nextGuestList = [...guessList, checkedGuess];
    setGuessList(nextGuestList);

    if (guess === answer) {
      setGameResult({ isCompleted: true, isWin: true });
      return;
    }

    if (nextGuestList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameResult({ isCompleted: true, isWin: false });
    }
  }

  return (
    <>
      {gameResult.isCompleted && (
        <ResultBanner
          isWin={gameResult.isWin}
          answer={answer}
          numOfGuesses={guessList.length}
        />
      )}
      <GuessResult items={guessList} />
      <GuessForm
        addItemToList={addGuessToList}
        disabled={gameResult.isCompleted}
      />
      <Keyboard completedLetters={uniqueLettersGuessed} />
    </>
  );
}

export default Game;
