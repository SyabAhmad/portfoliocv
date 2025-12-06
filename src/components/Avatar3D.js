import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Animated 3D Avatar Component
 * Uses CSS and Canvas for animations (no external 3D libraries needed)
 */
const Avatar3D = ({ 
  isListening = false, 
  isSpeaking = false, 
  emotion = 'neutral' // neutral, happy, thinking
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    let time = 0;
    const animate = () => {
      time += 0.05;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw animated gradient background
      const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
      if (isListening) {
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
        gradient.addColorStop(1, 'rgba(147, 51, 234, 0.1)');
      } else if (isSpeaking) {
        gradient.addColorStop(0, 'rgba(147, 51, 234, 0.3)');
        gradient.addColorStop(1, 'rgba(236, 72, 153, 0.1)');
      } else {
        gradient.addColorStop(0, 'rgba(100, 100, 100, 0.2)');
        gradient.addColorStop(1, 'rgba(150, 150, 150, 0.05)');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw avatar circle
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = 80;

      // Pulsing effect
      const pulse = isSpeaking ? Math.sin(time * 3) * 5 : Math.sin(time) * 2;
      
      // Outer glow
      if (isListening || isSpeaking) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 20 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = isListening 
          ? 'rgba(59, 130, 246, 0.2)' 
          : 'rgba(147, 51, 234, 0.2)';
        ctx.fill();
      }

      // Main circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + pulse, 0, Math.PI * 2);
      const mainGradient = ctx.createLinearGradient(
        centerX - radius, centerY - radius,
        centerX + radius, centerY + radius
      );
      mainGradient.addColorStop(0, '#3b82f6');
      mainGradient.addColorStop(1, '#9333ea');
      ctx.fillStyle = mainGradient;
      ctx.fill();

      // Draw face elements
      drawFace(ctx, centerX, centerY, time, emotion, isSpeaking, isListening);

      // Draw audio visualization if speaking
      if (isSpeaking) {
        drawAudioVisualization(ctx, width, height, time);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isListening, isSpeaking, emotion]);

  const drawFace = (ctx, x, y, time, emotion, isSpeaking, isListening) => {
    // Eyes
    const eyeY = y - 20;
    const eyeDistance = 25;
    const blinkOffset = Math.abs(Math.sin(time * 0.5)) < 0.1 ? -5 : 0;

    // Left eye
    ctx.beginPath();
    if (blinkOffset === 0) {
      ctx.arc(x - eyeDistance, eyeY, 8, 0, Math.PI * 2);
    } else {
      ctx.ellipse(x - eyeDistance, eyeY, 8, 2, 0, 0, Math.PI * 2);
    }
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // Right eye
    ctx.beginPath();
    if (blinkOffset === 0) {
      ctx.arc(x + eyeDistance, eyeY, 8, 0, Math.PI * 2);
    } else {
      ctx.ellipse(x + eyeDistance, eyeY, 8, 2, 0, 0, Math.PI * 2);
    }
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // Pupils
    if (blinkOffset === 0) {
      const lookOffset = isListening ? Math.sin(time * 2) * 3 : 0;
      ctx.beginPath();
      ctx.arc(x - eyeDistance + lookOffset, eyeY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#1e293b';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x + eyeDistance + lookOffset, eyeY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#1e293b';
      ctx.fill();
    }

    // Mouth
    const mouthY = y + 20;
    ctx.beginPath();
    
    if (isSpeaking) {
      // Animated speaking mouth
      const mouthOpen = Math.abs(Math.sin(time * 5)) * 10;
      ctx.ellipse(x, mouthY + 5, 20, 5 + mouthOpen, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#1e293b';
    } else if (emotion === 'happy' || isListening) {
      // Smile
      ctx.arc(x, mouthY, 20, 0.2, Math.PI - 0.2);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.stroke();
    } else {
      // Neutral
      ctx.moveTo(x - 15, mouthY);
      ctx.lineTo(x + 15, mouthY);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    // Listening indicator - animated waves around head
    if (isListening) {
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const waveRadius = 90 + i * 15 + Math.sin(time * 2 + i) * 5;
        ctx.arc(x, y, waveRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 - i * 0.1})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
  };

  const drawAudioVisualization = (ctx, width, height, time) => {
    const barCount = 40;
    const barWidth = width / barCount;
    const centerY = height / 2;

    for (let i = 0; i < barCount; i++) {
      const barHeight = Math.sin(time * 3 + i * 0.5) * 30 + Math.random() * 20;
      const x = i * barWidth;
      
      const gradient = ctx.createLinearGradient(x, centerY - barHeight, x, centerY + barHeight);
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.6)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0.3)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x, centerY - barHeight / 2, barWidth - 2, barHeight);
    }
  };

  return (
    <motion.div 
      className="avatar-container"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas 
        ref={canvasRef}
        width={300}
        height={300}
        className="avatar-canvas"
      />
      
      {/* Status indicator */}
      <motion.div 
        className="status-indicator"
        animate={{
          scale: isListening || isSpeaking ? [1, 1.2, 1] : 1,
          opacity: isListening || isSpeaking ? [0.5, 1, 0.5] : 0.7,
        }}
        transition={{
          duration: 1.5,
          repeat: isListening || isSpeaking ? Infinity : 0,
        }}
      >
        {isListening && (
          <span className="status-text listening">
            🎤 Listening...
          </span>
        )}
        {isSpeaking && (
          <span className="status-text speaking">
            🔊 Speaking...
          </span>
        )}
        {!isListening && !isSpeaking && (
          <span className="status-text idle">
            💬 Ready to chat
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Avatar3D;
