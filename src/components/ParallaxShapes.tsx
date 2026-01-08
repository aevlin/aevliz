import { motion, useScroll, useTransform } from "motion/react";

export function ParallaxShapes() {
  const { scrollY } = useScroll();

  // Different parallax speeds for different shapes
  const y1 = useTransform(scrollY, [0, 2000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 600]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -300]);
  const y4 = useTransform(scrollY, [0, 2000], [0, 500]);
  const y5 = useTransform(scrollY, [0, 2000], [0, -200]);
  const y6 = useTransform(scrollY, [0, 2000], [0, 400]);

  const rotate1 = useTransform(scrollY, [0, 2000], [0, 360]);
  const rotate2 = useTransform(scrollY, [0, 2000], [0, -360]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large circle - top right */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-96 h-96 border-2 border-gray-200 rounded-full opacity-30"
      />

      {/* Medium circle - bottom left */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 left-20 w-64 h-64 border border-gray-300 rounded-full opacity-20"
      />

      {/* Small circle - middle right */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-1/3 right-32 w-32 h-32 bg-gray-100 rounded-full opacity-40"
      />

      {/* Square with rotation - top left */}
      <motion.div
        style={{ y: y4, rotate: rotate1 }}
        className="absolute top-40 left-10 w-48 h-48 border-2 border-black opacity-10 rounded-lg"
      />

      {/* Filled circle - middle left */}
      <motion.div
        style={{ y: y5 }}
        className="absolute top-1/2 left-1/4 w-40 h-40 bg-black opacity-5 rounded-full"
      />

      {/* Rotating square - bottom right */}
      <motion.div
        style={{ y: y6, rotate: rotate2 }}
        className="absolute bottom-20 right-20 w-56 h-56 border border-gray-400 opacity-15 rounded-2xl"
      />

      {/* Small dots */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/3 w-4 h-4 bg-black rounded-full opacity-20"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-gray-800 rounded-full opacity-15"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute top-2/3 left-1/2 w-3 h-3 bg-gray-600 rounded-full opacity-25"
      />

      {/* Lines */}
      <motion.div
        style={{ y: y4 }}
        className="absolute top-60 right-1/4 w-1 h-48 bg-gray-200 opacity-30"
      />
      <motion.div
        style={{ y: y5 }}
        className="absolute bottom-60 left-1/3 w-1 h-64 bg-gray-300 opacity-20"
      />
    </div>
  );
}
