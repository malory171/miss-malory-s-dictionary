import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary m-1 p-1">
        <div className="hero text-center">
          <h1>Dictionary</h1>
          <h2>Type a word to know its meaning </h2>
          <form onSubmit={handleSubmit}>
            <input
              className="search-input m-1 custom-color"
              type="search"
              placeholder="Type here..."
              autoFocus
              onChange={handleWordChange}
            />
            <input className="m-2" type="submit" value="Search" />
          </form>
          <div className="hint">
            e.g.: sunrise, travel, earth, airplane, ...
          </div>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
