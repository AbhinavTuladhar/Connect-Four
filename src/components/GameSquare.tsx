import React, { FunctionComponent } from 'react'

interface SquareProps {
  rowIndex: number,
  colIndex: number
}

const GameSquare: FunctionComponent<SquareProps> = ({ rowIndex, colIndex }) => {
  // Provide extra border styling based on values of rowIndex and colIndex

  return (
    <div 
      className={`
        flex w-full h-full justify-center items-center text-sm bg-blue-700
        ${rowIndex === 0 && colIndex === 0 && 'rounded-tl-[3rem]'}
        ${rowIndex === 0 && colIndex === 6 && 'rounded-tr-[3rem]'}
        ${rowIndex === 5 && colIndex === 0 && 'rounded-bl-[3rem]'}
        ${rowIndex === 5 && colIndex === 6 && 'rounded-br-[3rem]'}
      `}
    > 
      {/* {`${rowIndex}-${colIndex}`} */}
      <div className='w-5/6 h-5/6 bg-slate-200 rounded-full'></div>
    </div>
  )
}

export default GameSquare