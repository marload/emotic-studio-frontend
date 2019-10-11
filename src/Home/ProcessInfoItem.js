import React from "react";

function ProcessInfoItem({ order, title, paragraph }) {
    return (
        <React.Fragment>
            <li className="process-info-item">
                <div className="process-info-item__order-number">{order}</div>
                <h3 className="process-info-item__title">{title}</h3>
                <p className="process-info-item__paragraph">{paragraph}</p>
                {/* TODO: Icons add */}
            </li>
        </React.Fragment>
    );
}

export default ProcessInfoItem;
