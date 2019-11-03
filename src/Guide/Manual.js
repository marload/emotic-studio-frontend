import React from "react";
import "./scss/Manual.scss";

class Manual extends React.Component {
    constructor() {
        super();
        this.state = {
            checkedTab: "sticker"
        };
    }

    changeButton(button) {
        if (!(button === "sticker" || button === "animated")) {
        }
        this.setState({
            checkedTab: button
        });
    }

    render() {
        return (
            <div className="manual">
                <div className="manual__btn-group">
                    <button
                        className="manual__btn"
                        style={{
                            borderBottom:
                                this.state.checkedTab === "sticker"
                                    ? "2px solid #de3621"
                                    : "none"
                        }}
                        onClick={() => {
                            this.changeButton("sticker");
                        }}
                    >
                        Sticker
                    </button>
                    <button
                        className="manual__btn"
                        style={{
                            borderBottom:
                                this.state.checkedTab === "animated"
                                    ? "2px solid #de3621"
                                    : "none"
                        }}
                        onClick={() => {
                            this.changeButton("animated");
                        }}
                    >
                        Animated Sticker
                    </button>
                </div>
            </div>
        );
    }
}

export default Manual;
