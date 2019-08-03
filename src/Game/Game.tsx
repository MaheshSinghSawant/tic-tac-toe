import React from "react"
import { SizeInput } from "../SizeInput/SizeInput"
import { Board } from "../Board/Board"

function Game() {
  // When the game starts, ie when you land on the page
  // size has not been entered yet so it is 0
  const [state, setState] = React.useState({
    boardSize: 0
  })

  // handle updating size of board when user enters value in SizeInput component
  const handleInputSizeSubmit = (value: number) => {
    setState({ boardSize: value })
  }

  // show the SizeInput component if board size is 0
  if (!state.boardSize) {
    return <SizeInput onSubmitHandler={handleInputSizeSubmit} />
  }
  return <Board size={state.boardSize} />
}

export default Game
