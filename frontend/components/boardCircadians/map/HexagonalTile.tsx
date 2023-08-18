import React, { useState } from "react"



export const HexagonalTile: React.FC<{
    radius: number
    type: "swamp" | "plains" | "hills" | "lake" | "mountains" | "disable"
    bonus?: string
}> = ({
    radius,
    type,
    bonus,
}) => {

        const apothem = Math.sqrt(Math.pow(radius, 2) - Math.pow((radius / 2), 2))

        const [isHover, setIsOver] = useState(false);
        const handleMouseIsOver = () => {
            setIsOver(true)
        }
        const handleMouseIsLeave = () => {
            setIsOver(false)
        }

        let bgColor = "rgba(0,0,0,0)";
        switch (type) {
            case "lake": bgColor = "#D992F7"; break;
            case "plains": bgColor = "#A36DF7"; break;
            case "hills": bgColor = "#6F3D84"; break;
            case "swamp": bgColor = "#5E257F"; break;
            case "mountains": bgColor = "#2B0B42"; break;
        }

        const logs = (a: any, b: any) => {
            console.log(a, b)
        }

        return (
            <button
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    filter: isHover ? "brightness(1.6)" : "brightness(1)",
                    transition: "0.5s",
                    marginRight: `${radius / 2}px`,

                }}
                onMouseOver={handleMouseIsOver}
                onMouseLeave={handleMouseIsLeave}
                disabled={type == "disable" ? true : false}
                onClick={() => logs(bonus, type)}

            >
                <div
                    id='hexagon'
                    style={{
                        display: "inline-block",
                        width: `${radius}px`,
                        height: `${apothem}px`,
                        boxSizing: "border-box",
                        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                        backgroundColor: `${bgColor}`,
                        objectFit: "contain",
                    }}
                >
                    {bonus &&
                        <p
                            style={{
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            {bonus}
                        </p>}
                </div>
            </button >
        )
    }


    // Rotate Styles

    // style={{
    //     display: "inline-block",
    //     width: rotate ? "100px" : "86.6px",
    //     height: rotate ? "86.6px" : "100px",
    //     boxSizing: "border-box",
    //     clipPath: rotate ? "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" : "polygon(0% 25%, 50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%)",
    //     backgroundColor: "#CCCCCC",
    //     objectFit: "contain",
    // }}
