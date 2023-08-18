

export const Board: React.FC<{ children: any }> = ({ children }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
            }}
        >{children}</div>
    )
}