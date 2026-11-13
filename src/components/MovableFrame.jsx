import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { GripVertical } from "lucide-react";

export default function MovableFrame({
  children,
  label,
  glow = "cyan",
  initialX = 0,
  initialY = 0,
  floatDelay = 0,
  className = "",
}) {
  const reduce = useReducedMotion();
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      drag
      dragMomentum={true}
      dragElastic={0.12}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 28 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileHover={reduce ? undefined : { scale: 1.04, cursor: "grab" }}
      whileDrag={{ scale: 1.08, cursor: "grabbing", zIndex: 70 }}
      animate={
        reduce || isDragging
          ? { x: initialX, y: initialY }
          : {
              x: initialX,
              y: [initialY, initialY - 9, initialY],
              transition: {
                y: {
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: floatDelay,
                },
              },
            }
      }
      className={`movable-frame movable-frame--${glow} ${className}`}
    >
      {/* Laser Corner HUD Accents */}
      <span className="frame-corner frame-corner--tl" aria-hidden="true" />
      <span className="frame-corner frame-corner--tr" aria-hidden="true" />
      <span className="frame-corner frame-corner--bl" aria-hidden="true" />
      <span className="frame-corner frame-corner--br" aria-hidden="true" />

      {/* Frame Top HUD Bar */}
      <div className="frame-header">
        <div className="frame-handle">
          <GripVertical size={13} className="frame-grip-icon" aria-hidden="true" />
          <span className="frame-dot" aria-hidden="true" />
          <span className="frame-label">{label || "SYSTEM_MODULE"}</span>
        </div>
        <span className="frame-drag-hint">DRAG ME</span>
      </div>

      {/* Frame Body */}
      <div className="frame-body">{children}</div>
    </motion.div>
  );
}
