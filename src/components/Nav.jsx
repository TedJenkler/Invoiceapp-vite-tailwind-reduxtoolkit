import React from 'react'
import logo from "../assets/logo.svg"
import frontendlogin from "../assets/frontenduser.png"
import moon from "../assets/moonicon.png"
import { toggledarklight } from '../features/state/stateSlice';
import { useDispatch, useSelector } from 'react-redux';

function Nav() {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.state.toggleMode)
    console.log(theme)
  return (
    <nav className={theme === "light" ? 'light1 h-20 flex justify-between' : 'dark1 h-20 flex justify-between'}>
        <div>
            <img className='h-20' src={logo} alt='logo' />
        </div>
        <div className='flex w-40'>
            <div onClick={() => dispatch(toggledarklight())} className='w-1/2 flex items-center justify-center border-r border-independence '>
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