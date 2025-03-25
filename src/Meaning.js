import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>
          {props.meaning.partOfSpeech.charAt(0).toUpperCase() +
            props.meaning.partOfSpeech.slice(1)}
        </h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>• {definition.definition}</p>
              <p>
                <em className="example">{definition.example}</em>
              </p>
              <br />
            </div>
          );
        })}
      </section>
    </div>
  );
}
