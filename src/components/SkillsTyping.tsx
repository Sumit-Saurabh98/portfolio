"use client"
import { TypeAnimation } from 'react-type-animation';

const SkillsTyping = () => {
  return (
    <TypeAnimation
    className='text-white'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Full Stack Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Devops Engineer',
        1000,
        'Frontend Developer',
        1000,
        'Backend Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default SkillsTyping;