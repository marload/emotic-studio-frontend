import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./scss/Header.scss";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: "absolute",
        width: 350,
        height: 350,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 6, 3),
        outline: "none",
        borderRadius: "15px"
    }
}));

function SimpleModal({ loginHandle }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const buttonUseStyles = makeStyles({
        Button: {
            borderRadius: 20,
            height: 40,
            width: 120,
            color: "white"
        }
    });

    const buttonClasses = buttonUseStyles();

    return (
        <span>
            <button
                type="button"
                onClick={handleOpen}
                className="nav__guide-line nav-item"
                style={{
                    border: "none",
                    outline: "none"
                }}
            >
                마이 스튜디오
            </button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <TextField
                        label="Email address"
                        fullWidth
                        color="secondary"
                    />
                    <TextField label="Password" fullWidth color="secondary" />
                    <div
                        style={{
                            color: "#DE3621",
                            fontWeight: "bold"
                        }}
                    >
                        Forget password?
                    </div>
                    <div>
                        <span
                            style={{
                                fontWeight: "300",
                                opacity: "0.4"
                            }}
                        >
                            New to EmoticBox?{" "}
                        </span>
                        <span
                            style={{
                                fontWeight: "bold",
                                color: "#DE3621"
                            }}
                        >
                            Join now
                        </span>
                    </div>
                    <span>
                        <Button
                            className={buttonClasses.Button}
                            variant="contained"
                            color="secondary"
                            buttonStyle={{ borderRadius: 50 }}
                            onClick={loginHandle}
                        >
                            <span className="reg-btn--style">Login</span>
                        </Button>
                    </span>
                </div>
            </Modal>
        </span>
    );
}

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogin: false
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        this.setState({
            isLogin: true
        });
    }

    render() {
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
                            <Link
                                to="/guide"
                                className="nav__guide-line nav-item"
                            >
                                가이드 라인
                            </Link>
                            <Link
                                to="/faq/service"
                                className="nav__faq nav-item"
                            >
                                FAQ
                            </Link>

                            {(() => {
                                if (this.state.isLogin === false) {
                                    return (
                                        <SimpleModal
                                            className="nav__my-studio nav-item"
                                            // loginHandle={this.handleLogin}
                                            loginHandle={this.handleLogin}
                                        ></SimpleModal>
                                    );
                                } else {
                                    return (
                                        <Link
                                            to="/mystudio/sticker-register"
                                            className="nav__my-sutdio nav-item"
                                        >
                                            마이 스튜디오
                                        </Link>
                                    );
                                }
                            })()}
                            <Link
                                to="/guide"
                                className="nav__guide-line nav-item"
                            >
                                커뮤니티
                            </Link>

                            <span className="nav__language">
                                <img
                                    src="/images/language-drop-down.svg"
                                    alt="language"
                                ></img>
                            </span>
                        </nav>
                        <div className="header__language">
                            <i></i>
                            <i></i>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
