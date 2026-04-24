import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("Button is clicked.")
  }

  function inputChanging(value){
    console.log(value);
    
  }

  function pageScrolling(elem){
    console.log("page scrolling at speed",elem);
    
  }
  return (
    <div>
      <div>
        <button onClick={btnClicked}>Click Here</button>
      <button onClick={function(){
        console.log("Hello Guys");
      }}>Register here</button>

      <input onChange={function(elem){
        inputChanging(elem.target.value)
      }} type="text" placeholder='Enter your name.' />
      </div>


      <div onMouseEnter={(elem)=>{
        console.log(elem.clientX)
      }} className='box'>

      </div>


      <div onWheel={(elem)=>{
        pageScrolling(elem.deltaY)
      }}>
        <div className='page1'></div>
        <div className='page2'></div>
        <div className='page3'></div>
      </div>
    </div>
  )
}

export default App