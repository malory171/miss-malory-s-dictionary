import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching fo ${word}`);
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
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
