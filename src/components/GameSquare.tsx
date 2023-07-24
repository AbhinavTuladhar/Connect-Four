import React, { FunctionComponent } from 'react'

interface SquareProps {
  rowIndex: number,
  colIndex: number,
  player: string,
  currentTurn: string,
  handleTurnChange: () => void
}

const GameSquare: FunctionComponent<SquareProps> = ({ rowIndex, colIndex, player, currentTurn, handleTurnChange }) => {
  // Provide extra border styling based on values of rowIndex and colIndex
  const firstRow = rowIndex === 0
  const lastRow = rowIndex === 5
  const firstCol = colIndex === 0
  const lastCol = colIndex === 6

  return (
    <div 
      className={`
        flex w-full h-full justify-center items-center text-sm bg-blue-700
        ${firstRow && firstCol && 'rounded-tl-[3rem]'}
        ${firstRow && lastCol && 'rounded-tr-[3rem]'}
        ${lastRow && firstCol && 'rounded-bl-[3rem]'}
        ${lastRow && lastCol && 'rounded-br-[3rem]'}
      `}
    > 
      <div 
        className={
          `w-5/6 h-5/6 bg-slate-200 rounded-full
          ${firstRow && 'cursor-pointer'}
          ${currentTurn === 'p1' && rowIndex === 0 && 'hover:bg-red-400'}
          ${currentTurn === 'p2' && rowIndex === 0 && 'hover:bg-yellow-400'}
        `}
        onClick={firstRow ? handleTurnChange : undefined}
      >

        </div>
    </div>
  )
}

export default GameSquare