'use client'
import { useState, useEffect, useRef } from 'react';
import './game.css'
import './mobile.game.css'

export const about = () => {

  const divRef = useRef(null);
  const [mobile, setmobile] = useState(true);
  const [visible, setvisible] = useState(false);
  const [arrayState, setArrayState] = useState(['', '', '', '', '', '', '', '', '']);
  const [Player, setPlayer] = useState("player1")
  const [WinPlayer, setWinPlayer] = useState('');
  const [clicked, setClicked] = useState(Array(arrayState.length).fill(false));
  const [width, setWidth] = useState(0);

  useEffect(()=>{
    const divElement = divRef.current;
   
        if (divElement) {
          const elementWidth = divElement.offsetWidth;
          setWidth(elementWidth);
        }
        console.log('divElement updated');

  })

  useEffect(() => {


    const isMobileDevice = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    if (isMobileDevice()) {
      console.log('This is a mobile device.');
      setmobile(true)
    } else {
      console.log('This is not a mobile device.');
      setmobile(false)
    }

    const a = isWin();
    isGameOver();

    if (a === 'X') {
      setvisible(true);
      setWinPlayer('Winner is Player1');
      setClicked(Array(arrayState.length).fill(true))
    }
    else if (a === 'O') {
      setvisible(true);
      setWinPlayer('Winner is Player2');
      setClicked(Array(9).fill(true))
    }
    else {
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

      (Player == "player1") ? newArray[a] = 'X' : newArray[a] = 'O';
 
      setArrayState(newArray)
      setPlayer(Player === 'player1' ? 'player2' : 'player1');

    }
  };

   const restart =()=>{
    setClicked(Array(9).fill(false))
    setArrayState(Array(9).fill(''))
    setvisible(false)
    setPlayer('player1')
   }


  if (!mobile) {
    return (<div id='con'>
      <div ref={divRef} ></div>
      this is game
      <div className="board">
        {visible &&
          <div id='flash'>
            {WinPlayer} <button id='restart' onClick={restart}>Restart</button>
          </div>
        }

        {arrayState.map((item, index) => (
          <div key={index} onClick={() => fun(index)} className='block'>{item}</div>
        ))}

      </div>
      <div ref={divRef} style={{ width: "100%", border: "2px solid yellow" }}>{width}</div>
    </div>
    )

  }

  else {
    return <div className='con'>  <div className='title'>Tic Tac Toe</div> 
      <div className='mboard'>
        {visible &&
          <div id='mflash'>
            {WinPlayer}<button className='restart' onClick={restart}>Restart</button>
          </div>
        }
        {arrayState.map((item, index) => (
          <div key={index} onClick={() => fun(index)} className='mblock'>{item}</div>
        ))}

      </div>
      footer</div>
  }

}
export default about;
