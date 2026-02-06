import React, { useRef, useEffect, useState } from "react";

export default function Projects() {
  const imageContainerRef = useRef(null);
  const [x, setX] = useState(0);
  const timerRef = useRef(null);

  const updateGallery = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    }

    timerRef.current = setTimeout(() => {
      setX(prev => prev - 45);
    }, 3000);
  };

  // Run update when x changes
  useEffect(() => {
    updateGallery();
    return () => clearTimeout(timerRef.current);
  }, [x]);

  const prevEl = () => {
    clearTimeout(timerRef.current);
    setX(prev => prev + 45);
  };

  const nextEl = () => {
    clearTimeout(timerRef.current);
    setX(prev => prev - 45);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950/100 to-black">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-[#80db66]">Projects</span>
          </h1>
        </div>

        <div className="image-container mt-30 mb-5 self-center" ref={imageContainerRef}>
          <span style={{ "--i": 1 }}>
            <img src="/one.png" alt=""/>
          </span>
          <span style={{ "--i": 2 }}>
            <img src="/two.png" alt=""/>
          </span>
          <span style={{ "--i": 3 }}>
            <img src="/three.png" alt=""/>
          </span>
          <span style={{ "--i": 4 }}>
            <img src="/four.png" alt=""/>
          </span>
          <span style={{ "--i": 5 }}>
            <img src="/five.png" alt=""/>
          </span>
          <span style={{ "--i": 6 }}>
            <img src="/six.png" alt=""/>
          </span>
          <span style={{ "--i": 7 }}>
            <img src="/seven.png" alt=""/>
          </span>
          <span style={{ "--i": 8 }}>
            <img src="/eight.png" alt=""/>
          </span>
        </div>

        <div className="btn-container">
          <button className="btn prev" onClick={prevEl}>
            Prev
          </button>
          <button className="btn next" onClick={nextEl}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
