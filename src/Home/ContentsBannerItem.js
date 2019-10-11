import React from "react";

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

export default ContentsBannerItem;
