import React, { FunctionComponent } from 'react'

interface SquareProps {
  rowIndex: number,
  colIndex: number,
  player: string,
  currentTurn: string,
  handleTurnChange: () => void,
  handleStateChange: (player: string, column: number) => any
}

const GameSquare: FunctionComponent<SquareProps> = ({ 
    rowIndex, 
    colIndex, 
    player, 
    currentTurn, 
    handleTurnChange, 
    handleStateChange 
  }) => {
  // Provide extra border styling based on values of rowIndex and colIndex
  const firstRow = rowIndex === 0
  const lastRow = rowIndex === 5
  const firstCol = colIndex === 0
  const lastCol = colIndex === 6

  const handleClick = (): void => {
    handleTurnChange()
    handleStateChange(currentTurn, colIndex)
  }

  return (
    <div 
      className={`
        flex w-full h-full justify-center items-center text-sm bg-blue-700
        ${firstRow && firstCol && 'rounded-tl-[1rem] md:rounded-tl-[3rem]'}
        ${firstRow && lastCol && 'rounded-tr-[1rem] md:rounded-tr-[3rem]'}
        ${lastRow && firstCol && 'rounded-bl-[1rem] md:rounded-bl-[3rem]'}
        ${lastRow && lastCol && 'rounded-br-[1rem] md:rounded-br-[3rem]'}
      `}
    > 
      <div 
        className={
          `w-5/6 h-5/6 bg-slate-200 rounded-full
          ${firstRow && 'cursor-pointer'}
          ${currentTurn === 'p1' && firstRow && 'hover:bg-red-400'}
          ${currentTurn === 'p2' && firstRow && 'hover:bg-yellow-400'}
          ${player === 'p1' && 'bg-red-400'}
          ${player === 'p2' && 'bg-yellow-400'}
        `}
        onClick={firstRow && !player ? handleClick : undefined}
      >
        </div>
    </div>
  )
}

export default GameSquare