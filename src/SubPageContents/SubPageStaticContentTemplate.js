import React from "react";
import "./scss/SubPageStaticContentTemplate.scss";

class SubPageStaticContentTemplate extends React.Component {
    render() {
        return (
            <div className="subpage-static-content-template">
                <div className="subpage-static-content-template__title">
                    {this.props.title}
                </div>
                <div className="subpage-static-content-template__content-area">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default SubPageStaticContentTemplate;
