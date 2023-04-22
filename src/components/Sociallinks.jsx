import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
// import { Link } from 'react-router-dom'

const Sociallinks = () => {
  const links =[
    {
      id:1,
      child:(
        <>
        LinkedIn<FaLinkedin size={30}/></>
      ),
      style:'rounded-tr-md',
      href:'https://www.linkedin.com/in/abhinav-saini-269a03202/',
    },

    {
      id:2,
      child:(
        <>
        Instagram<FaInstagram size={30}/>

        </>
      ),
      
      href:"www.Instagram.com"
      },
      {
      
      id:3,
      child:(
        <>
        Github<FaGithub size={30}/>
        </>
      ),
      href:"https://github.com/vishus66"
      },

      {
      
      id:4,
      child:(
        <>
        Email<HiOutlineMail size={30}/>

        </>
      ),
      href:"vishus0606@gmail.com"

      },
      

      {
        id:5,
      child:(
        <>
        Resume<BsFillPersonLinesFill size={30}/>
        </>
      ),
      href:'./Abhinav saini.pdf',
      style:'rounded-br-md',
      download:true,
      
    }
  ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
      <ul>
        {links.map(({id,child,href,style,download})=>(

        <li key={id} className={'flex justify-center items-center w-40 h-14 px-4 ml-[-150px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " "+ style}>
            <a href={href} className='flex justify-center items-center w-full text-white'
            download={download}
            target='_blank'
            rel="noreferrer">
            {child}
        </a>
        </li>

        ))}
      </ul>
    </div>
  )
}

export default Sociallinks
