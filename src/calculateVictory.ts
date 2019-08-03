// the function that checks if there is a winner in the grid
// the logic is as follows:

// We know which row and col were changed by the click and they are available as input args
// 1. check if all cells in same row are of the same value, if so that value wins
// 2. check if all cells in same column are of the same value, if so that value wins
// 3. check diagonal and reverse diagonals for same value and if so, that value wins

export function calculateWinner(row: number, col: number, board: any) {
  const isRowAllX = board[row].every((ele: number) => ele === 1)
  if (isRowAllX) {
    return 1
  }

  const isRowAllO = board[row].every((ele: number) => ele === -1)
  if (isRowAllO) {
    return 2
  }
  // create a list of all values in same column
  let colValues = []
  for (let i = 0; i < board.length; i++) {
    colValues.push(board[i][col])
  }

  const isColAllX = colValues.every((ele: number) => ele === 1)
  if (isColAllX) {
    return 1
  }
  const isColAllO = colValues.every((ele: number) => ele === -1)
  if (isColAllO) {
    return 2
  }

  return 0
}
