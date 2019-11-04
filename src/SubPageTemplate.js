import React from "react";
import "./scss/SubPageTemplate.scss";

import Navigation from "./SubPage/Navigation";
import Contents from "./SubPage/Contents";

function SubPageTemplate({ header, data }) {
    return (
        <div className="sub-page">
            <Navigation header={header} data={data} />
            <Contents />
        </div>
    );
}

export default SubPageTemplate;
