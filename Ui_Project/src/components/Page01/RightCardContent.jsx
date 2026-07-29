import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = () => {
    return (
        
            <div className='absolute top-0 left-0 h-full w-full  p-8 flex  flex-col justify-between '>
                <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center '>1</h2>
          
              <div>
              <p className='text-white text-xl  leading-relaxed mb-14 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, soluta cum? Consectetur debitis dolor maiores enim animi quidem eveniet veniam.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-500 text-white font-semibold px-7 py-2 rounded-full  '>
                        Satisfied
                    </button>
                    <button className='bg-blue-500 text-white font-semibold px-3 py-3 rounded-full '>
                        <ArrowRight className='' />
                    </button>
              </div>
                </div>
            </div>
        
    )
}

export default RightCardContent
