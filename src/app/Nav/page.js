"use client"
import React from 'react'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react';

export const Nav = () => {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);


  useEffect(() => {
    const divElement = divRef.current;

    if (divElement) {
      const elementWidth = divElement.offsetWidth;
      setWidth(elementWidth);
    }

  }, []);

  if (width > 500) {

    return (

      <div>

        <ul className='nav' >
          <Link href="/"><li className="myul"> Home</li></Link>
          <Link href="/about"> <li className="myul">About</li></Link>
          <Link href="/Nav"> <li className="myul">Contact</li></Link>
        </ul>
        <div ref={divRef} style={{ width: "100%", color: "red" }}>
          <p>The width is greter: {width}px</p>
        </div>
      </div>

    )
  }

  else {
    return (
      <div ref={divRef} style={{ width: "100%", color: "red" }}>
        Your Element
        <p>small than 500 : {width}px</p>
      </div>
    )
  }
}

export default Nav;
