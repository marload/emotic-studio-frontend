import React from "react";

import { Link } from "react-router-dom";

function Header() {
    return (
        <header class="header-container">
            <div className="header-container__column">
                <Link to="/" className="header-container__home-link">
                    <img href="#logo" alt="EmoticStudio"></img>
                </Link>
            </div>
            <div className="header-container__column">
                <nav className="header-container__nav">
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
            </div>
        </header>
    );
}

export default Header;
