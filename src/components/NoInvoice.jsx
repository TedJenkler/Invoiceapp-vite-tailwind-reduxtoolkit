import React from 'react'
import empty from "../assets/empty.png"

function NoInvoice() {
  return (
    <main className='h-full bg-lightbg flex flex-col items-center pt-24'>
        <img className='mb-10' src={empty} alt='empty' />
        <h1 className='mb-6 px24 text-08'>There is nothing here</h1>
        <p className='px13 text-06'>Create an invoice by clicking the </p>
        <p className='px13 text-06'>New button and get started</p>
    </main>
  )
}

export default NoInvoice