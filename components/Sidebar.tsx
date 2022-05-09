import React from 'react'
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'

function Sidebar() {
    const { theme, setTheme } = useTheme();
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <div className='flex flex-col items-center justify-center py-5'>
            <img src="https://avatars.githubusercontent.com/u/72149385?s=400&u=5b3c3f36a789f8f879dee21a9080672386845c3f&v=4" alt="user Avatar" className='w-32 h-32 rounded-full' />

            <h3 className='my-3 space-x-1 text-xl tracking-wider font-kaushan'>
                <span className='text-green'>Mahesh</span>
                <span>Mestri</span>
            </h3>

            <p className='w-11/12 px-3 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-700 mx-13 mx-15'>Web Developer</p>
            <p className='flex flex-wrap justify-center w-11/12 px-1 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-700 mx-13 mx-15'><a href="https://drive.google.com/file/d/19Pr9Bhu3R1obbRRdQV5oIqHyYTwdxwZc/view?usp=sharing" className='flex'><GiTie className='w-6 h-6' />Download Resume</a></p>

            {/* social icons and address */}
            <div className='flex justify-around w-9/12 md:w-full text-green'>
                <a href="https://www.youtube.com/channel/UCAG-vknnKk4Ii2y1_qPOUOg">
                    <AiFillYoutube className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="https://github.com/ErMapsh">
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="https://linkedin.com/in/ermapsh">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
            </div>

            {/* address */}
            <div className='w-full py-4 my-5 bg-gray-200 dark:bg-dark-700'>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation className='w-4 h-4' />
                    <span>Maharashtra, India</span>
                </div>
                <p className='flex-wrap my-2'>maheshmestri73@gmail.com</p>
                <p className='flex-wrap my-2'>9405135389/9405135670</p>
            </div>

            <button className='w-1/2 px-3 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none' onClick={() => window.open('mailto:maheshmestri73@gmail.com')}>Email me</button>

            <button className='w-1/2 px-3 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400' onClick={() => {changeTheme()}}>Light UI</button>

        </div>
    )
}

export default Sidebar