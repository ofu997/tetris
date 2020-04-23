import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { CreateStage } from '../gameHelpers';

const Tetris = props =>
  <div>
    <Stage 
      stage = { CreateStage() } 
    />
      <aside>
        <Display 
          text='Score'
        />
        <Display
          text='Rows'
        />
        <Display
          text='Level'
        />
        <StartButton></StartButton>
      </aside>
  </div>

export default Tetris; 