import React, { useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <div className={`bg-[#16143f] mt-0 w-full transition-all duration-300 ${show ? 'h-[250px]' : 'h-[70px]'} py-3 pl-2 pr-3 flex justify-between items-start lg:items-center`}>
            <div className='w-1/3'>
                <img src="https://trainings.internshala.com/static/images/common/ist_logo.svg?v=1.0" alt="logo" className='lg:w-48 w-36' />
            </div>
            <div className="w-2/5 text-white lg:flex md:flex flex-col justify-center">
                <h1 className='lg:text-2xl sm:text-lg font-bold text-center'>Internshala Trainings</h1>
                <p className='text-sm text-center hidden md:flex lg:flex w-full justify-center'>Learn from home</p>
            </div>
            <div className="w-1/5 flex lg:hidden md:hidden justify-end items-center">
                <button onClick={() => setShow(!show)} className='text-white text-2xl'>Menu</button>
                {show && <div className="absolute top-20 right-0 bg-[#16143f] w-full h-[200px] flex flex-col gap-4 justify-center items-center">
                    <a href="/" className='text-white text-sm'>Internships</a>
                    <a href="/" className='text-white text-sm'>Online Trainings</a>
                    <a href="/" className='text-white text-sm'>Fresher Jobs</a>
                    <a href="/" className='text-white text-sm'>Login</a>
                    <a href="/" className='text-sm bg-white text-[#16143f] px-3 py-1 rounded-lg'>Register</a>
                </div>}
            </div>
            <div className="w-1/3 lg:flex md:flex flex-row hidden gap-4 justify-end items-center">
                <a href="/" className='text-white text-sm'>Internships</a>
                <a href="/" className='text-white text-sm'>Online Trainings</a>
                <a href="/" className='text-white text-sm'>Fresher Jobs</a>
                <a href="/" className='text-white text-sm'>Login</a>
                <a href="/" className='text-sm bg-white text-[#16143f] px-3 py-1 rounded-lg'>Register</a>
            </div>
        </div>
    )
}

export default Navbar
