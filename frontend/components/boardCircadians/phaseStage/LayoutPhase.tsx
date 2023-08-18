import React from "react"

export const LayoutPhase: React.FC<{ children: any }> = ({ children }) => {
    return (
        <div
            style={{
                width: "40%",
                height: "92vh",
                margin: "0 30px 0px 30px",
            }}>
            <div style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
            >{children}</div>
        </div>
    )
}