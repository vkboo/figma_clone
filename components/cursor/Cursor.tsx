import CursorSVG from '@/public/assets/CursorSVG'
import React from 'react'

interface Props {
    color: string;
    x: number;
    y: number;
    message: string;
}

const Cursor = (props: Props) => {
    const { x, y, color, message } = props;
    return (
        <div
            className="pointer-events-none absolute top-0 left-0"
            style={{
                transform: `translate(${x}px, ${y}px)`,
            }}>
            <CursorSVG color={color} />
            {/* message */}
        </div>
    )
}

export default Cursor