import React from "react";

import SubPageContentTemplate from "./SubPangeContentTemplate";

import "./scss/CheckBoxContent.scss";
import Checkbox from "@material-ui/core/Checkbox";

class CheckBoxContent extends React.Component {
  render() {
    return (
      <SubPageContentTemplate
        title={this.props.title}
        isRequire={this.props.isRequire}
      >
        <div className="checkbox-content">
          {console.log(this.props)}
          {this.props.checkBox.map(data => {
            return (
              <div className="checkbox-content__ckbox-element">
                <Checkbox color="default" />
                <span className="checkbox-content__element-name">{data}</span>
              </div>
            );
          })}
        </div>
      </SubPageContentTemplate>
    );
  }
}

export default CheckBoxContent;
