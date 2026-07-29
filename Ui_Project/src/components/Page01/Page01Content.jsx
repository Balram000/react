import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const page01Content = () => {
  return (
    <div className='py-10 flex items-center  px-18 h-[90vh]  gap-10 ' >
       <LeftContent/>
       <RightContent/>
    </div>
  )
}

export default page01Content
