import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css";
const Header = () => {



  return (
    <header className='absolute flex items-center justify-between px-5 w-full'>
        <div>
            <Link to="/" className='text-4xl text-white'>
                SPACE X
            </Link>
        </div>
    </header>
  )
}

export default Header