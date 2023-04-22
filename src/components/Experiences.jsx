import React from 'react'
import htmls from '../Assests/htmls.png'
import CSSLogo from '../Assests/CSSLogo.png'
import JavascriptLogo from '../Assests/JavaScriptLogo.png'
import reactjs from '../Assests/reactjs.png'
import tailwindthumb from '../Assests/tailwindthumb.jpg'
import github from '../Assests/github.png'

const Experiences = () => {
    const techs = [
        {
            id:1,
            src:htmls,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:CSSLogo,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:JavascriptLogo,
            title:'Javascript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactjs,
            title:'Reactjs ',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:tailwindthumb,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:github,
            title:'GitHub',
            style:'shadow-gray-500'
        },
    ]
  return (
    <div name='Experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Expersience</p>
                <p className='py-6'>These are the technology I've worked with </p>
            </div>


             
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-centerpy-8 px-12 sm:px:0'>


                {
                    techs.map(({id,src,title,style})=>(

                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt=""  className='w-20 mx-auto'/>
                    <p className='mt-4 mx-10 justify-center items-center'>{title}</p>
                </div>
                    ))
                }
            </div>

            
        </div>
         
    </div>
  )
}

export default Experiences