import React from "react";

import "./scss/SubBanner.scss";

function SubBanner() {
    return (
        <div className="sub-banner">
            <img
                className="sub-banner__image"
                src="/images/sub-banner.svg"
                alt="sub banner"
            ></img>
        </div>
    );
}

export default SubBanner;
