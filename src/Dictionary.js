import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
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
    <div className="Dictionary m-1 p-1">
      <div className="hero text-center">
        <h1>Dictionary</h1>
        <h2>Type a word to know its meaning </h2>
        <form onSubmit={handleSubmit}>
          <input
            className="m-1 custom-color"
            type="search"
            placeholder="Type here..."
            autoFocus
            onChange={handleWordChange}
          />
          <input className="m-2" type="submit" value="Search" />
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
