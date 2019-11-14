import React from "react";
import "./scss/SubPageTemplate.scss";

import Navigation from "./SubPage/Navigation";
import Contents from "./SubPage/Contents";

function SubPageTemplate({ header, data, contentsJSX, completeButton }) {
    return (
        <div className="sub-page" stlye={{ backgroundColor: "#F5F5F5" }}>
            <Navigation header={header} data={data} />
            <Contents children={contentsJSX} completeButton={completeButton} />
        </div>
    );
}

export default SubPageTemplate;
