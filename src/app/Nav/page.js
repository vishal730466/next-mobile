"use client"
import React from 'react'
import Link from 'next/link'
import './nav_style.css'

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

  function Toggle() {
    var divs = document.getElementsByClassName("toggle");
    for (var i = 0; i < divs.length; i++) {
      if (divs[i].style.display === "none" ) {
        divs[i].style.display = "block";
      }/*
      else if( divs[i].style.display === ""){
        divs[i].style.display = "none";
      } */
      else {
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
          <Link href="/Move"> <li className="myul">Setting</li></Link> 
        </ul>
        <div ref={divRef} style={{ width: "100%", color: "red" }}>
        
        </div>
      </div>

    )
  }

  else {
    return (
      <div ref={divRef} style={{ width: "100%" }}>
        <ul className='m_nav' onClick={Toggle}> <div className='toggle'>
          <Link href="/"><li className="ml1"> Home</li></Link>
          <Link href="/about"> <li className="ml2">About</li></Link>
          <Link href="/Nav"> <li className="ml3">Contact</li></Link>
          <Link href="/"> <li className="ml4">Setting</li></Link> </div>
        </ul>
      </div>
    )
  }
}

export default Nav;
