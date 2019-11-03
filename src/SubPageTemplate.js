import React from "react";
import "./scss/SubPageTemplate.scss";

import Navigation from "./SubPage/Navigation";

function SubPageTemplate({ header, data }) {
    return (
        <div className="sub-page">
            <Navigation header={header} data={data} />
        </div>
    );
}

export default SubPageTemplate;
