import React from "react";

import "./scss/CheckBoxContent.scss";
import Checkbox from "@material-ui/core/Checkbox";

class CheckBoxContent extends React.Component {
    render() {
        return (
            <div className="check-box-content">
                <div className="check-box-content__title">
                    {this.props.title}
                </div>
                <div className="check-box-content__checkbox-grid">
                    {this.props.checkBox.stickerGenreCheckBoxData.map(data => {
                        return (
                            <div className="checkbox-grid__element">
                                <Checkbox color="default" />
                                <span className="checkbox-grid__name">
                                    {data}
                                </span>
                            </div>
                        );
                    })}
                    {console.log(this.props)}
                </div>
            </div>
        );
    }
}

export default CheckBoxContent;
