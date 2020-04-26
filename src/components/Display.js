import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = props =>
  <StyledDisplay
    gameOver = { props.gameOver }
  >
    <div className='DisplayText'>{ props.text }</div>
  </StyledDisplay>

export default Display;