import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics.text);

  let audio = new Audio(props.phonetics.audio);
  const start = () => {
    audio.play();
  };

  if (props.phonetics.audio) {
    return (
      <div className="Phonetics d-inline-flex">
        <a
          href={props.phonetics.audio}
          className="phonetics-audio"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i
            className="fa-solid fa-volume-low custom-color"
            onClick={start}
          ></i>
        </a>
        <h2 className="phonetics-text d-flex text-with-icon">
          {props.phonetics.text}
        </h2>
      </div>
    );
  } else {
    return (
      <div className="Phonetics d-inline-flex">
        <h2 className="phonetics-text">{props.phonetics.text}</h2>
      </div>
    );
  }
}
