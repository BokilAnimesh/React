import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState([10,20,30])

  const [val, setVal] = useState({user:'Ansh', age:22})

  const buttonClicked=()=>{
    const newNum=[...num]
    newNum.push(99)

    setNum(newNum)
  }

  const btnclicked=()=>{
    const newVal={...num}
    newVal.user='Animesh'
    newVal.age=20
    setVal(newVal)
  }

  const resetbutClicked=()=>{
    setNum(prev=>({...prev,age:50}))
  }

  return (
    <div>
      <div>
      <h1>{num}</h1>
      <button onClick={buttonClicked}>Click</button>
    </div>
    <div>
      <h1>{val.user}, {val.age}</h1>
      <button onClick={btnclicked}>Click</button>
      <button onClick={resetbutClicked}>Reset</button>
    </div>
    </div>

  )
}

export default App