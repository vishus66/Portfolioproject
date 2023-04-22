import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline bordder-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to contact with me </p>
            </div>

            <div className='flex justify-center items-center '>
                <form action="https://getform.io/f/6d2b16f3-9003-400a-bc52-7a3ac044a4e1" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter you name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name="Email" placeholder='Enter you Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea  name="message" rows={10} placeholder='message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                </form>

                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  my-8 mx-auto flex flex-col items-center rounded-md hover:scale-110 duration-300'>Let's talk </button>
            </div>
        </div>
    </div>
  )
}

export default Contact