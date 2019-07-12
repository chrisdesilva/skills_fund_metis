import React from 'react'

const Button = props => (
    <div className={props.divClassName}>
        <button onClick={props.onClick} className={props.buttonClassName}>{props.text}</button>
    </div>
)

export default Button