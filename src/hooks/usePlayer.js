import { useState, useCallback } from 'react';

import { Tetrominos, GenerateRandomTetromino } from '../tetrominos';
import { StageWidth } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer]= useState({
    pos: { 
      x: 0,
      y: 0
    },
    tetromino: Tetrominos[0].shape,
    collided: false, 
  }); 
  // const playerState = useState();
  // const player = playerState[0];
  // const setPlayer = playerState[1]; 
  const UpdatePlayerPosition = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: {x:(prev.pos.x += x), y: (prev.pos.y += y)},
      collided,
    }));
    console.log(`x: ${x},y: ${y}`);
    // console.log(pos);
  }

  // const UpdatePlayerPosition = ({ x, y, collided }) => {
  //   setPlayer(prev => ({
  //     pos: {x:(prev.pos.x += x), y: (prev.pos.y += y)},
  //     collided,
  //   }))
  // }  

  

  const ResetPlayer = useCallback(()=>{
    setPlayer({
      pos: {x: StageWidth/2 -2, y: 0},
      tetromino: GenerateRandomTetromino().shape, 
      collided: false,
    })
  }, [])

  return [player, UpdatePlayerPosition, ResetPlayer];
}