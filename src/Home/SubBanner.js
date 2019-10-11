import React from "react";

function SubBanner() {
    return (
        <div className="sub-banner">
            <img className="sub-banner__box-logo" src="#" alt="EmoticBox"></img>
            <h2 className="sub-banner__title">
                EmoticBox는 모든 플랫폼이 쓸 수 있는 이모티콘 SDK입니다.
            </h2>
            <p className="sub-banner__paragraph">
                EmoticStudio에서 등록한 이모티콘은 EmoticBox를 통해 여러 플랫폼
                유저들에게 사용 됩니다.
            </p>
        </div>
    );
}

export default SubBanner;
