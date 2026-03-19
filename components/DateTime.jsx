"use client"
import { useEffect, useState } from "react";
import { useI18n } from "@/components/LanguageProvider";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const formatDate = (date) => {
  //   return date.toLocaleDateString(t.datetime.locale, {
  //     weekday: 'short', 
  //     day: '2-digit', 
  //     month: 'short', 
  //     year: 'numeric' 
  //   });
  // };

  const formatDate = (date) => {
    // 1. Lấy tên Thứ (weekday) theo ngôn ngữ hiện tại (vd: 'Mon' hoặc 'Th 2')
    const weekday = date.toLocaleDateString(t.datetime.locale, { 
      weekday: 'long' 
    });

    // 2. Lấy ngày, tháng, năm chuẩn dd.mm.yyyy
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    // 3. Ghép nối chúng lại với nhau (có thể tùy chỉnh thêm dấu phẩy hoặc khoảng trắng)
    return `${weekday}, ${day}.${month}.${year}`;
  };
  const formatTime = (date) => {
    return date.toLocaleTimeString(t.datetime.locale, {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const bgClass = scrolled
    ? "bg-black/40 backdrop-blur-md px-3 rounded-lg transition-all duration-300"
    : "transition-all duration-300";

  return (
    <>
      {/* Date and Time - Fixed at top corners - Hidden on mobile */}
      <div className={`hidden md:block fixed top-7.75 left-8 text-white text-lg z-40 ${bgClass}`}>
        {formatDate(currentTime)}
      </div>
      <div className={`hidden md:block fixed top-7.75 right-8 text-white text-lg font-mono z-40 ${bgClass}`}>
        {formatTime(currentTime)} {t.datetime.gmt}
      </div>
    </>
  );
};

export default DateTime;
