import React from 'react'
import logo from "../assets/logo.svg"
import frontendlogin from "../assets/frontenduser.png"
import moon from "../assets/moonicon.png"

function Nav() {
  return (
    <nav className='h-20 bg-charcoal flex justify-between'>
        <div>
            <img className='h-20' src={logo} alt='logo' />
        </div>
        <div className='flex w-40'>
            <div className='w-1/2 flex items-center justify-center border-r border-independence '>
                <img className='h-5 w-5' src={moon} alt='darkmodetoggleswitch' />
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <img className='h-8 w-8' src={frontendlogin} alt='login' />
            </div>
        </div>
    </nav>
  )
}

export default Nav