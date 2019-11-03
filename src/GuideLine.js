import React from "react";

import "./scss/GuideLine.scss";

import About from "./Guide/About";
import Manual from "./Guide/Manual";

function GuideLine() {
    return (
        <div className="guide-line">
            <About />
            <Manual />
        </div>
    );
}

export default GuideLine;
