import { forwardRef, useRef } from "react"

const DraggableImage = forwardRef(
  ({ imageUrl, position, scale, rotation, imageDimensions, onPositionChange }, ref) => {
    const dragging = useRef(false)
    const offset = useRef({ x: 0, y: 0 })

    const onPointerDown = e => {
      dragging.current = true
      offset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      }
      window.addEventListener("pointermove", onPointerMove)
      window.addEventListener("pointerup", onPointerUp)
    }
    const onPointerMove = e => {
      if (!dragging.current) return
      onPositionChange({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      })
    }
    const onPointerUp = () => {
      dragging.current = false
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
    }

    const cx = imageDimensions.width / 2
    const cy = imageDimensions.height / 2

    return (
      <img
        ref={ref}
        src={imageUrl}
        alt=""
        draggable={false}
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          width: imageDimensions.width,
          height: imageDimensions.height,
          transform: `
            translate(-${cx}px, -${cy}px)
            scale(${scale})
            rotate(${rotation}deg)
          `,
          transformOrigin: "center center",
          cursor: "grab",
          userSelect: "none",
          pointerEvents: "auto"
        }}
        onPointerDown={onPointerDown}
      />
    )
  }
)

export default DraggableImage