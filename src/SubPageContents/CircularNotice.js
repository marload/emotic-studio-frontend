import React from "react";

function CircularNotice({ text, color }) {
    return (
        <div
            className="circular-notice"
            style={{
                borderRadius: "20px",
                color: color,
                border: `2px solid ${color}`,
                fontWeight: "bold",
                height: "30px",
                marginBottom: "30px"
            }}
        >
            {text}
        </div>
    );
}

export default CircularNotice;
