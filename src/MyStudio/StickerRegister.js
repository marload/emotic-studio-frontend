import React from "react";

import CheckBoxContent from "../SubPageContents/CheckBoxContent";
import TextAreaContent from "../SubPageContents/TextAreaContent";

class StickerRegisterPart1 extends React.Component {
  constructor() {
    super();
    this.state = {
      stickerGenreCheckBoxData: ["Sticker", "Animated Sticker"],
      supportedLanguage: [
        "Only Image",
        "한국어",
        "영어",
        "일본어",
        "중국어",
        "스페인어",
        "베트남어",
        "기타"
      ]
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
        <TextAreaContent
          title="키워드"
          isRequire={false}
          rows={8}
        ></TextAreaContent>
        <TextAreaContent
          title="스티커 스토리"
          isRequire={false}
          rows={8}
        ></TextAreaContent>
        <CheckBoxContent
          title="스티커 종류"
          isRequire={true}
          checkBox={this.state.supportedLanguage}
        ></CheckBoxContent>
        <CheckBoxContent
          title="판매가격"
          isRequire={true}
          checkBox={["무료", "0.9달러", "1.9달러"]}
        ></CheckBoxContent>
        <CheckBoxContent
          title="약관 확인"
          isRequire={true}
          checkBox={["약관에 동의합니다."]}
        ></CheckBoxContent>
      </div>
    );
  }
}

export default [<StickerRegisterPart1 />];
