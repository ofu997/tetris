import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  // align-item: flex-end;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px; 
  width: 100%;
  border-radius: 20px;
  // #999
  color: ${props => (props.gameOver ? 'red' : 'rgba(255,215,0,1)')};
  // background: #000;
  // background: #a9a9a9;
  background: #333;
  opacity: 0.6;
  font-family: Pixel, Arial, Helvetica, sans-serif; 
  font-size: 0.8rem; 
`
