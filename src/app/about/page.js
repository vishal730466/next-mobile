'use client'
import { useState, useEffect,useRef } from 'react';
import './game.css'

export const about =() =>{

  const divRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [visible, setvisible] = useState(false);
  const [arrayState, setArrayState] = useState(['', '', '', '', '', '', '', '', '']);
  const [Player, setPlayer] = useState("player1")
  const [WinPlayer, setWinPlayer] = useState('');
  const [clicked, setClicked] = useState(Array(arrayState.length).fill(false));




  useEffect(() => {
    const divElement = divRef.current;
    if (divElement) {
      const elementWidth = divElement.offsetWidth;
      setWidth(elementWidth);
    }

    const a = isWin();
    isGameOver();

    if (a === 'X') {
      setvisible(true);
      setWinPlayer('Player1');
    }
   else if (a === 'O') {
      setvisible(true);
      setWinPlayer('Player2');
    }
    else{

      isGameOver();
    }
    console.log("result is ", a)
  }, [arrayState]);

  const isWin = () => {

    if (arrayState[0] === arrayState[1] && arrayState[2] === arrayState[1] && arrayState[2] !== '') { console.log("012"); return arrayState[1] }
    else if (arrayState[3] === arrayState[4] && arrayState[4] === arrayState[5] && arrayState[4] !== '') { console.log("345"); return arrayState[4] }
    else if (arrayState[6] === arrayState[7] && arrayState[7] === arrayState[8] && arrayState[7] !== '') { console.log("678"); return arrayState[7] }
    else if (arrayState[0] === arrayState[3] && arrayState[3] === arrayState[6] && arrayState[3] !== '') { console.log("036"); return arrayState[3] }
    else if (arrayState[1] === arrayState[4] && arrayState[4] === arrayState[7] && arrayState[4] !== '') { console.log("147"); return arrayState[4] }
    else if (arrayState[2] === arrayState[5] && arrayState[5] === arrayState[8] && arrayState[5] !== '') { console.log("258"); return arrayState[5] }
    else if (arrayState[0] === arrayState[4] && arrayState[4] === arrayState[8] && arrayState[4] !== '') { console.log("048"); return arrayState[4] }
    else if (arrayState[2] === arrayState[4] && arrayState[4] === arrayState[6] && arrayState[4] !== '') { console.log("246"); return arrayState[4] }
    else {

      return false;
    }
  }

  const isGameOver = () => {
    if (arrayState.every(item => item !== '')) {
      setWinPlayer('Draw');
       setvisible(true);
    }

  };
  const fun = (a) => {


    if (!clicked[a]) {
      const newClicked = [...clicked];
      newClicked[a] = true;
      setClicked(newClicked);


      const newArray = [...arrayState];

      if (Player == "player1") {
        newArray[a] = 'X';
      }
      else {
        newArray[a] = 'O';
      }
      setArrayState(newArray)
      setPlayer(Player === 'player1' ? 'player2' : 'player1');

    }
  };
 
      // if(width>500){
  return (   <div>       
<div ref={divRef} style={{ width: "100%" , border:"2px solid" }}>{width}</div>
      this is game
      <div className="board">
        {visible &&
          <div id='flash'>
            Winner is {WinPlayer}
          </div>
        }

        {arrayState.map((item, index) => (
          <div key={index} onClick={() => fun(index)} className='block'>{item}</div>
        ))}

      </div>

    </div>
  )

 //  }
/*
else{
  <div>
     <div ref={divRef} style={{ width: "100%" }}>{width}</div>
     this is mobile</div>
}
*/
}
export default about;
