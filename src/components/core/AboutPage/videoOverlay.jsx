import React from 'react';

const VideoBanner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to CodeSavvy</h1>
        <p className="text-lg md:text-2xl">Learn. Build. Grow.</p>
      </div>
    </div>
  );
};

export default VideoBanner;
