import React from "react";

import StickerRegister from "./MyStudio/StickerRegister";

import { Route } from "react-router-dom";

class MyStudio extends React.Component {
  render() {
    return (
      <div className="my-studio">
        <Route
          exact
          path="/mystudio/sticker-register"
          component={StickerRegister}
        ></Route>
      </div>
    );
  }
}

export default MyStudio;
