export function DoodleArrow() {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M10 40C20 35 40 30 60 35C80 40 100 30 110 25M110 25L105 15M110 25L100 28" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="doodle-path"
      />
    </svg>
  );
}

export function DoodleCircle() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M50 10C70 10 90 25 90 50C90 75 70 90 50 90C30 90 10 75 10 50C10 25 28 12 50 10" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round"
        className="doodle-path"
      />
    </svg>
  );
}

export function DoodleUnderline() {
  return (
    <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M5 10C40 15 80 8 120 12C160 16 180 10 195 8" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round"
        className="doodle-path"
      />
    </svg>
  );
}

export function DoodleStar() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M30 5L35 22L52 22L38 32L43 49L30 39L17 49L22 32L8 22L25 22L30 5Z" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.2"
        className="doodle-path"
      />
    </svg>
  );
}

export function DoodleHeart() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M40 65C40 65 10 50 10 30C10 20 17 15 23 15C30 15 37 20 40 25C43 20 50 15 57 15C63 15 70 20 70 30C70 50 40 65 40 65Z" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.15"
        className="doodle-path"
      />
    </svg>
  );
}

export function DoodleSparkle() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M20 2L22 18L38 20L22 22L20 38L18 22L2 20L18 18L20 2Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.3"
        className="doodle-path"
      />
    </svg>
  );
}

export function DoodleSquiggle() {
  return (
    <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M10 50C20 30 30 70 40 50C50 30 60 70 70 50C80 30 90 70 100 50C110 30 120 60 140 50" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round"
        className="doodle-path"
      />
    </svg>
  );
}

export function DoodleScribble() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M20 60C30 40 40 80 60 60C80 40 70 90 90 70C95 65 100 60 100 60M40 30C50 35 60 25 70 30M30 90C40 85 50 95 60 90" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="doodle-path"
      />
    </svg>
  );
}

export function DoodleNameCircle() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 pointer-events-none">
      <path 
        d="M50 90C50 50 150 20 300 20C450 20 550 50 550 90C550 130 450 160 300 160C150 160 50 130 50 90Z" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round"
        strokeDasharray="8 8"
        className="doodle-path animate-draw-circle"
        fill="none"
      />
    </svg>
  );
}
