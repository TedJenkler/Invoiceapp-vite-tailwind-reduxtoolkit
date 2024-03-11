import React from 'react';
import { useSelector } from 'react-redux';
import paid from "../assets/paiddot.png";
import pending from "../assets/pendingdot.png";
import draft from "../assets/draftdot.png";
import { useNavigate } from 'react-router-dom';
import arrowright from "../assets/arrowright.png";

function DisplayInvoiceDesktop() {
    const state = useSelector((state) => state.state.data);
    const theme = useSelector((state) => state.state.toggleMode);
    const filter = useSelector((state) => state.state.filter);
    const navigate = useNavigate();

    // Create a shallow copy of the state array
    const CopyOfState = [...state];

    // Filter invoices based on selected status
    const filteredInvoices = CopyOfState.filter((invoice) => {
        if (filter === "all") {
            return true; // Return all invoices
        } else {
            return invoice.status === filter; // Return invoices with matching status
        }
    });

    return (
        <main className={`${theme === "light" ? 'light2' : 'dark2'} px-12 pb-28 hidden absolute md:flex md:relative md:flex-col`}>
            {filteredInvoices.map((invoice) => {
                const handleClick = (id) => {
                    const index = state.findIndex(invoice => invoice.id === id);
                    navigate("/invoice/" + index);
                }

                const dateString = invoice.createdAt;
                const date = new Date(dateString);

                // Convert the date to the desired format
                const options = { day: '2-digit', month: 'short', year: 'numeric' };
                const formattedDate = date.toLocaleDateString('en-GB', options);

                const statusClass = invoice.status === "paid" ? "paid" : invoice.status === "pending" ? "pending" : invoice.status === "draft" ? "draft" : "";

                return (
                    <div onClick={() => handleClick(invoice.id)} className={`${theme === "light" ? 'light4' : 'dark4'} w-full p-6 mb-4 rounded-lg flex justify-between outline outline-none hover:outline-01`} key={invoice.id}>
                        <div className='flex items-center'>
                            <h1 className={`${theme === "light" ? 'px15 text-08' : 'px15 text-white'} mr-6 xl:mr-10`}><span className='px15 text-07'>#</span>{invoice.id}</h1>
                            <div className='flex xl:flex-row-reverse gap-16'>
                                <p className={`${theme === "light" ? 'px13 text-07' : 'px13 text-white'} mr-12`}>{invoice.clientName}</p>
                                <p className={`${theme === "light" ? 'px13 text-07' : 'px13 text-05'}`}><span className={`${theme === "light" ? 'text-06 px13' : 'text-05 px13'}`}>Due </span>{formattedDate}</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <p className={`${theme === "light" ? 'text-08 px15' : 'px15 text-white'} mr-10`}>£ {invoice.total}</p>
                            <div className={`${statusClass ? "bg-" + statusClass + "/10" : null} w-24 h-10 flex justify-center items-center rounded-md gap-1 mr-5`}>
                                <img src={invoice.status === "paid" ? paid : invoice.status === "pending" ? pending : invoice.status === "draft" ? draft : null} alt={invoice.status === "paid" ? paid : invoice.status === "pending" ? pending : invoice.status === "draft" ? draft : null} />
                                <p className={`${statusClass ? "px15 text-" + statusClass : null}`}>{invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}</p>
                            </div>
                            <img src={arrowright} alt='arrowright' />
                        </div>
                    </div>
                )
            })}
        </main>
    )
}

export default DisplayInvoiceDesktop;