import React from "react";

import "./scss/Footer.scss";

import { Link } from "react-router-dom";

function UpperFooterContent({ title, paragraph, picture, link }) {
    return (
        <div className="upper-footer-contents">
            <div className="upper-footer-contents--flex">
                <div className="upper-footer-contents__column">
                    <h4>{title}</h4>
                    <p>{paragraph}</p>
                    <Link to={link} className="upper-footer-contents__link">
                        바로가기 >
                    </Link>
                </div>
                <div className="upper-footer-contents__column">
                    <img
                        className="upper-footer-contents__image"
                        src={picture}
                        alt={title}
                    ></img>
                </div>
            </div>
        </div>
    );
}

function LowerFooterRightContent() {
    return (
        <div className="lower-footer-right-content">
            <div className="lower-footer-right-content__column">
                <Link className="lower-footer-right-content__link" to="#">
                    개인 정보 보호법
                </Link>
                <Link className="lower-footer-right-content__link" to="#">
                    이용 약관
                </Link>
            </div>
            <div className="lower-footer-right-content__column">
                <span className="lower-footer-right-content__email">
                    EmoticBox@gmail.com
                </span>
            </div>
        </div>
    );
}

function LowerFooterLeftContent() {
    return (
        <div className="lower-footer-left-content">
            <i></i>
            <i></i>
            <i></i>
        </div>
    );
}

function Footer() {
    return (
        <div className="footer--background">
            <div className="footer">
                <div className="footer__upper">
                    <UpperFooterContent
                        title="EmoticBox"
                        paragraph="다양한 이모티콘을 구매하고 싶으시다면?"
                        picture="/images/emotic-log-non-bg.svg"
                        link="#"
                    />

                    <UpperFooterContent
                        title="EmoticBox developer"
                        paragraph="자신의 플랫폼에 EmoticBox SDK를 적용하고 싶으시다면?"
                        picture="#"
                        link="#"
                    />
                </div>
                <div className="footer__lower">
                    <div className="lower__column">
                        <LowerFooterRightContent />
                    </div>
                    <div className="lower__column">
                        <LowerFooterLeftContent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
