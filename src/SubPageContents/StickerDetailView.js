import React from "react";

import "./scss/StickerDetailView.scss";

const lionData = [
    "/images/lion/1.gif",
    "/images/lion/2.gif",
    "/images/lion/3.gif",
    "/images/lion/4.gif",
    "/images/lion/5.gif",
    "/images/lion/6.gif",
    "/images/lion/7.gif",
    "/images/lion/8.gif"
];

class StickerDetailView extends React.Component {
    render() {
        return (
            <div className="sticker-detail-view">
                <div className="sticker-detail-view__title">
                    {this.props.title}
                </div>
                <div className="sticker-detail-view__grid-wrapper">
                    {lionData.map((data, idx) => {
                        return (
                            <img
                                className="sticker-detail-view__sticker-image"
                                src={data}
                                alt="data"
                                key={idx}
                            ></img>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default StickerDetailView;
