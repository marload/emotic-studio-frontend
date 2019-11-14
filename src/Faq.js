import React from "react";
import SubPageTemplate from "./SubPageTemplate";

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

function Faq() {
    return (
        <div className="faq">
            <SubPageTemplate
                header="FAQ"
                data={navigationData}
                contentsJSX={[]}
            ></SubPageTemplate>
        </div>
    );
}

export default Faq;
