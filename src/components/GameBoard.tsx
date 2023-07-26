import React, { useState, useEffect } from 'react'
import GameSquare from './GameSquare'
import { players, GridCell } from '../types/interfaces'
import { makeEmptyGrid } from '../utils/init';
import { checkVictory, checkDraw } from '../utils/gameLogic';

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

  type stateChangeProps = {
    currentTurn: string,
    colIndex: number,
  }

  const handleStateChange = ({ currentTurn, colIndex } : stateChangeProps) => {
    updateState(currentTurn, colIndex)
  }

  useEffect(() => {
    // Find the player who just moved
    const prevPlayer = currentTurn === 'p1' ? 'p2' : 'p1'
    const victoryCheck = checkVictory({ gameState: gameState, player: prevPlayer })
    const drawCheck = checkDraw({ gameState: gameState })
    // Declare the winner and reset the board.
    if (victoryCheck) {
      alert(`${prevPlayer} is the winner!`)
      setGameState(makeEmptyGrid())
    }
    // Reset the board if a draw is detected
    if (drawCheck) {
      alert('It is a draw. Lame!')
      setGameState(makeEmptyGrid())
    }
  }, [gameState, currentTurn])

  const squaresNew = gameState.map((row, rowIndex) => (
    row.map(({ player }, colIndex) => {
      const SquareArgs: stateChangeProps = {
        currentTurn: currentTurn,
        colIndex: colIndex,
      }

      return <GameSquare 
        rowIndex={rowIndex} colIndex={colIndex} 
        player={player} currentTurn={currentTurn} 
        handleTurnChange={handleTurnChange} 
        handleStateChange={() => handleStateChange(SquareArgs)}
      />
    })
  ))

  console.log(gameState)

  return (
    <div className='flex flex-col items-center justify-center mx-auto'>
      <div className='text-xl mb-4'>
        {`${currentTurn}'s turn.`}
      </div>
      <div 
        className='w-3/4 relative grid grid-flow-row grid-cols-[repeat(7,_3rem)] grid-rows-[repeat(6,_3rem)] md:grid-cols-[repeat(7,_5rem)] md:grid-rows-[repeat(6,_5rem)] place-items-center place-content-center'
      > {
        squaresNew.map(square => square)
      }</div>
    </div>
  )
}

export default GameBoard