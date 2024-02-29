import React, { useEffect, useRef, useState } from 'react'
import styles from './AnimatedText.module.css'; // Import CSS module

const AnimatedText = () => {
  const [animate, setAnimate] = useState(false);
  const [sliderCounter, setSliderCounter] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const sliderContent = [
    "Web Development",
    "WordPress Development",
    "App Development",
    "Plugin Development",
    "CRM Integrations"
  ];

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observerRef.current.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observerRef.current.observe(document.querySelector('#slider'));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (animate) {
      const intervalId = setInterval(() => {
        setSliderCounter(counter => (counter >= sliderContent.length - 1 ? 0 : counter + 1));
        setCurrentWord('');
        setTypingIndex(0);
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [animate, sliderContent]);

  useEffect(() => {
    if (animate && sliderContent[sliderCounter]) {
      const text = sliderContent[sliderCounter];
      const intervalId = setInterval(() => {
        setCurrentWord(prevWord => {
          const newWord = text.substring(0, typingIndex + 1);
          setTypingIndex(prevIndex => {
            if (prevIndex === text.length - 1) {
              clearInterval(intervalId);
            }
            return prevIndex + 1;
          });
          return newWord;
        });
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [animate, sliderCounter, sliderContent, typingIndex]);

  return (
    <div id="slider" className={styles.slider}>
      <div id="sliderValue" className={styles.sliderValue}>
        {currentWord.split('').map((char, index) => (
          <div
            key={index}
            className={`${styles.letter} ${styles.start} ${styles.animation}`}
            style={{ animationDelay: `${index / 10}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
