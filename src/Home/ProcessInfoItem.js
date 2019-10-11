import React from "react";

function ProcessInfoItem({ order, title, paragraph, picture }) {
    return (
        <React.Fragment>
            <li className="process-info-item">
                <div className="process-info-item__column">
                    <div className="process-info-item__order-number">
                        {order}
                    </div>
                    <img
                        className="process-info-item__image"
                        src={picture}
                        alt={title}
                    ></img>
                </div>
                <div className="process-info-item__column">
                    <h3 className="process-info-item__title">{title}</h3>
                    <p className="process-info-item__paragraph">{paragraph}</p>
                </div>
            </li>
        </React.Fragment>
    );
}

export default ProcessInfoItem;
