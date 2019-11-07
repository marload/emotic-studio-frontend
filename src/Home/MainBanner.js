import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import "./scss/MainBanner.scss";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    Button: {
        borderRadius: 20,
        height: 40,
        width: 120,
        color: "white"
    }
});

function MainBanner() {
    const classes = useStyles();
    return (
        <div className="main-banner">
            <h2 className="main-banner__title">
                여러분의 이모티콘을 전 세계 플랫폼과 함께 해보세요.
            </h2>
            <p className="main-banner__paragraph">
                EmoticStudio에 등록된 이모티콘은 EmoticBox를<br></br>
                통해 여러 플랫폼 유저들에게 사용 됩니다.
            </p>
            <Link
                to="#등록"
                className="main-banner__reg-link"
                style={{ textDecoration: "none" }}
            >
                <Button
                    className={classes.Button}
                    variant="contained"
                    color="secondary"
                    buttonStyle={{ borderRadius: 50 }}
                >
                    <span className="reg-btn--style">등록하기</span>
                </Button>
            </Link>
        </div>
    );
}

export default MainBanner;
