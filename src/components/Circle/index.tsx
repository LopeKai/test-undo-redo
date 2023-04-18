interface CircleProps {
    positionX: number;
    positionY: number;
}

export const Circle = ({ positionX, positionY }: CircleProps) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: positionX - 4,
                top: positionY - 4,
                background: "#000",
                width: '12px',
                height: '12px',
                borderRadius: '50%'
            }}
        />
    )
}