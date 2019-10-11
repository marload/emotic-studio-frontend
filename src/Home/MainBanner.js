import React from "react";

import { Link } from "react-router-dom";

function MainBanner() {
    return (
        <div className="main-banner">
            <h2 className="main-banner__title">
                여러분의 이모티콘을 전 세계 플랫폼과 함께 해보세요.
            </h2>
            <p className="main-banner__paragraph">
                EmoticStudio에 등록된 이모티콘은 EmoticBox를 통해 여러 플랫폼
                유저들에게 사용 됩니다.
            </p>
            <div className="main-banner__reg-btn">
                <Link to="#등록" className="main-banner__reg-link">
                    <button>등록하기</button>
                </Link>
            </div>
        </div>
    );
}

export default MainBanner;
