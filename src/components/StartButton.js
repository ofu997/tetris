import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton'; 

const StartButton = props =>
  <StyledStartButton onlick = { props.callback } >Start Game</StyledStartButton>

export default StartButton; 