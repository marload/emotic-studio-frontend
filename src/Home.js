import React from "react";
import Header from "./Interface/Header";
import MainBanner from "./Home/MainBanner";
import SubBanner from "./Home/SubBanner";
import ProcessInfo from "./Home/ProcessInfo";

function Home() {
    return (
        <div className="home">
            <Header />
            <MainBanner />
            <SubBanner />
            <ProcessInfo />
        </div>
    );
}

export default Home;
