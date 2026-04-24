import React from 'react'
import HeroText from './HeroTExt'
import Arrow from './Arrow'

const LeftText = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/4'>
    <HeroText/>
    <Arrow/>
   
    </div>
  )
}

export default LeftText