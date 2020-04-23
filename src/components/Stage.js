import React from 'react';
import Cell from './Cell';

const Stage = props =>
  <div>
    {
      props.stage.map(row => 
        row.map((cell,x) => 
          <Cell 
            key=''
            type={cell[0]}
          />
        )
      )
    }    
  </div>

export default Stage;