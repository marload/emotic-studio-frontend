import React from "react";

import FileDrop from "react-file-drop";

import "./scss/ImageUploadContent.scss";

class ImageUploadContent extends React.Component {
    constructor() {
        super();
        this.state = {
            imageOn: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]
        };
    }

    imageDrop(idx) {
        console.log("drop");
        const imageOn = this.state.imageOn;
        imageOn[idx] = true;
        this.setState({
            imageOn: imageOn,
            ...this.setState
        });
    }

    render() {
        return (
            <div className="image-upload-content">
                <div className="image-upload-content__title">
                    {this.props.title}
                    <span style={{ color: "red", fontSize: "1.0rem" }}> *</span>
                    <div className="image-upload-content__clause-check">
                        가이드 라인 확인
                    </div>
                </div>
                <div className="image-upload-content__grid-wrapper">
                    {[...Array(24).keys()].map((key, idx) => {
                        if (this.state.imageOn[idx] === true) {
                            return (
                                <img
                                    src={"/images/lion/" + (idx + 1) + ".gif"}
                                    alt="img"
                                    key={key}
                                    className="image-upload-content__grid-element"
                                ></img>
                            );
                        } else {
                            return (
                                <div
                                    className="image-upload-content__grid-element"
                                    key={key}
                                >
                                    <FileDrop
                                        onDrop={() => this.imageDrop(idx)}
                                    >
                                        <div className="grid-element__plus-icon">
                                            +
                                        </div>
                                    </FileDrop>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default ImageUploadContent;
