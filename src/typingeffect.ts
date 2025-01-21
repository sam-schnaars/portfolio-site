'use client'

import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

type TypingEffectProps = {
  word: string;
  className?: string;
  textClassName?: string;
  typeSpeed?: number;
};



const TypingEffect: React.FC<TypingEffectProps> = function ({ word, className = "", textClassName = "", typeSpeed = 70 }) {
  const [text] = useTypewriter({
    words: [word],
    typeSpeed: typeSpeed,
    deleteSpeed: 0,
  });

  return (
    <div className={className}>
      <span className={textClassName}>{text}</span>
    </div>
  );
};

export default TypingEffect;
