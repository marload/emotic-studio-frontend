import React from "react";

import "./scss/ProcessInfoItem.scss";
import "./scss/ProcessInfo.scss";

const processInfoItemData = [
    {
        order: "01",
        title: "계정 등록",
        paragraph:
            "개인과 특정 단체, 기업에 상관 없이 누구나 자신이 표현하고 싶은 것을 그리는 'EmoticBox' 이모티콘 크리에이터가 되어보세요.",
        image: "/images/reg-1.svg"
    },
    {
        order: "02",
        title: "이모티콘 등록",
        paragraph:
            "가이드 라인에 주의하여, 스티커, 애니메이션 스티커, 이모티콘 등 다양한 작품을 만들어 등록해주세요.",
        image: "/images/reg-2.svg"
    },
    {
        order: "03",
        title: "이모티콘 심사",
        paragraph:
            "가이드 라인과 저작권 등 이모티콘을 2~3일에 거쳐 심사합니다.",
        image: "/images/reg-3.svg"
    },
    {
        order: "04",
        title: "이모티콘 상품화",
        paragraph: "승인된 이모티콘이 마켓에 등록될 수 있도록 준비합니다.",
        image: "/images/reg-4.svg"
    },
    {
        order: "05",
        title: "이모티콘 판매",
        paragraph:
            "마켓에 등록된 이모티콘은 여러 채팅 플랫폼을 거쳐 여러 유저들에게 판매됩니다.",
        image: "/images/reg-5.svg"
    }
];

function ProcessInfoItem({ order, title, paragraph, picture }) {
    return (
        <div className="process-item">
            <img className="process-item__image" alt="item" src={picture}></img>
            <div className="process-item__title">
                <div className="process-item__order-number">{order}</div>
                <div className="process-item__title-name">{title}</div>
            </div>
            <p className="process-item__paragraph">{paragraph}</p>
        </div>
    );
}

function ProcessInfo() {
    return (
        <div className="process-info">
            <h3 className="process-info__title">등록 절차</h3>
            <ul className="process-info__process-list">
                {processInfoItemData.map((data, idx) => {
                    return (
                        <ProcessInfoItem
                            key={idx}
                            order={data.order}
                            title={data.title}
                            paragraph={data.paragraph}
                            picture={data.image}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default ProcessInfo;
