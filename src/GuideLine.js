import React from "react";

import "./scss/GuideLine.scss";

import About from "./Guide/About";
import Manual from "./Guide/Manual";
import ProcessInfo from "./Guide/ProcessInfo";

function GuideLine() {
    return (
        <div className="guide-line">
            <About />
            <Manual />
            <ProcessInfo />
        </div>
    );
}

export default GuideLine;
