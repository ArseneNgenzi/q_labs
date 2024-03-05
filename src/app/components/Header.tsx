import React from 'react'
import Socials from './Socials'

const Header = () => {
  return (
    <div className=' flex justify-between items-center py-6'>
      <div className=' text-[2rem] lg:text-5xl font-bold'>Q-<span className=' text-accent'>Labs</span></div>
      <div>
        <Socials/>
      </div>
    </div>
  )
}

export default Header