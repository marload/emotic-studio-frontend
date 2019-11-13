import React from "react";

import "./scss/ImageUploadContent.scss";

class ImageUploadContent extends React.Component {
  constructor() {
    super();
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
          {[...Array(24).keys()].map(key => {
            return (
              <button className="image-upload-content__grid-element" key={key}>
                <span className="grid-element__plus-icon">+</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ImageUploadContent;
