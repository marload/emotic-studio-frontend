import React from "react";

import "./scss/Footer.scss";

import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__top">
                    <div className="footer__top__left footer__top--font">
                        <div className="footer__top__content">
                            <div className="footer__top__text-content">
                                <div className="footer__top__title">
                                    EmoticBox
                                </div>
                                <div className="footer__top__question">
                                    다양한 이모티콘을 구매하고 싶으시다면?
                                </div>
                                <div className="footer__top__link">
                                    바로가기 >
                                </div>
                            </div>
                            <img
                                className="footer__top__icon"
                                src="images/footer-left-icon.svg"
                                alt="emoticbox"
                            ></img>
                        </div>
                    </div>
                    <div className="footer__top__right footer__top--font">
                        <div className="footer__top__content">
                            <div className="footer__top__text-content">
                                <div className="footer__top__title">
                                    EmoticBox devloper
                                </div>
                                <div className="footer__top__question">
                                    자신의 플랫폼에 EmoticBox SDK를 적용하고
                                    싶다면?
                                </div>
                                <div className="footer__top__link">
                                    바로가기 >
                                </div>
                            </div>
                            <img
                                className="footer__top__icon"
                                src="images/footer-right-icon.svg"
                                alt="emoticbox"
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom__left">
                        <div className="footer__bottom__first">
                            <span>개인 정보 보호법</span>
                            <span>이용약관</span>
                        </div>
                        <div className="footer__bottom__second">
                            <span>Emoticbox@gmail.com</span>
                        </div>
                    </div>
                    <div className="footer__bottom__right">
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-facebook-f"></i>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
