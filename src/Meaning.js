import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning white-bg">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>• {definition.definition}</p>
            <p>
              <em>{definition.example}</em>
            </p>
            <br />
          </div>
        );
      })}
    </div>
  );
}
