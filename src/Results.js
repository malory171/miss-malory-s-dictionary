import React from "react";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="white-bg">
          <h2>{props.results.word}</h2>
          <h2 className="phonetic">{props.results.phonetic}</h2>
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
