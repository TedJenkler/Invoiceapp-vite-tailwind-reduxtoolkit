import React from 'react'
import empty from "../assets/empty.png"
import { useSelector } from 'react-redux'

function NoInvoice() {
  const theme = useSelector((state) => state.state.toggleMode)
  return (
    <main className={theme === "light" ? 'h-full light02 flex flex-col items-center pt-24' : 'h-full dark02 flex flex-col items-center pt-24'}>
        <img className='mb-10' src={empty} alt='empty' />
        <h1 className={theme === "light" ? 'mb-6 px24 text-08' : 'mb-6 px24 text-white'}>There is nothing here</h1>
        <p className={theme === "light" ? 'px13 text-06' : 'px13 text-05'}>Create an invoice by clicking the </p>
        <p className={theme === "light" ? 'px13 text-06' : 'px13 text-05'}>New button and get started</p>
    </main>
  )
}

export default NoInvoice