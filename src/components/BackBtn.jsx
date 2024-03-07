import React from 'react'
import arrowside from "../assets/arrowside.png"
import { useNavigate } from 'react-router-dom'

function BackBtn() {
    const navigate = useNavigate()
  return (
    <div className='flex items-center gap-6 mb-8'>
        <img className='h-2 w-1' src={arrowside} alt='arrowside' />
        <button className='px15 text-08' onClick={() => {navigate(-1)}}>Go back</button>
    </div>
  )
}

export default BackBtn