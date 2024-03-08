import React from 'react'
import { useSelector } from 'react-redux'
import paid from "../assets/paiddot.png"
import pending from "../assets/pendingdot.png"
import draft from "../assets/draftdot.png"
import { useNavigate } from 'react-router-dom'

function DisplayInvoice() {
    const state = useSelector((state) => state.state.data)
    const theme = useSelector((state) => state.state.toggleMode)
    const navigate = useNavigate()
  return (
    <main className={theme === "light" ? 'light2 px-6 pb-28' : 'dark2 px-6 pb-28'}>
        {state.map((invoice) => {
            const handleClick = (id) => {
                const index = state.findIndex(invoice => invoice.id === id);
                navigate("/invoice/" + index)
            }

            const dateString = invoice.createdAt;
            const date = new Date(dateString)

            // Convert the date to the desired format
            const options = { day: '2-digit', month: 'short', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-GB', options);
            return (
                <div onClick={() => handleClick(invoice.id)} className={theme === "light" ? 'light4 w-full p-6 mb-4 rounded-lg' : 'dark4 w-full p-6 mb-4 rounded-lg'} key={invoice.id}>
                    <div className='flex justify-between mb-6'>
                        <h1 className={theme === "light" ? 'px15 text-08' : 'px15 text-white'}><span className='px15 text-07'>#</span>{invoice.id}</h1>
                        <p className={theme === "light" ? 'px13 text-07' : 'px13 text-white'}>{invoice.clientName}</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className={theme === "light" ? 'px13 text-07 mb-2' : 'px13 text-05 mb-2'}><span className={theme === "light" ? 'text-06 px13' : 'text-05 px13'}>Due </span>{formattedDate}</p>
                            <p className={theme === "light" ? 'text-08 px15' : 'px15 text-white'}>£{invoice.total}</p>
                        </div>
                        <div className={invoice.status === "paid" ? "bg-paid/10 w-24 h-10 flex justify-center items-center rounded-md gap-1" : invoice.status === "pending" ? "bg-pending/10 w-24 h-10 flex justify-center items-center rounded-md gap-1" : invoice.status === "draft" ? "bg-draft/10 w-24 h-10 flex justify-center items-center rounded-md gap-1" : null}>
                            <img src={invoice.status === "paid" ? paid : invoice.status === "pending" ? pending : invoice.status === "draft" ? draft : null} alt={invoice.status === "paid" ? paid : invoice.status === "pending" ? pending : invoice.status === "draft" ? draft : null} />
                            <p className={invoice.status === "paid" ? "px15 text-paid" : invoice.status === "pending" ? "px15 text-pending" : invoice.status === "draft" ? "px15 text-draft" : null}>{invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </main>
  )
}

export default DisplayInvoice