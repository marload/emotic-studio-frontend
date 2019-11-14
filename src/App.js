import React from "react";
import { Route } from "react-router-dom";

import Header from "./Interface/Header";
import Footer from "./Interface/Footer";

import Home from "./Home";
import GuideLine from "./GuideLine";
import Faq from "./Faq";
import MyStudio from "./MyStudio";

import "./scss/App.scss";

const navigationData = [
    {
        title: "서비스 설정",
        link: "/faq/service"
    },
    {
        title: "계정 등록",
        link: "/faq/account-register"
    },
    {
        title: "스티커 등록",
        link: "/faq/sticker-register"
    },
    {
        title: "스티커 심사",
        link: "/faq/sticker-judge"
    },
    {
        title: "스티커 상품화",
        link: "/faq/stciker-sell"
    },
    {
        title: "수익",
        link: "/faq/benefit"
    },
    {
        title: "제휴 서비스 제도",
        link: "/faq/alliance"
    }
];

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="main-contents">
                <Route exact path="/" component={Home} />
                <Route exact path="/guide" component={GuideLine} />
                <Route path="/faq" component={Faq}></Route>
                <Route path="/mystudio" component={MyStudio} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
