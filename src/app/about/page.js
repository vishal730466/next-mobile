'use client'
import { useState,useEffect  } from 'react';
import './game.css'

export default function about( ){
  let myPlayer = "player1";

 
  
    const [visible, setvisible] = useState(false);
    const [arrayState, setArrayState] = useState(['', '', '', '', '','','' ,'','']);
    const [Player , setPlayer] = useState("player1")
    const [WinPlayer, setWinPlayer] = useState('');
    const [clicked, setClicked] = useState(Array(arrayState.length).fill(false));


    useEffect(() => {
     const a=  isWin();
     if (a==='X') {
      setvisible(true);
      setWinPlayer('Player1');
     }
     if (a==='O') {
      setvisible(true);
      setWinPlayer('Player2');
     }  
     console.log("result is ",a)
      isGameOver();
    }, [arrayState]);

   const isWin =()=>{
   // console.log(arrayState[2],arrayState[5],arrayState[8]);
      if (arrayState[0]===arrayState[1] && arrayState[2]===arrayState[1]) {
        return arrayState[1];
      }
      else if(arrayState[3]===arrayState[4] && arrayState[4]===arrayState[5] && arrayState[4]!==''){return arrayState[4]}
      else if(arrayState[6]===arrayState[7] && arrayState[7]===arrayState[8] && arrayState[7]!==''){return arrayState[7]}
      else if(arrayState[0]===arrayState[3] && arrayState[3]===arrayState[6] && arrayState[3]!==''){return arrayState[3]}
      else if(arrayState[1]===arrayState[4] && arrayState[4]===arrayState[7] && arrayState[4]!==''){return arrayState[4]}
      else if(arrayState[2]===arrayState[5] && arrayState[5]===arrayState[8] && arrayState[5]!==''){return arrayState[5]}
      else if(arrayState[0]===arrayState[4] && arrayState[4]===arrayState[8] && arrayState[4]!==''){return arrayState[4]}
      else if(arrayState[2]===arrayState[4] && arrayState[4]===arrayState[6] && arrayState[4]!==''){return arrayState[4]}
      else {
        console.log('draw');
       return false;
      }
    }

    const isGameOver = () => {
      if( arrayState.every(item => item !== '')){
        setWinPlayer('Draw');
       // setvisible(false);
        console.log('isGameOver');
       
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

    return(
        <div>
            this is game
            <div className="board">
              { visible &&
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
}