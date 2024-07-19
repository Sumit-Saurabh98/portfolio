"use client"

import React from 'react';
import dynamic from 'next/dynamic';

const DynamicAnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const AnimatedCursor: React.FC = () => {
  return (
    <DynamicAnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      outerStyle={{
        border: '3px solid var(--cursor-color)',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)',
        mixBlendMode: 'exclusion'
      }}
    /> as React.ReactElement
  );
};

export default AnimatedCursor;