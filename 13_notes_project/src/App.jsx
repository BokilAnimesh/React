import React, { useState } from 'react'


const App = () => {

   const [title, setTitle] = useState('')
   const [details, setDetails] = useState('')

   const [task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()

    const copyTask=[...task];

    copyTask.push({title,details})

    setTask(copyTask)

    setTitle('')
    setDetails('')
    
  }

  const deleteNote=(idx)=>{
      const copyTask=[...task];
      copyTask.splice(idx,1);
      setTask(copyTask)
    }

 

  return (
    <div className='h-screen lg:flex bg-black text-cyan-50'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex flex-col lg:w-1/2 items-start gap-4 p-10'>

        <h1 className='text-4xl font-bold'>Add Notes</h1>
        
        <input 
          type="text" 
          placeholder='Enter Notes Heading' 
          className='px-5 py-2 font-medium w-full outline-none border-2 rounded' 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        
        <textarea 
          type="text" 
          placeholder='Enter Notes Details' 
          className='px-5 py-2 h-32 font-medium w-full flex items-start flex-row outline-none border-2 rounded'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        
        <button className='bg-white active:scale-95 text-black font-medium px-5 py-2 w-full rounded '>Add notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]'>
          {task.map(function(elem, idx){
             return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App