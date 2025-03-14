import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="Dictionary mt-2 p-2">
      <div className="hero text-center">
        <h1>Dictionary</h1>
        <h2>Type a word to know its meaning </h2>
        <form onSubmit={handleSubmit}>
          <input
            className="m-2"
            type="search"
            placeholder="Type here..."
            onChange={handleWordChange}
          />
          <input className="m-2" type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}
