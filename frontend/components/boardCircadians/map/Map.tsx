import { vanillaMap } from "../../../src/assets/mapGenerator/vanillaMap";
import { HexagonalTile } from "./HexagonalTile"
import { RowTile } from "./RowTile"



export const Map = () => {

    const radius = 120

    const isEven = (i: number) => (i % 2) ? 0 : radius;

    return (
        <div>
            {vanillaMap.map((e: any, i: number) => (!(i % 3) &&
                <RowTile
                    key={e + i}
                    displace={isEven(i)}>

                    <HexagonalTile
                        radius={radius}
                        type={vanillaMap[i].type}
                        bonus={vanillaMap[i].bonus}
                    />
                    <HexagonalTile
                        radius={radius}
                        type={vanillaMap[i + 1].type}
                        bonus={vanillaMap[i + 1].bonus}
                    />
                    <HexagonalTile
                        radius={radius}
                        type={vanillaMap[i + 2].type}
                        bonus={vanillaMap[i + 2].bonus}
                    />
                </RowTile>
            ))}
        </div>
    )
}