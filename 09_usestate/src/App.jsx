import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(20)

  const [username, setUsername] = useState("Ansh")
  function changeNum(){
    setNum(30)
    setUsername("Animesh")
  }


  const [val, setVal] = useState(0)


  function changeVal(){
    setVal()
  }

  function increaseNum(){
    setVal(val+1)
  }
  function decreaseNum(){
    setVal(val-1)
  }
  function jmpBy5(){
    setVal(val+5)
  }
  return (
    <div>
      <div id='one'>
        <h1>The value of num is {num}<br/>The value of user is {username}</h1>
        <button onClick={changeNum}>Click</button>
      </div>
      <div id='two'>
      <h1>{val}</h1>
      <button onClick={increaseNum}>Increment</button>
      <button onClick={decreaseNum}>Decrement</button>
      <button onClick={jmpBy5}>Jump by 5</button>
      </div>
    </div>
  )
}

export default App