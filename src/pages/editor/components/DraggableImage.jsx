

import { useState, useEffect, useRef, forwardRef } from "react"

const DraggableImage = forwardRef(
  ({ imageUrl, position, scale, rotation = 0, onPositionChange, imageDimensions }, ref) => {
    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
    const imageRef = useRef(null)

    // Expose the image element through the forwarded ref
    useEffect(() => {
      if (ref) {
        ref.current = imageRef.current
      }
    }, [ref])

    useEffect(() => {
      const handleMouseMove = (e) => {
        if (!isDragging) return

        const dx = e.clientX - dragStart.x
        const dy = e.clientY - dragStart.y

        onPositionChange({
          x: position.x + dx,
          y: position.y + dy,
        })

        setDragStart({
          x: e.clientX,
          y: e.clientY,
        })
      }

      const handleMouseUp = () => {
        setIsDragging(false)
        document.body.style.cursor = "default"
      }

      if (isDragging) {
        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)
        document.body.style.cursor = "grabbing"
      }

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
        document.body.style.cursor = "default"
      }
    }, [isDragging, dragStart, position, onPositionChange])

    const handleMouseDown = (e) => {
      setIsDragging(true)
      setDragStart({
        x: e.clientX,
        y: e.clientY,
      })
      e.preventDefault()
    }

    // Touch events for mobile support
    const handleTouchStart = (e) => {
      setIsDragging(true)
      setDragStart({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      })
    }

    const handleTouchMove = (e) => {
      if (!isDragging) return

      const dx = e.touches[0].clientX - dragStart.x
      const dy = e.touches[0].clientY - dragStart.y

      onPositionChange({
        x: position.x + dx,
        y: position.y + dy,
      })

      setDragStart({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      })
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
    }

    return (
      <div
        className="absolute"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transformOrigin: "top left",
          willChange: "transform",
        }}
      >
        <img
          ref={imageRef}
          src={imageUrl || "/placeholder.svg"}
          alt="Draggable"
          className="draggable-image"
          style={{
            transform: `rotate(${rotation}deg) scale(${scale})`,
            transformOrigin: "center center",
            cursor: isDragging ? "grabbing" : "grab",
            maxWidth: "none", // Prevent image from being constrained by container
            position: "relative", // Changed from absolute to relative
            top: 0,
            left: 0,
            width: imageDimensions.width || "auto",
            height: imageDimensions.height || "auto",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          draggable="false"
          crossOrigin="anonymous"
          onLoad={(e) => {
            // When the image loads, we can get its natural dimensions
            if (ref && !ref.current) {
              ref.current = e.target
            }
          }}
        />
      </div>
    )
  },
)

// Add display name for React DevTools
DraggableImage.displayName = "DraggableImage"

export default DraggableImage
