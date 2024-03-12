import React from 'react'
import { Link } from 'react-router-dom'
import addbtnpart from "../assets/addbtnpart.png"

function AddBtn() {
  return (
    <Link to="/Invoiceapp-vite-tailwind-reduxtoolkit//invoice/add" className="newinvoice">
        <img src={addbtnpart} alt='addbtnpart' />
        <p className='hidden absolute md:flex md:relative'>New Invoice</p>
        <p className='flex relative md:hidden md:absolute'>New</p>
    </Link>
  )
}

export default AddBtn