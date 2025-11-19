import React from 'react'
import NavLinks from "./NavLinks"

const MainNav = () => {
  return (
    <nav className='flex flex-col items-center justify-center'>
      <NavLinks
        containerStyles="flex flex-col gap-6 w-[100px]"
      />
    </nav>
  )
}

export default MainNav