import React, { useEffect, useRef, useState } from "react";
import './slideshow.css';

const delay = 1000;

export default function Slideshow(props) {
  const { images } = props;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow" onMouseLeave={(e) => props.setSlider(false) && resetTimeout()}>
      <div
        className="slideshow-slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((src, index) => (
          <img
            src={src.src}
            className="slide"
            key={index}
          ></img>
        ))}
      </div>
    </div>
  );
}