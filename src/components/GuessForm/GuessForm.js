import React from "react";

function GuessForm({ addItemToList, disabled }) {
  const [input, setInput] = React.useState("");

  function onSubmit(event) {
    event.preventDefault();
    addItemToList(input);
    setInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        autoComplete="off"
        required
        id="guess-input"
        type="text"
        value={input}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={disabled}
        onChange={(event) => setInput(event.target.value?.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
