"use client"
import React from 'react'
import { useRef, useEffect, useState } from 'react';

const Page =()=>{
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const divElement = divRef.current;

    if (divElement) {
      const elementWidth = divElement.offsetWidth;
      setWidth(elementWidth);
    }
  }, []);

  return (
    <div>
      <div ref={divRef}>
        Your Element 
        <p>The width of the element is: {width}px</p>
      </div>
      About page</div>
  )
}

export default Page;
