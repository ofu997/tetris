export const StageWidth = 12;
export const StageHeight = 20; 

export const CreateStage = () => 
  Array.from(Array(StageHeight), () => 
    new Array(StageWidth).fill([0,'clear'])
  )