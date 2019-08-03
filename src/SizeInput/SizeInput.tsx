import React from "react"
import "./SizeInput.css"
import { Button } from "../Button/Button"

interface ISizeInputProps {
  /**
   * A submit handler functions which updates board size in Game
   */
  onSubmitHandler: (value: number) => void
}

export function SizeInput({ onSubmitHandler }: ISizeInputProps) {
  // Input value is stored in state
  const [state, setState] = React.useState({
    value: "",
    error: ""
  })

  // when the user enters value in input field, update state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e &&
      e.target &&
      e.target.value &&
      setState({ ...state, value: e.target.value })
  }

  // when Create Game button is clicked, create execute the onSubmitHandler
  // if input is not valid, show error
  const handleSubmit = () => {
    let numericalValue = parseInt(state.value, 10)
    if (numericalValue <= 1 || isNaN(numericalValue)) {
      setState({
        ...state,
        error: "Please enter positive interger greater than 1"
      })
    } else {
      onSubmitHandler(numericalValue)
    }
  }

  // pressing enter also submits
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && e.key && e.key === "Enter") {
      handleSubmit()
    }
  }

  return (
    <div className="SizeInput">
      <div className="u-extraLargeFont">Tic-Tac-Toe</div>
      <div className="SizeInput-inputHeader u-mediumFont u-colorTheme">Enter desired size of board</div>
      <input
        autoFocus={true}
        className="SizeInput-inputField u-largeFont"
        type="text"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <Button text={"start game"} onClickHandler={handleSubmit} />
      {state.error && <div className="SizeInput-error u-mediumFont">{state.error}</div>}
    </div>
  )
}
