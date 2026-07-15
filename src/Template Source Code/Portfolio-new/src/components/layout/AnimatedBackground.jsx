import React from 'react';

export default function AnimatedBackground() {
  return (
    <>
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
        {/* Animated Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[40rem] h-[40rem] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
        
        {/* Radial subtle grid or vignette could go here */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background pointer-events-none"></div>
      </div>
      
      {/* Noise Texture Overlay */}
      <div className="noise-bg"></div>
    </>
  );
}
