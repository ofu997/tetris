import React, { useState } from 'react';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { CreateStage } from '../gameHelpers';
import '../../src/App.css';
// custom hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
// useInterval
// 

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = props => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  
  const [player, UpdatePlayerPosition, ResetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, ResetPlayer);
  const StartGame = () => {
    // resets everything
    console.log('re-render');
    setStage(CreateStage());
    ResetPlayer();
  }
  const MovePlayer = dir => {
    UpdatePlayerPosition({ x: dir, y: 0 });
    console.log('moved' + dir);
  } 
  const Drop = () => {
    UpdatePlayerPosition({ x:0, y:1, collided: false });
    console.log('dropped');
  }
  const DropPlayer = () => {
    Drop();
  }
  const Move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode) {
        if (keyCode === 65) {
          MovePlayer(-1);
        }
        else if (keyCode === 39) {
          MovePlayer(1); 
        }
        else if (keyCode === 40) {
          DropPlayer(); 
        }        

      }

    } 
  }

  // const Move = () => {
  //   for(let i=0; i<5;i++) {
  //     DropPlayer();
  //   }
  // }  

  // ({keyCode}) => console.log(keyCode);

  return (
    <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown = { e => Move(e) } >
      <StyledTetris>
        <h1 style={{ maxWidth: '10%', fontFamily: 'Pixel, sans-serif', color: 'rgb(255,215,0,0.6)', marginRight: '10%' }}>Tetris</h1>
        <Stage 
          stage = { stage } 
        />
        <aside>
          {
            gameOver ? 
              <display gameOver = { gameOver } text = 'Game Over' />
              : 
              <div>
                <Display 
                  text='Score'
                />
                <Display
                  text='Rows'
                />
                <Display
                  text='Level'
                />
              </div>
          }
          <StartButton callback = { StartGame } className='StartButton'></StartButton>
        </aside>
        </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris; 