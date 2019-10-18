import React from "react";

import MainBanner from "./Home/MainBanner";
import SubBanner from "./Home/SubBanner";
import ProcessInfo from "./Home/ProcessInfo";
import ContentsBanner from "./Home/ContentsBanner";

const contentsBannerData1 = {
    title: "EmoticBox는 다양한 이모티콘과 함께 합니다.",
    subTitle:
        "다양한 개성의 이모티콘들이 EmoticBox를 통해 유저들에게 다가갑니다.",
    contentsData: [
        {
            title: "정보미기재",
            image: "/images/emoji-example.jpg"
        },
        {
            title: "정보미기재",
            image: "/images/emoji-example.jpg"
        },
        {
            title: "정보미기재",
            image: "/images/emoji-example.jpg"
        },
        {
            title: "정보미기재",
            image: "/images/emoji-example.jpg"
        },
        {
            title: "정보미기재",
            image: "/images/emoji-example.jpg"
        }
    ]
};

const contentsBannerData2 = {
    title: "EmoticBox는 다양한 플랫폼과 함께 합니다.",
    subTitle:
        "더이상 특정 플랫폼에 맞춰 이모티콘을 맞춰 갈 필요가 없습니다. 다양한 플랫폼에 제공함으로써 크리에이터의 다양성을 지켜나갑니다.",
    contentsData: [
        {
            title: "정보미기재",
            image: "#"
        },
        {
            title: "정보미기재",
            image: "#"
        },
        {
            title: "정보미기재",
            image: "#"
        },
        {
            title: "정보미기재",
            image: "#"
        },
        {
            title: "정보미기재",
            image: "#"
        }
    ]
};

function Home() {
    return (
        <div className="home">
            <MainBanner />
            <SubBanner />
            <ProcessInfo />
            <ContentsBanner data={contentsBannerData1} />
            <ContentsBanner data={contentsBannerData2} />
        </div>
    );
}

export default Home;
