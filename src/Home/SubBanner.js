import React from "react";

import "./scss/SubBanner.scss";

function SubBanner() {
    return (
        <div className="sub-banner">
            <img
                className="sub-banner__image"
                src="/images/sub-banner.svg"
                alt="sub banner"
            ></img>
        </div>
        // <div className="sub-bnanner--background">
        //     <div className="sub-banner">
        //         <div className="sub-banner__column">
        //             <img
        //                 className="sub-banner__box-logo"
        //                 src="/images/emotic-box-log-icon.png"
        //                 alt="EmoticBox"
        //             ></img>
        //         </div>
        //         <div className="sub-banner__column">
        //             <h2 className="sub-banner__title">
        //                 EmoticBox는 모든 플랫폼이 쓸 수 있는 이모티콘 SDK입니다.
        //             </h2>
        //             <p className="sub-banner__paragraph">
        //                 EmoticStudio에서 등록한 이모티콘은 EmoticBox를 통해 여러
        //                 플랫폼 유저들에게 사용 됩니다.
        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
}

export default SubBanner;
