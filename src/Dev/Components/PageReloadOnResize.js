
"use client";
import { useEffect, useRef } from 'react';

export default function PageReloadOnResize() {
  const initialWidth = useRef(window.innerWidth);
  const initialHeight = useRef(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      const widthDiff = Math.abs(window.innerWidth - initialWidth.current);
      const heightDiff = Math.abs(window.innerHeight - initialHeight.current);

      if (widthDiff > 100 || heightDiff > 100) {
        location.reload();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null;
}
