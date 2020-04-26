import styled from 'styled-components';

// import bgImage from '../../img/bg.png';
import bgImage from '../../img/northernlights.jpg';
// window styling
export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  // width 1200px;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden; 
`

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  // align-items: center; 
  // added this one. #howtocenter
  justify-content: center;
  padding: 40px;
  margin: 0 auto;
  // max-width: 900px; 
  max-width: 90%; 

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px; 
  }
`