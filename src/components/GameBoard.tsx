import React, { useState } from 'react'
import GameSquare from './GameSquare'
import { players, GridCell } from '../types/interfaces'
import { makeEmptyGrid } from '../utils/init';

// function getRandomPlayer() {
//   const playersArray = ['p1', 'p2', ''];
//   const randomIndex = Math.floor(Math.random() * playersArray.length);
//   return playersArray[randomIndex];
// }

const GameBoard = () => {
  const [gameState, setGameState] = useState<GridCell[][]>(makeEmptyGrid())
  const [currentTurn, setCurrentTurn] = useState<string>(players.FIRST)

  const squaresNew = gameState.map((row, rowIndex) => (
    row.map(({ column, player }, colIndex) => (
      <GameSquare rowIndex={rowIndex} colIndex={colIndex} player={player} />
    ))
  ))

  const handleTurnChange = (): void => {
    setCurrentTurn(prevTurn => (
      prevTurn === 'p1' ? 'p2' : 'p1'
    ))
  }

  return (
    <div className='flex justify-center mx-auto'>
      <div 
        className='w-3/4 relative grid grid-flow-row grid-cols-[repeat(7,_5rem)] grid-rows-[5rem_repeat(5,_5rem)] place-items-center place-content-center'
      > {
        squaresNew.map(square => square)
      }</div>
    </div>
  )
}

export default GameBoard