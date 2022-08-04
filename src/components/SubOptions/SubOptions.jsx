import React from "react";

import "./SubOptions.css";

const SubOptions = (props) => {
    const options = [
      {
        text: "Javascript",
        handler: props.actionProvider.handleJavascriptList,
        id: 1,
      },
      { text: "Data visualization", handler: () => {}, id: 2 },
      { text: "APIs", handler: () => {}, id: 3 },
      { text: "Security", handler: () => {}, id: 4 },
      { text: "Interview prep", handler: () => {}, id: 5 },
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-sub-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-sub-option-container">{optionsMarkup}</div>;
  };

  export default SubOptions;