import React from 'react'
import {MdKeyboardArrowRight} from "react-icons/md";
import banner2 from '../Assests/banner2.jpg'
import { Link } from 'react-scroll';
import Portfolio from './Portfolio';

const Home = () => {
  return (
    <div name="Home" className='flex h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black'>
        <div className='max-w-screen-lg mx-auto flex flex-co items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center f-full '>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Frontend Developer Using React JS  </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 8 month expersience for making frontend for websites.I love to work on technology like Tailwind ,Html,css and React js.
                </p>
                <div>
                    <Link to={Portfolio} smooth duration={500} className= ' group text-white w-fit px-6 py-3  my-8 flex items-center rounded-md bg-gradient-to-r  from-cyan-500 to-blue-500 cursor-pointer '>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>

                        <MdKeyboardArrowRight size={25} className='ml-1'/> 
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={banner2} alt="" srcset=""  className='rounded-3xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>

    </div>
  )
}

export default Home