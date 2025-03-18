import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);

  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms white-bg">
        <h3>Synonyms</h3>
        <div className="all-synonyms">
          {props.synonyms.map(function (synonyms, index) {
            return (
              <div className="d-inline-flex p-1" key={index}>
                • {synonyms}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
