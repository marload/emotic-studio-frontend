import React from "react";

class SubPageContentTemplate extends React.Component {
    render() {
        <div className="subpage-content-template">
            <div className="subpage-content-template__title">
                {this.props.title}
                {this.props.isRequire ? (
                    <span style={{ color: "red" }}> *</span>
                ) : (
                    <span></span>
                )}
            </div>
            <div className="subpage-content-template__content-area">
                {this.props.children}
            </div>
        </div>;
    }
}

export default SubPageContentTemplate;
