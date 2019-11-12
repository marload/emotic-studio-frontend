import React from "react";
import "./scss/SubPageTemplate.scss";

import Navigation from "./SubPage/Navigation";
import Contents from "./SubPage/Contents";

function SubPageTemplate({ header, data, contentsJSX }) {
  return (
    <div className="sub-page">
      <Navigation header={header} data={data} />
      <Contents children={contentsJSX} />
    </div>
  );
}

export default SubPageTemplate;
