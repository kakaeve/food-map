import React, { useReducer, useRef, useState, useEffect } from 'react'
import classes from './Login.module.css'

import Card from '@components/UI/Card'
import Button from '@components/UI/Button'
import Input from '@components/UI/Input'
import ImageSlider from '@components/UI/ImageSlider'

const emailReducer = (state, action: { type: string; val: string }) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: 'false' }
}

const passwordReducer = (state, action: { type: string; val: string }) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: 'false' }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false)
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: '' })
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  useEffect(() => {
    console.log('eferrr')
    return () => {}
  }, [])

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid)
    }, 500)
    return () => {
      clearTimeout(identifier)
    }
  }, [emailIsValid, passwordIsValid])
  const emailChangeHandler = (e) => {
    dispatchEmail({ type: 'USER_INPUT', val: e.target.value })
  }
  const validateEmailHandler = (e) => {
    dispatchEmail({ type: 'INPUT_BLUR', val: e.target.value })
  }
  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: 'USER_INPUT', val: e.target.value })
  }
  const validatePasswordHandler = (e) => {
    dispatchPassword({ type: 'INPUT_BLUR', val: e.target.value })
  }

  const submitHandler = (e) => {
    e.prevantDefault()
  }
  return (
    <div className={classes.bg}>
      <ImageSlider />
      <Card className={classes.login}>
        <Input
          type="email"
          id="email"
          labelName="E-mail"
          ref={emailInputRef}
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
        <Input
          type="password"
          id="password"
          labelName="비밀번호"
          ref={passwordInputRef}
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        <Button>로그인</Button>
      </Card>
    </div>
  )
}

export default Login
