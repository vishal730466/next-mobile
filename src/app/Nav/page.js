"use client"
import React from 'react'
import Link from 'next/link'
import './nav_style.css'

import { useRef, useEffect, useState } from 'react';

export const Nav = () => {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [l1, setl1] = useState(false);

  useEffect(() => {
    const divElement = divRef.current;

    if (divElement) {
      const elementWidth = divElement.offsetWidth;
      setWidth(elementWidth);
    }


  }, []);

  function Toggle() {
    var divs = document.getElementsByClassName("toggle");
    for (var i = 0; i < divs.length; i++) {
      if (divs[i].style.display === "none" || divs[i].style.display === "") {
        divs[i].style.display = "block";
      } else {
        divs[i].style.display = "none";
      }
    }
  }
  

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
      <div ref={divRef} style={{ width: "100%" }}>
        <ul className='m_nav' > <div className='toggle'>
          <Link href="/"><li className=""> Home</li></Link>
          <Link href="/about"> <li className="">About</li></Link>
          <Link href="/Nav"> <li className="">Contact</li></Link></div>
        </ul>
        <button onClick={Toggle}> click me</button>
      </div>
    )
  }
}

export default Nav;
