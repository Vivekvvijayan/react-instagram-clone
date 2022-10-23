import React from 'react'

function Loader() {
  return (
    <>
    <div className='w-screen h-screen flex-1 flex justify-center items-center relative'>
        <div className="w-[50px] h-[50px] object-cover">

            <img src="/logoInsta.png" alt=""className='h-full' />

        </div>
    </div>
        <img src="/meta.jpg" alt=""className='h-20 absolute bottom-5 left-[50%] translate-x-[-50%]'  />
    </>
  )
}

export default Loader