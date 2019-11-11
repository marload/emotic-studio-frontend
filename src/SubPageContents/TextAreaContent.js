import React from "react";

import "./scss/TextAreaContent.scss";

import SubPageContentTemplate from "./SubPangeContentTemplate";

class TextAreaContent extends React.Component {
    render() {
        return (
            <SubPageContentTemplate
                title={this.props.title}
                isRequire={this.props.isRequire}
            >
                <div className="text-area-content">
                    <textarea
                        className="text-area-content__input"
                        rows={this.props.rows}
                    ></textarea>
                </div>
            </SubPageContentTemplate>
        );
    }
}

export default TextAreaContent;
