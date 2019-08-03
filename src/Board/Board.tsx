// Board component contains the tic tac toe game board where the user can click of board cells

import React from "react"
import "./Board.css"
import { Button } from "../Button/Button"
import { calculateWinner } from "../calculateVictory"

interface IBoardProps {
  /**
   * The size N used to create an N x N board
   */
  size: number
}

export function Board({ size }: IBoardProps) {
  // Inital state vaues
  const [state, setState] = React.useState({
    // The size N x N board, initalized with size 0 and 0
    board: new Array(0).map(() => new Array(0)),
    // The height and width of each board cell
    cellSize: 0,
    // True if player 1 is playing, false if player 2 is playing
    player1: true,
    // winner = 1 if player1 wins or winner = 2 if player2 wins
    winner: 0
  })

  // UseEffect with 'size' as second argument is used to re-render only when size is changed (usually first render)
  // Create the N X N board and fill it with 0s
  // This is the only step which takes O(N^2) time, calculating winner should be linear
  React.useEffect(() => {
    if (size > 0) {
      setState({
        ...state,
        // 0 size array filled with 0s
        board: new Array(size).fill(null).map(() => new Array(size).fill(0)),
        cellSize: 720 / size
      })
    }
  }, [size])

  /* When a cell is clicked on extract the row and col value from the cell that was clicked
   * update board with 1 if player 1 was playing so that an 'X' is shown in the cell
   * or update board with -1 for other player, so that 'O 'is shown
   *
   * Also toggle player
   */
  const handleClick = (row: number, col: number) => {
    if (!state.board[row][col]) {
      let newBoard = state.board
      newBoard[row][col] = state.player1 ? 1 : -1
      let winner = calculateWinner(row, col, newBoard)
      setState({
        ...state,
        board: newBoard,
        player1: !state.player1,
        winner: winner
      })
    }
  }

  /* Create the board, where each cell of the board represents an area where a user can click to create a cross or circle
   * While creating the board we keep track of each cell's row and col index such that:
   * --------------
    |     |      |
    | 0,0 |  0,1 |
    |     |      |
    --------------
    |     |      |
    | 1,0 |  1,1 |
    |     |      |
    --------------
   * 
   */
  const restartButton = (
    <Button
      text={"Restart Game"}
      onClickHandler={() => window.location.reload()}
    />
  )

  if (state.winner > 0) {
    return (
      <div className="Board-winnerModal u-flexCenter">
        <div className="u-extraLargeFont">{`Player ${state.winner} Wins!`}</div>
        {restartButton}
      </div>
    )
  }

  return (
    <div className="Board-container">
      <div className="Board Board-content u-flexCenter">
        {state.board.map((row, ridx) => {
          return row.map((col, cidx) => {
            let content = ""
            if (state.board[ridx][cidx] > 0) {
              content = "X"
            } else if (state.board[ridx][cidx] < 0) {
              content = "O"
            }
            return (
              <div
                key={`cell-${ridx},${cidx}`}
                onClick={() => handleClick(ridx, cidx)}
                className="Board-cell u-flexCenter u-colorTheme"
                style={{
                  height: state.cellSize,
                  width: state.cellSize
                }}
              >
                <div
                  style={{
                    fontSize: state.cellSize
                  }}
                >
                  {content}
                </div>
              </div>
            )
          })
        })}
      </div>
      <div className="Board Board-border"></div>
      <div className="Board-details">
        <div className="u-colorTheme u-largeFont">Player 1 : X</div>
        <div className="u-colorTheme u-largeFont">Player 2 : O</div>
        {restartButton}
      </div>
    </div>
  )
}
