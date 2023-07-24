import React, { useState } from 'react'
import GameSquare from './GameSquare'
import { players, GridCell } from '../types/interfaces'
import { makeEmptyGrid } from '../utils/init';
// import { updateState } from '../utils/gameLogic';

const GameBoard = () => {
  const [gameState, setGameState] = useState<GridCell[][]>(makeEmptyGrid())
  const [currentTurn, setCurrentTurn] = useState<string>(players.FIRST)

  const handleTurnChange = (): void => {
    setCurrentTurn(prevTurn => (
      prevTurn === 'p1' ? 'p2' : 'p1'
    ))
  }

  const updateState = (player: string, colIndex: number) => {
    setGameState((prevState) => {
      const updatedGrid = [...prevState]

      let rowIndex = 5
      // Find the lowest value of the row in which the circle goes
      while (true) {
        // Get the row array
        const baseRowArray = [...updatedGrid[rowIndex]]

        // Find the column with the corresponding column index
        const gridCell = baseRowArray.find(column => column.column === colIndex && column.player === null)
        
        if (gridCell) {
          // Create a new object with the updated player property
          const updatedGridCell = { ...gridCell, player }

          // Update the cell in the cloned row array
          const cellIndex = baseRowArray.indexOf(gridCell)
          baseRowArray[cellIndex] = updatedGridCell
          
          // Update the row in the cloned grid
          updatedGrid[rowIndex] = baseRowArray
          break
        } else {
          rowIndex--
        }
      }
      return updatedGrid
    })
  } 

  console.log(gameState)

  const squaresNew = gameState.map((row, rowIndex) => (
    row.map(({ player }, colIndex) => (
      <GameSquare 
        rowIndex={rowIndex} colIndex={colIndex} 
        player={player} currentTurn={currentTurn} 
        handleTurnChange={handleTurnChange} 
        handleStateChange={() => updateState(currentTurn, colIndex)}
      />
    ))
  ))

  return (
    <div className='flex flex-col items-center justify-center mx-auto'>
      <div className='text-xl mb-4'>
        {`${currentTurn}'s turn.`}
      </div>
      <div 
        className='w-3/4 relative grid grid-flow-row grid-cols-[repeat(7,_5rem)] grid-rows-[5rem_repeat(5,_5rem)] place-items-center place-content-center'
      > {
        squaresNew.map(square => square)
      }</div>
    </div>
  )
}

export default GameBoard