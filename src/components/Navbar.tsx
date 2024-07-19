"use client"

import { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    // Update time immediately and then every second
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className=" text-white p-4">
      <div className="mx-auto flex justify-between items-center px-10">
        <div>
          <Settings className="w-8 h-8 text-[#FE6766]" />
        </div>
        <div className="text-2xl font-bold font-serif">
          {currentTime}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
