'use client'

import Navbar from "@/components/Navbar";
import SkillsTyping from "@/components/SkillsTyping";
import Image from "next/image";
import { House, BriefcaseBusiness, User, MailOpen } from "lucide-react";
import "animate.css";
import { useState } from "react";
import { motion } from 'framer-motion'

const HomePage = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const iconVariants = {
    hover: { scale: 1.2 },
    tap: { scale: 0.95 }
  };

  const handleIconClick = (iconName: any) => {
    setActiveIcon(iconName);
  };

  const getIconClass = (iconName: any) => {
    return `
      w-16 h-16 rounded-full
      flex items-center justify-center
      cursor-pointer
      transition-all duration-300
      ${activeIcon === iconName ? 'bg-[#FE6766]' : 'bg-[#454F57]'}
    `;
  };

  return (
    <>
      <div className="bg-black h-screen">
        <Navbar />
        <div className="flex justify-between items-center h-[calc(100vh-64px)] px-20">
          <div className="animate__animated animate__backInRight">
            <Image
              className="rounded-full"
              src="/user.png"
              alt="User"
              width={400}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <div>
              <h1 className="text-5xl font-bold text-white">
                Hi, I&apos;m <span className="text-[#FE6766]">Sumit Saurabh</span>
              </h1>
            </div>
            <SkillsTyping/>
          </div>
          <div className="text-white">
            <div className="flex flex-col gap-12">
              <motion.div
                onClick={() => handleIconClick('home')} 
                className={getIconClass('home')}
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <House size={32} />
              </motion.div>
              <motion.div 
                onClick={() => handleIconClick('briefcase')} 
                className={getIconClass('briefcase')}
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <BriefcaseBusiness size={32} />
              </motion.div>
              <motion.div 
                onClick={() => handleIconClick('user')} 
                className={getIconClass('user')}
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <User size={32} />
              </motion.div>
              <motion.div 
                onClick={() => handleIconClick('mail')} 
                className={getIconClass('mail')}
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <MailOpen size={32} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;