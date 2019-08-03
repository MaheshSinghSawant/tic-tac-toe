import React from "react"
import "./Button.css"

interface IButtonProps {
  /**
   * text to be shown
   */
  text: string
  /**
   * handle click
   */
  onClickHandler: () => void
}

export function Button({ text, onClickHandler }: IButtonProps) {
  return <div className="Button u-largeFont u-flexCenter" onClick={onClickHandler}>{text}</div>
}
