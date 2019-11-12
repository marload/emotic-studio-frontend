import React from "react";

import SubPageTemplate from "./SubPageTemplate";

import StickerRegister from "./MyStudio/StickerRegister";

import Header from "./Interface/Header";

const navigationData = [
  {
    title: "스티커 등록",
    link: "/mystudio/sticker-register"
  },
  {
    title: "스티커 관리",
    link: "/mystudio/sticker-manage"
  },
  {
    title: "계정 관리",
    link: "/mystudio/account-manage"
  },
  {
    title: "지갑",
    link: "/mystudio/wallet"
  }
];

class MyStudio extends React.Component {
  render() {
    return (
      <div className="my-studio">
        <SubPageTemplate
          header="MyStudio"
          data={navigationData}
          contentsJSX={StickerRegister}
        ></SubPageTemplate>
      </div>
    );
  }
}

export default MyStudio;
