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

    //move
    const navelement = document.getElementById('myDiv');

    const touchMoveHandler = (event) => {
      const touch = event.touches[0];

      navelement.style.position = 'absolute';
      navelement.style.left = touch.clientX - 50 + 'px';
      navelement.style.top = touch.clientY - 50 + 'px';
    };

    const createNewElement = () => {
      const newDiv = document.createElement('div');
      newDiv.textContent = 'New Element';
      newDiv.style.position = 'absolute';
      navelement.appendChild(newDiv);
    };

    navelement.addEventListener('touchmove', touchMoveHandler);

    // Create a new element every second
    const interval = setInterval(createNewElement, 1000);

    return () => {
      navelement.removeEventListener('touchmove', touchMoveHandler);
      clearInterval(interval);
    };


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
  //move
  const handleClick = () => {
    console.log('hello');
  };

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
        <div onClick={Toggle}>
        <ul id="myDiv" className='m_nav' onClick={handleClick} > <div className='toggle'>
          <Link href="/"><li className="ml1"> Home</li></Link>
          <Link href="/about"> <li className="ml2">About</li></Link>
          <Link href="/Nav"> <li className="ml3">Contact</li></Link>
          <Link href="/"> <li className="ml4">Setting</li></Link> </div>
        </ul>
        </div>
      </div>
    )
  }
}

export default Nav;
