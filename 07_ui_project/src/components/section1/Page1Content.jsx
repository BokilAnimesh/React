import React from 'react'
import LeftText from './LeftText'
import ImageContainer from './ImageContainer'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex gap-10 items-center h-[90vh] px-18'>
        <LeftText/>
        <ImageContainer users={props.users}/>
    </div>
  )
}

export default Page1Content