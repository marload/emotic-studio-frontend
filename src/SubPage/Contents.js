import React from "react";

import "./scss/Contents.scss";

class Contents extends React.Component {
    render() {
        return (
            <div className="contents-page">
                {this.props.children.map(jsx => {
                    return <div className="contents-page__elements">{jsx}</div>;
                })}
            </div>
        );
    }
}

export default Contents;
