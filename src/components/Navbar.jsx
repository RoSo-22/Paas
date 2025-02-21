import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-red-200 flex justify-between item-center px-4 h-14 text-xl'>
            <div className="logo font-bold py-4 ">
                <span className='text-gray-700 text-2xl '>&lt;</span>
                <span className='text-black text-2xl'>Paas</span>

                <span className='text-gray-700 text-2xl '>OP/&gt;</span>
            </div>
            <ul>
                <li className='flex gap-4 py-4'>
                    <a className='hover:font-bold' href="">Home</a>
                    <a className='hover:font-bold' href="">About</a>
                    <a className='hover:font-bold' href="">Content</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
