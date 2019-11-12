import React from "react";

import CheckBoxContent from "../SubPageContents/CheckBoxContent";
import TextAreaContent from "../SubPageContents/TextAreaContent";

class StickerRegisterPart1 extends React.Component {
  constructor() {
    super();
    this.state = {
      stickerGenreCheckBoxData: ["Sticker", "Animated Sticker"]
    };
  }
  render() {
    return (
      <div className="sticker-register">
        <CheckBoxContent
          title="스티커 종류"
          isRequire={true}
          checkBox={this.state.stickerGenreCheckBoxData}
        ></CheckBoxContent>
        <TextAreaContent
          title="스티커 이름"
          isRequire={true}
          rows={2}
        ></TextAreaContent>
      </div>
    );
  }
}

export default [<StickerRegisterPart1 />];
