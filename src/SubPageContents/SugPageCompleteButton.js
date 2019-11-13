import React from "react";

import "./scss/SugPageCompleteButton.scss";

function SubPageCompleteButton({ text }) {
  return (
    <div className="sub-page-complete-button-wrapper">
      <button className="sub-page-complete-button">{text}</button>
    </div>
  );
}

export default SubPageCompleteButton;
