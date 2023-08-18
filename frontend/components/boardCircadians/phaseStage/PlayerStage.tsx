import { players } from "../../../src/assets/players/players"
import { useState } from "react";


const RacePic: React.FC<{ name: string, pic: string, status: boolean }> = ({ name, pic, status }) => {

    const [isHover, setIsOver] = useState(false);
    const handleMouseIsOver = () => {
        setIsOver(true)
    }
    const handleMouseIsLeave = () => {
        setIsOver(false)
    }

    const Data = () => {
        console.log(name, pic, status)
    }

    return (
        <button
            style={{
                height: "50px",
                width: "50px",
                filter: isHover ? "brightness(1.05)" : "brightness(1)",

            }}
            onMouseOver={handleMouseIsOver}
            onMouseLeave={handleMouseIsLeave}
            onClick={Data}
        >
            <img
                src={pic}
                style={{
                    height: "100%",
                    width: "100%",
                    filter: status ? "brightness(1)" : "brightness(0.5)",
                }} />
        </button>
    )

}

export const PlayerStage = () => {



    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>

            <div style={{
                height: "100%",
                width: "40px",
                background: "orange",
                marginRight: "20px"
            }} />
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
            }}>
                {players.map((e, i) => (
                    <RacePic
                        key={i}
                        name={e.name}
                        pic={e.pic}
                        status={e.status}
                    />
                ))}
            </div>
        </div>
    )
}