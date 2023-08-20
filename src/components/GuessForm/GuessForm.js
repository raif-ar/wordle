import React from "react";

function GuessForm({ addItemToList }) {
  const [input, setInput] = React.useState("");

  function onSubmit(event) {
    event.preventDefault();
    console.log({ guess: input });
    addItemToList(input);
    setInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        pattern="\w{5,5}"
        onChange={(event) => setInput(event.target.value?.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
