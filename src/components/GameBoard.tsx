import React from 'react'
import GameSquare from './GameSquare'

const GameBoard = () => {
  const squares = []

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      const tempSquare = <GameSquare rowIndex={row} colIndex={col} />
      squares.push(tempSquare)
    }
  }

  return (
    <div className='flex justify-center mx-auto'>
      <div 
        className='w-3/4 relative grid grid-flow-row grid-cols-[repeat(7,_6rem)] grid-rows-[repeat(6,_6rem)] place-items-center place-content-center'
      > {
        squares.map(square => square)
      }</div>
    </div>
  )
}

export default GameBoard