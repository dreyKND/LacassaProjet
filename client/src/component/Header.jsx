import React from "react";
import logolacas from "../images/logolacas.png"
import search from "../images/search.svg"
import menu_hamburger from "../images/menu_hamburger.svg"
import avatar from "../images/avatar.svg"
const Header = () => {
    return (

        <div className='flex border-b justify-between px-10 '>
            <img className=' w-24 ml-3 cursor-pointer' src={logolacas} />
            <div className=' ml-96 flex items-center rounded-3xl border border-gray-300 p-1 shadow-lg h-12'>
                <input type="text" className='ml-10 mr-10 flex-grow  bg-transparent text-gray-900  rounded-full text-center outline-none ' placeholder="Start your search" />
                <img className=" h-8 w-8 " src={search} />
            </div>
            <div className='  cursor-pointer flex border border-spacing-1 items-center rounded-full p-2 ml-80'>
                <div className=' shadow-xl h-16 w-28 z-10 absolute bg-white mt-32 p-1'>
                    <h1 className=' text-sm font-semibold'>Sign up</h1>
                    <hr className=' text-sm mt-2' />

                    <h1 className=' font-thin'>Log in</h1>

                </div>
                <div className="flex items-center border-2 p-2 rounded-full">
                    <img className='  h-5 w-5' src={menu_hamburger} />
                    <img className="  h-8 w-8 ml-4 " src={avatar} />
                </div>

            </div>

        </div>


    )
}

export default Header;
