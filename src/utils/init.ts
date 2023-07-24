import { GridCell } from "../types/interfaces"

export const makeEmptyGrid = (): GridCell[][] => {
  const rows = 6, columns = 7

  return Array.from({ length: rows }, () => (
    Array.from({ length: columns }, (_, colIndex) => ({ 
      column: colIndex, 
      player: null
    }))
  ))
}