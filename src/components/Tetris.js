import React, { useState } from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { CreateStage } from '../gameHelpers';
// styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import '../../src/App.css';
// custom hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

const Tetris = props => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  
  const [player, UpdatePlayerPosition, ResetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, ResetPlayer);
  console.log('re-render');
  const StartGame = () => {
    // resets evrething
    setStage(CreateStage());
    ResetPlayer();
  }
  const MovePlayer = dir => {
    UpdatePlayerPosition({ x: dir, y: 0 });
  } 
  const Drop = () => {
    UpdatePlayerPosition({ x:0, y:1, collided: false });
  }
  const DropPlayer = () => {
    Drop();
  }
  const Move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode) {
        if (keyCode === 37) {
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
  return (
    <StyledTetrisWrapper>
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
          <StartButton onClick = { StartGame } className='StartButton'></StartButton>
        </aside>
        </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris; 