import React from 'react'


export const RowTile: React.FC<{
    children: any,
    displace: number,
}> = ({
    children,
    displace,

}) => {

        const radius = displace

        const apothem = radius ? Math.sqrt(Math.pow(radius, 2) - Math.pow((radius / 2), 2)) / 2 : 0
        const rowMargin = radius ? (radius * 3) / 4 : 0

        return (
            <div
                style={{
                    display: "flex",
                    marginTop: `-${apothem}px`,
                    marginBottom: `-${apothem}px`,
                    marginLeft: `${rowMargin}px`,

                }}
            >{children}</div>
        )
    }