"use client"
import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
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

  const handleClick = () => {
    console.log('hello');
  };

  return (
    <div>
      <p>Touch this paragraph and move the finger.</p>
      <div
        id="myDiv"
        style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
        onClick={handleClick}
      ></div>
      <p id="demo"></p>
    </div>
  );
};

export default MyComponent;
