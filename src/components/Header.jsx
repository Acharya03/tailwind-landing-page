import React from 'react'
import { FaBars } from 'react-icons/fa'
const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-2'>
        <img src="./assets/Logo.svg" alt="logo" />
        <button>Hoster is hiring</button>
      </div>
      <div>
        <FaBars />
      </div>
    </div>
  )
}

export default Header