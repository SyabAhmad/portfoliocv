import React from "react";

const AnimatedPatterns = () => {
  // Generate random positions for sprinkles
  const sprinkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    animationDelay: Math.random() * 4 + "s",
  }));

  // Positions for orbiting stars
  const stars = [
    { left: "20%", top: "20%" },
    { left: "80%", top: "30%" },
    { left: "50%", top: "70%" },
  ];

  return (
    <div className="animated-patterns fixed inset-0 pointer-events-none z-0">
      {sprinkles.map((sprinkle) => (
        <div
          key={sprinkle.id}
          className="sprinkle"
          style={{
            left: sprinkle.left,
            top: sprinkle.top,
            animationDelay: sprinkle.animationDelay,
          }}
        />
      ))}
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: star.left,
            top: star.top,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedPatterns;
