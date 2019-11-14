import React from "react";

import { Link } from "react-router-dom";

import "./scss/Header.scss";

function Header() {
    return (
        <header>
            <div className="header">
                <div className="header__column">
                    <Link to="/" className="header__home-link">
                        <img
                            src="/images/emotic-box-logo.svg"
                            alt="EmoticStudio"
                        ></img>
                    </Link>
                </div>
                <div className="header__column">
                    <nav className="header__nav">
                        <Link to="/guide" className="nav__guide-line nav-item">
                            가이드 라인
                        </Link>
                        <Link to="/faq/service" className="nav__faq nav-item">
                            FAQ
                        </Link>
                        <Link
                            to="/mystudio/sticker-register"
                            className="nav__my-sutdio nav-item"
                        >
                            마이 스튜디오
                        </Link>
                        <span className="nav__language">
                            <img
                                src="/images/language-drop-down.svg"
                                alt="language"
                            ></img>
                        </span>
                    </nav>
                    {/* TODO language icons add */}
                    <div className="header__language">
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
