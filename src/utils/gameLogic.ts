import { GridCell } from "../types/interfaces"

type CheckVictoryArgs = {
  gameState: GridCell[][],
  player: string
}

type CheckDrawArgs = {
  gameState: GridCell[][]
}

export const checkVictory = ({ gameState, player }: CheckVictoryArgs): boolean => {
  const rows = 6, columns = 7

  // Checking for horizontal coins
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns - 3; col++) {
      if (
        gameState[row][col].player === player &&
        gameState[row][col + 1].player === player &&
        gameState[row][col + 2].player === player &&
        gameState[row][col + 3].player === player
      ) {
        return true
      }
    }
  }

  // Checking for vertical coins
  for (let row = 0; row < rows - 3; row++) {
    for (let col = 0; col < columns; col++) {
      if (
        gameState[row][col].player === player &&
        gameState[row + 1][col].player === player &&
        gameState[row + 2][col].player === player &&
        gameState[row + 3][col].player === player
      ) {
        return true
      }
    }
  }

  for (let row = 0; row < rows - 3; row++) {
    for (let col = 0; col < columns - 3; col++) {
      // Checking for top left to bottom right diagonal
      if (
        gameState[row][col].player === player &&
        gameState[row + 1][col + 1].player === player &&
        gameState[row + 2][col + 2].player === player &&
        gameState[row + 3][col + 3].player === player
      ) {
        return true
      }

      // Checking for bottom left to top right diagonal
      if (
        gameState[row + 3][col].player === player &&
        gameState[row + 2][col + 1].player === player &&
        gameState[row + 1][col + 2].player === player &&
        gameState[row][col + 3].player === player
      ) {
        return true
      }
    }
  }

  return false
} 

export const checkDraw = ({ gameState }: CheckDrawArgs): boolean => {
  // First restructure the gamestat into a simple array of objects
  const simpleGameState = gameState.flatMap(row => row)

  // Count the number of empty tiles
  const emptyTileCount = simpleGameState.reduce((acc, cell) => {
    if (cell.player === null) acc++
    return acc
  }, 0)

  // A draw has occurred if there are no null values
  return emptyTileCount === 0
}