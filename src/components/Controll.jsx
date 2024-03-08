import React from 'react'
import addbtn from "../assets/addbtn.svg"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';

function Controll() {
    const state = useSelector((state) => state.state.data);
    const theme = useSelector((state) => state.state.toggleMode)
  return (
    <div className='px-6 py-8 flex justify-between'>
        <div>
            <h1 className={theme === "light" ? 'light2 px24 mb-1' : 'dark2 px24 mb-1'}>Invoices</h1>
            <p className={theme === "light" ? 'light3 px13' : 'dark3 px13'}>{state.length} invoices</p>
        </div>
        <div className='flex gap-4'>
            <div className='flex items-center justify-center'>
                <select className={theme === "light" ? 'light2 font-bold' : 'dark2 font-bold'}>
                    <option>Filter</option>
                </select>
            </div>
            <Link to="/invoice/add" className='flex items-center justify-center'>
                <img src={addbtn} alt='addbtn' />
            </Link>
        </div>
    </div>
  )
}

export default Controll