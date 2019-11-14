import React from "react";

import { Link } from "react-router-dom";

import "./scss/Navigation.scss";

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            checkedTab: 0
        };
    }

    checkedTabStyle = {
        display: "block",
        textDecoration: "none",
        fontFamily: ["Noto Sans KR", "sans-serif"],
        fontWeight: 400,
        color: "#DE3621",
        fontSize: "0.7rem",
        marginBottom: "20px"
    };

    uncheckedTabStyle = {
        display: "block",
        textDecoration: "none",
        fontFamily: ["Noto Sans KR", "sans-serif"],
        fontWeight: 400,
        color: "black",
        fontSize: "0.7rem",
        marginBottom: "20px"
    };

    changeCheckedTab(tabNumber) {
        this.setState({
            checkedTab: tabNumber
        });
    }

    render() {
        return (
            <div className="sub-nav">
                <div className="sub-nav__container">
                    <div className="sub-nav__wrapper">
                        <header className="sub-nav__header">
                            {this.props.header}
                        </header>
                    </div>
                    <ul className="sub-nav__list">
                        {this.props.data.map((data, idx) => {
                            return (
                                <li className="sub-nav__item">
                                    <Link
                                        to={data.link}
                                        style={
                                            idx === this.state.checkedTab
                                                ? this.checkedTabStyle
                                                : this.uncheckedTabStyle
                                        }
                                        onClick={() => {
                                            this.changeCheckedTab(idx);
                                        }}
                                    >
                                        <span className="sub-nav__item__text">
                                            {data.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navigation;
