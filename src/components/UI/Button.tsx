import React, { ButtonHTMLAttributes } from 'react'

import classes from './Button.module.css'

type ButtonPorps = {
  children: React.ReactNode
  className: string
  type: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  disabled: ButtonHTMLAttributes<HTMLButtonElement>['disabled']
}

export const Button = (props: ButtonPorps) => {
  return (
    <button
      type="button"
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}
