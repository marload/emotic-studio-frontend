import React from "react";

const processInfoItemData = [
    {
        order: "01",
        title: "계정 등록",
        paragraph:
            "개인과 특정 단체, 기업에 상관 없이 누구나 자신이 표현하고 싶은 것을 그리는 'EmoticBox' 이모티콘 크리에이터가 되어보세요.",
        image: ""
    },
    {
        order: "02",
        title: "이모티콘 등록",
        paragraph:
            "가이드 라인에 주의하여, 스티커, 애니메이션 스티커, 이모티콘 등 다양한 작품을 만들어 등록해주세요.",
        image: ""
    },
    {
        order: "03",
        title: "이모티콘 심사",
        paragraph:
            "가이드 라인과 저작권 등 이모티콘을 2~3일에 거쳐 심사합니다.",
        image: ""
    },
    {
        order: "04",
        title: "이모티콘 상품화",
        paragraph: "승인된 이모티콘이 마켓에 등록될 수 있도록 준비합니다.",
        image: ""
    },
    {
        order: "05",
        title: "이모티콘 판매",
        paragraph:
            "마켓에 등록된 이모티콘은 여러 채팅 플랫폼을 거쳐 여러 유저들에게 판매됩니다.",
        image: ""
    }
];

function ProcessInfoItem({ order, title, paragraph, picture }) {
    return (
        <React.Fragment>
            <li className="process-info-item">
                <div className="process-info-item__column">
                    <div className="process-info-item__order-number">
                        {order}
                    </div>
                    <img
                        className="process-info-item__image"
                        src={picture}
                        alt={title}
                    ></img>
                </div>
                <div className="process-info-item__column">
                    <h3 className="process-info-item__title">{title}</h3>
                    <p className="process-info-item__paragraph">{paragraph}</p>
                </div>
            </li>
        </React.Fragment>
    );
}

function ProcessInfo() {
    return (
        <div className="process-info">
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
