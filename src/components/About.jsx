import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen  bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>"Hello, and welcome to my portfolio! My name is Abhinav saini, and I'm a Frontend  with 8 months of experience. Throughout my career, I've had the opportunity to work on a wide range of projects and collaborate with clients from diverse industries.</p>

            <br/>

            <p className='text-xl '>
            My passion for Web Development has driven me to continuously learn and improve my skills, and I take great pride in delivering high-quality work that meets or exceeds my clients' expectations. Whether I'm working on a new project or collaborating with a team, I'm committed to delivering results that make a real difference.
            </p>
        </div>
    </div>
  )
}

export default About