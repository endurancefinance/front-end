import Link from "next/link"
import { useState } from "react";
import { Web3Button } from "./Web3Button";

export const Navbar = () => {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-blue-400 p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Fusion DAO
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
        </button>


        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div className='w-full lg:inline-flex lg:flex-grow lg:w-auto' >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Web3Button/>
          </div>
        </div>
      </nav>
    </>
  )
}