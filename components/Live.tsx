"use client";

import LiveCursors from "./cursor/LiveCursors"
import { useOthers, useUpdateMyPresence } from "@/liveblocks.config"
import { PointerEvent } from "react";

const Live = () => {
  const others = useOthers()
  const updateMyPresence = useUpdateMyPresence();

  const onPointerEnter = (event: PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updateMyPresence({
      cursor: { x, y }
    })
  }
  const onPointerMove = (event: PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updateMyPresence({
      cursor: { x, y }
    })
  }
  const onPointerLeave = (event: PointerEvent) => {
    updateMyPresence({
      cursor: null,
      message: null,
    })
  }
  const onPointerDown = (event: PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updateMyPresence({
      cursor: { x, y }
    })
  }
  return (
    <div
      className="h-screen w-full flex justify-center items-center text-center"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerDown}
    >
      <h1 className="text-2xl text-white">Liveblocks Figma Clone</h1>
      <LiveCursors others={others} />
    </div>
  )
}

export default Live