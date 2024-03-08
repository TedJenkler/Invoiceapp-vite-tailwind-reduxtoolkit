import React, { useState } from 'react'
import BackBtn from './components/BackBtn'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import paid from "./assets/paiddot.png"
import pending from "./assets/pendingdot.png"
import draft from "./assets/draftdot.png"
import { remove, markpaid } from './features/state/stateSlice';
import { Link } from 'react-router-dom';
import ConfirmDelete from './components/ConfirmDelete';

function InvoiceView() {
    const { id } = useParams();
    const selectedstate = useSelector((state) => state.state.data[id])
    const totalAmount = selectedstate.items.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    const dispatch = useDispatch()
    const [confirmDelete, setConfirmDelete] = useState(false)

    const dateString = selectedstate.createdAt;
            const date = new Date(dateString)

            // Convert the date to the desired format
            const options = { day: '2-digit', month: 'short', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-GB', options);

        const dateString2 = selectedstate.paymentDue;
            const date2 = new Date(dateString2)

            // Convert the date to the desired format
            const options2 = { day: '2-digit', month: 'short', year: 'numeric' };
            const formattedDate2 = date2.toLocaleDateString('en-GB', options2);
  return (
    <div className='relative'>
    {confirmDelete === true ? <ConfirmDelete confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete} /> : null}
    <main className={confirmDelete === true ? 'pt-8 bg-lightbg h-full brightness-50' : 'pt-8 bg-lightbg h-full'} >
        <div className='mx-6'>
        <BackBtn />
        </div>
        <div className='flex justify-between bg-white p-6 rounded-md items-center mb-4 mx-6'>
            <p className='px13 text-coolgrey'>Status</p>
            <div className={selectedstate.status === "paid" ? "bg-paid/10 w-24 h-10 flex justify-center items-center rounded-md gap-1" : selectedstate.status === "pending" ? "bg-pending/10 w-24 h-10 flex justify-center items-center rounded-md gap-1" : selectedstate.status === "draft" ? "bg-draft/10 w-24 h-10 flex justify-center items-center rounded-md gap-1" : null}>
                <img src={selectedstate.status === "paid" ? paid : selectedstate.status === "pending" ? pending : selectedstate.status === "draft" ? draft : null} alt={selectedstate.status === "paid" ? paid : selectedstate.status === "pending" ? pending : selectedstate === "draft" ? draft : null} />
                <p className={selectedstate.status === "paid" ? "px15 text-paid" : selectedstate.status === "pending" ? "px15 text-pending" : selectedstate.status === "draft" ? "px15 text-draft" : null}>{selectedstate.status.charAt(0).toUpperCase() + selectedstate.status.slice(1)}</p>
            </div>
        </div>
        <div className='p-6 bg-white rounded-md mb-14 mx-6'>
        <div>
            <div>
                <h2 className='px15 text-08 mb-1'><span className='text-07 px15'>#</span>{selectedstate.id}</h2>
                <p className='px13 text-07 mb-8'>{selectedstate.description}</p>
            </div>
            <div>
                <p className='px13 text-07 mb-1'>{selectedstate.senderAddress.street}</p>
                <p className='px13 text-07 mb-1'>{selectedstate.senderAddress.city}</p>
                <p className='px13 text-07 mb-1'>{selectedstate.senderAddress.postCode}</p>
                <p className='px13 text-07 mb-8'>{selectedstate.senderAddress.country}</p>
            </div>
        </div>
        <div className='flex'>
            <div className='mb-10'>
                <p className='px13 text-07 mb-3'>Invoice Date</p>
                <p className='px15 text-08 mb-8'>{formattedDate}</p>
                <p className='px13 text-07 mb-3'>Payment Due</p>
                <p className='px15 text-08 mb-8'>{formattedDate2}</p>
                <p className='px13 text-07 mb-3'>Sent to</p>
                <p className='px15 text-08'>{selectedstate.clientEmail}</p>
            </div>
            <div>
                <p className='px13 text-07 mb-3'>Bill To</p>
                <p className='px15 text-08 mb-2'>{selectedstate.clientName}</p>
                <p className='px13 text-07 mb-1'>{selectedstate.clientAddress.street}</p>
                <p className='px13 text-07 mb-1'>{selectedstate.clientAddress.city}</p>
                <p className='px13 text-07 mb-1'>{selectedstate.clientAddress.postCode}</p>
                <p className='px13 text-07 mb-1'>{selectedstate.clientAddress.country}</p>
            </div>
        </div>
        <div>
            <div className='bg-ghostwhite rounded-t-lg p-6 flex flex-col pb-0'>
                {selectedstate.items.map((item, index) => {
                    console.log(item)
                    return (
                        <div key={index} className='flex justify-between items-center'>
                            <div>
                                <h2 className='px15 text-08 mb-2'>{item.name}</h2>
                                <p className='px5 text-07 mb-6'>{item.quantity} x £ {item.price}</p>
                            </div>
                            <div>
                                <p className='px15 text-08 mb-6'>£ {item.total}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='bg-charcoal rounded-b-lg p-6 flex justify-between items-center'>
                <p className='px13 text-white'>Grand Total</p>
                <p className='px24 text-white'>£ {totalAmount}</p>
            </div>
        </div>
        </div>
        <div className='bg-white w-full h-24 flex items-center justify-center gap-2 px-6'>
            <Link to={"/invoice/" + id + "/edit"} className='edit'>Edit</Link>
            <button onClick={() => setConfirmDelete(true)} className='delete'>Delete</button>
            <Link to="/" onClick={() => {dispatch(markpaid({index: id}))}} className='paid'>Mark as Paid</Link>
        </div>
    </main>
    </div>
  )
}

export default InvoiceView