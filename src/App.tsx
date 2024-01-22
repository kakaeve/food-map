import React, { useState } from 'react'
import classes from './App.module.css'
import { Card } from './components/UI/Card'
import { Button } from './components/UI/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Card>
          <Button>asd</Button>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default App
