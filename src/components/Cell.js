import React from 'react';
import { StyledCell } from './styles/StyledCell'; 
import { Tetrominos } from '../tetrominos';

const Cell = (props) => 

  <StyledCell type = { props.type } color = { Tetrominos[props.type].color } />

export default React.memo(Cell); 