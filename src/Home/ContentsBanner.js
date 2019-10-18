import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import "./scss/ContentsBanner.scss";
import "./scss/ContentsBannerItem.scss";

const useStyles = makeStyles({
    Button: {
        borderRadius: 20,
        height: 40,
        width: 120,
        color: "white"
    }
});

function ContentsBannerItem({ title, picture }) {
    return (
        <div className="contents-banner-item">
            <img
                className="contents-banner-item__picture"
                src={picture}
                alt={title}
            ></img>
            <span className="contents-banner-item__title">{title}</span>
        </div>
    );
}

function ContentsBanner({ data: { title, subTitle, contentsData } }) {
    const classes = useStyles();
    return (
        <div className="contents-banner--background">
            <div className="contents-banner">
                <div className="contents-banner__column--flex-column">
                    <h2 className="contents-banner__title">{title}</h2>
                    <h4 className="contents-banner__subtitle">{subTitle}</h4>
                </div>
                <div className="contents-banner__column--flex-row">
                    {contentsData.map((data, idx) => {
                        return (
                            <ContentsBannerItem
                                key={idx}
                                title={data.title}
                                picture={data.image}
                            />
                        );
                    })}
                </div>
                <div className="contents-banner__column">
                    <Button
                        className={classes.Button}
                        variant="contained"
                        color="secondary"
                        buttonStyle={{ borderRadius: 50 }}
                        size="large"
                    >
                        <span className="reg-btn--style">등록하기</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ContentsBanner;
