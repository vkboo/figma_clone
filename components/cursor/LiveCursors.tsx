import React from 'react'
import Cursor from './Cursor'
import { LiveCursorProps } from '@/types/type'
import { COLORS } from '@/constants'

const LiveCursors = (props: LiveCursorProps) => {
  const { others } = props
  return others?.map(other => {
    const { connectionId, presence } = other;
    if (!presence?.cursor) return null;
    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message}
      />
    )
  })
}

export default LiveCursors