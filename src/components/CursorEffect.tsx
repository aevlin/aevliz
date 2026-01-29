import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";
import { PenTool, ArrowUpRight } from "lucide-react";

export function CursorEffect() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Tighter, more responsive spring
  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [cursorState, setCursorState] = useState<"default" | "hover" | "edit">("default");
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for specific cursor data attributes first
      if (target.closest('[data-cursor="edit"]')) {
         setCursorState("edit");
         return;
      }

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute('role') === 'button' ||
        target.closest('[data-cursor="hover"]')
      ) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block">
      
      {/* Main Cursor (Follower) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="relative"
      >
         {/* 1. Default Dot */}
         <motion.div 
            animate={{ 
               scale: cursorState === "hover" ? 0 : 1,
               opacity: cursorState === "hover" ? 0 : 1
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#D9FF00] rounded-full shadow-[0_0_10px_#D9FF00]"
         />

         {/* 2. Hover State (Circle or Arrow) */}
         <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
               scale: cursorState === "hover" ? 1 : 0,
               opacity: cursorState === "hover" ? 1 : 0
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
         >
            <div className="w-12 h-12 border border-[#D9FF00] rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
               <ArrowUpRight size={20} className="text-[#D9FF00]" />
            </div>
         </motion.div>

         {/* 3. Edit State (Pen Tool) */}
         <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
               scale: cursorState === "edit" ? 1 : 0,
               opacity: cursorState === "edit" ? 1 : 0
            }}
            className="absolute -translate-x-1 -translate-y-1 flex items-center gap-2"
         >
            <PenTool size={32} className="text-[#D9FF00] fill-current drop-shadow-md" />
            <motion.div 
               initial={{ x: -10, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               className="bg-[#D9FF00] text-black text-[10px] font-black px-2 py-1 rounded-sm uppercase tracking-wider whitespace-nowrap"
            >
               EDIT MODE
            </motion.div>
         </motion.div>

      </motion.div>
    </div>
  );
}
