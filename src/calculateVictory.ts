// the function that checks if there is a winner in the grid
// the logic is as follows:

// We know which row and col were changed by the click and they are available as input args
// 1. check if all cells in same row are of the same value, if so that value wins
// 2. check if all cells in same column are of the same value, if so that value wins
// 3. check diagonal and reverse diagonals for same value and if so, that value wins

// check if each element is 1
const isAllX = (arr: any) => {
  return arr.every((ele: number) => ele === 1)
}
// check if each element is -1
const isAllO = (arr: any) => {
  return arr.every((ele: number) => ele === -1)
}

export function calculateWinner(row: number, col: number, board: any) {
  // create a list of all values in same column
  let colValues = []
  for (let i = 0; i < board.length; i++) {
    colValues.push(board[i][col])
  }

  // fill diagonal array in linear time
  let diagonalArr = []
  for (let i = 0; i < board.length; i++) {
    diagonalArr.push(board[i][i])
  }

  // fill reverse diagonal in linear time
  let reverseDiagonalArr = []
  for (let i = 0; i < board.length; i++) {
    reverseDiagonalArr.push(board[i][board.length - 1 - i])
  }

  if (
    isAllX(board[row]) ||
    isAllX(colValues) ||
    isAllX(diagonalArr) ||
    isAllX(reverseDiagonalArr)
  ) {
    return 1
  }

  if (
    isAllO(board[row]) ||
    isAllO(colValues) ||
    isAllO(diagonalArr) ||
    isAllO(reverseDiagonalArr)
  ) {
    return 2
  }

  return 0
}
