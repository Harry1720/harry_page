"use client"
import { useEffect, useState } from "react";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <>
      {/* Date and Time - Fixed at top corners - Hidden on mobile */}
      <div className="hidden md:block fixed top-8 left-8 text-white text-lg z-40">
        {formatDate(currentTime)}
      </div>
      <div className="hidden md:block fixed top-8 right-8 text-white text-lg font-mono z-40">
        {formatTime(currentTime)}
      </div>
    </>
  );
};

export default DateTime;
