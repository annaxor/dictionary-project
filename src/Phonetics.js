import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>

      <span className="Text"> {props.phonetic.text}</span>
    </div>
  );
}