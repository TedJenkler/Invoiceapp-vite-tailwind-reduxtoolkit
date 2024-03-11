import React from 'react'
import arrowside from "../assets/arrowside.png"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function BackBtn() {
    const navigate = useNavigate()
    const theme = useSelector((state) => state.state.toggleMode)
  return (
    <div className='flex items-center gap-6 mb-8'>
        <img className='h-2 w-1' src={arrowside} alt='arrowside' />
        <button className={theme === "light" ? 'px15 text-08 hover:text-07' : 'px15 text-white hover:text-06'} onClick={() => {navigate(-1)}}>Go back</button>
    </div>
  )
}

export default BackBtn