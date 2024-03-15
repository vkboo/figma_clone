import React from 'react'
import type { User } from '@liveblocks/client'
import Cursor from './Cursor'

type Presence = {
  x: number;
  y: number;
}

type Props = {
  others: User<Presence, any>[]
}

const LiveCursors = (props: Props) => {
  return (
    <div>
      {props.others.map(item => {
        if (!item.presence?.x) return null;
        return (
          <Cursor
            key={item.connectionId}
            x={item.presence.x}
            y={item.presence.y}
          />
        );
      })}
    </div>
  )
}

export default LiveCursors