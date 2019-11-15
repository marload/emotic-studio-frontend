import React from "react";

import StickerRegister from "./MyStudio/StickerRegister";
import StickerManage from "./MyStudio/StickerManagement";
import OneStickerManagement from "./MyStudio/OneStickerManagement";

import "./scss/MyStudio.scss";

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
                <Route
                    exact
                    path="/mystudio/sticker-manage"
                    component={StickerManage}
                ></Route>
                <Route
                    exact
                    path="/mystudio/sticker-lion"
                    component={OneStickerManagement}
                ></Route>
            </div>
        );
    }
}

export default MyStudio;
