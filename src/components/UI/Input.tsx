import React, { InputHTMLAttributes, useImperativeHandle, useRef } from 'react'

import classes from './Input.module.css'

type InputProps = {
  isValid: boolean
  id: string
  type: InputHTMLAttributes<HTMLInputElement>['type']
  value: InputHTMLAttributes<HTMLInputElement>['value']
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange']
  onBlur: InputHTMLAttributes<HTMLInputElement>['onBlur']
}

const Input = React.forwardRef((props: InputProps, ref) => {
  const inputRef = useRef(null)
  const activate = () => {
    inputRef.current.focuse()
  }

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    }
  })
  return (
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.id}>props.labelName</label>
      <input
        ref={inputRef}
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
})

export default Input
