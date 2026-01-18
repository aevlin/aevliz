import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export function CursorEffect() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Tighter, more responsive spring for gaming feel
  const springConfig = { damping: 20, stiffness: 800 };
  const mainX = useSpring(cursorX, springConfig);
  const mainY = useSpring(cursorY, springConfig);
  
  // Slight delay for the crosshair frame
  const trailSpringConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const trailX = useSpring(cursorX, trailSpringConfig);
  const trailY = useSpring(cursorY, trailSpringConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Center Dot (Reticle) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: mainX,
          y: mainY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Crosshair / Bracket UI */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9998] hidden lg:block"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 0.8 : 1,
          rotate: isHovering ? 45 : 0
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute top-0 left-0 w-3 h-1 bg-black" />
        <div className="absolute top-0 left-0 w-1 h-3 bg-black" />
        
        <div className="absolute top-0 right-0 w-3 h-1 bg-black" />
        <div className="absolute top-0 right-0 w-1 h-3 bg-black" />
        
        <div className="absolute bottom-0 left-0 w-3 h-1 bg-black" />
        <div className="absolute bottom-0 left-0 w-1 h-3 bg-black" />
        
        <div className="absolute bottom-0 right-0 w-3 h-1 bg-black" />
        <div className="absolute bottom-0 right-0 w-1 h-3 bg-black" />
      </motion.div>

      {/* Hover Status Text */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden lg:block overflow-hidden"
        style={{
          x: trailX,
          y: trailY,
          translateX: "20px",
          translateY: "20px",
        }}
      >
        <motion.span 
          className="bg-black text-white text-[10px] font-mono px-1 py-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
        >
          TARGET_LOCKED
        </motion.span>
      </motion.div>
    </>
  );
}
