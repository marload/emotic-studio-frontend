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
                        {this.props.data.map(data => {
                            return (
                                <li className="sub-nav__item">
                                    <Link to={data.link}>
                                        <span className="item__text">
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
