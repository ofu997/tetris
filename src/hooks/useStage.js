import { useState, useEffect } from 'react';
import { CreateStage } from '../gameHelpers';

export const useStage = (player, ResetPlayer) => {
  const [stage, setStage] = useState(CreateStage());
  useEffect(() => {
    const updateStage = prevStage => {
      // flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear']:cell)
        ),       
      );
      // draw the tetromino
      player.tetromino.forEach((row, y) => {
        console.log('row: ' + row);
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value, 
              `${player.collided} ? 'merged' : 'clear'`,
            ];
          }
        });
      });
      return newStage;
    }
  //   setStage(prev => updateStage(prev))
  // },[player.collided, player.pos.x, player.pos.y, player.tetromino]);
    setStage(prev => updateStage(prev))
  },[player]);  
  return [stage, setStage];
}