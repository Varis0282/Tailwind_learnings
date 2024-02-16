import React from 'react'
import logo from './profile.jpg'

const Card = ({ number }) => {
    return (
        <div className="flex flex-col gap-2 rounded-lg transition-all duration-150 hover:shadow-2xl p-1 py-2 shadow-none border w-[240px] h-[400px]">
            <p className="text-center text-2xl font-semibold">Varis Rajak</p>
            <div className="w-full flex justify-center items-center">
                <img src={logo} alt="" className='w-[90%] rounded' />
            </div>
            <p className="text-center px-4 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quae, voluptates, voluptatem.
            </p>
            <p className="text-center px-4 font-medium">
                Card Number : {number}
            </p>
        </div>
    )
}

export default Card
