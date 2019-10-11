import React from "react";

import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header__column">
                <Link to="/" className="header__home-link">
                    <img href="#logo" alt="EmoticStudio"></img>
                </Link>
            </div>
            <div className="header__column">
                <nav className="header__nav">
                    <Link to="#가이드라인" className="nav__guide-line">
                        가이드 라인
                    </Link>
                    <Link to="#FAQ" className="nav__faq">
                        FAQ
                    </Link>
                    <Link to="#마이스튜디오" className="nav__my-sutdio">
                        마이 스튜디오
                    </Link>
                </nav>
                {/* TODO language icons add */}
                <div className="header__language">
                    <i></i>
                    <i></i>
                </div>
            </div>
        </header>
    );
}

export default Header;
