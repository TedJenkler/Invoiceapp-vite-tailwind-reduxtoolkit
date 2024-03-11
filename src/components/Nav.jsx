import React from 'react';
import logo from "../assets/logo.svg";
import frontendlogin from "../assets/frontenduser.png";
import moon from "../assets/moonicon.png";
import sun from "../assets/sunicon.png";
import { toggledarklight } from '../features/state/stateSlice';
import { useDispatch, useSelector } from 'react-redux';

function Nav() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.state.toggleMode);
    const navClass = theme === "light" ? 'light1' : 'dark1';

    return (
        <nav className={`${navClass} h-20 flex justify-between xl:flex-col xl:h-full xl:w-28`}>
            <div>
                <img className='h-20 xl:w-28 xl:h-28' src={logo} alt='logo' />
            </div>
            <div className='flex w-40 xl:flex-col xl:w-28 xl:items-center'>
                <div onClick={() => dispatch(toggledarklight())} className='w-1/2 flex items-center justify-center border-r border-independence xl:border-b xl:border-r-0 xl:w-28 xl:h-28 '>
                    <img className='h-5 w-5' src={theme === "light" ? moon : sun} alt='darkmodetoggleswitch' />
                </div>
                <div className='w-1/2 flex items-center justify-center xl:w-28 xl:h-28'>
                    <img className='h-8 w-8' src={frontendlogin} alt='login' />
                </div>
            </div>
        </nav>
    );
}

export default Nav;