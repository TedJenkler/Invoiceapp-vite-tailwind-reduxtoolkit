import React from 'react'
import BackBtn from './components/BackBtn'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import paid from "./assets/paiddot.png"
import pending from "./assets/pendingdot.png"
import draft from "./assets/draftdot.png"

function InvoiceView() {
    const { id } = useParams();
    const selectedstate = useSelector((state) => state.state.data[id])
    const totalAmount = selectedstate.items.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    console.log(selectedstate)
  return (
    <main className='px-6 pt-8 bg-lightbg h-screen'>
        <BackBtn />
        <div className='flex justify-between bg-white p-6 rounded-md items-center mb-4'>
            <p className='px13 text-coolgrey'>Status</p>
            <div className={selectedstate.status === "paid" ? "bg-paid/10 w-24 h-10 flex justify-center items-center rounded-md gap-1" : selectedstate.status === "pending" ? "bg-pending/10 w-24 h-10 flex justify-center items-center rounded-md gap-1" : selectedstate.status === "draft" ? "bg-draft/10 w-24 h-10 flex justify-center items-center rounded-md gap-1" : null}>
                <img src={selectedstate.status === "paid" ? paid : selectedstate.status === "pending" ? pending : selectedstate.status === "draft" ? draft : null} alt={selectedstate.status === "paid" ? paid : selectedstate.status === "pending" ? pending : selectedstate === "draft" ? draft : null} />
                <p className={selectedstate.status === "paid" ? "px15 text-paid" : selectedstate.status === "pending" ? "px15 text-pending" : selectedstate.status === "draft" ? "px15 text-draft" : null}>{selectedstate.status.charAt(0).toUpperCase() + selectedstate.status.slice(1)}</p>
            </div>
        </div>
        <div className='p-6 bg-white'>
        <div>
            <div>
                <h2>{selectedstate.id}</h2>
                <p>{selectedstate.description}</p>
            </div>
            <div>
                <p>{selectedstate.senderAddress.street}</p>
                <p>{selectedstate.senderAddress.city}</p>
                <p>{selectedstate.senderAddress.postCode}</p>
                <p>{selectedstate.senderAddress.country}</p>
            </div>
        </div>
        <div>
            <div>
                <p>Invoice Date</p>
                <p>{selectedstate.createdAt}</p>
                <p>Payment Due</p>
                <p>{selectedstate.paymentDue}</p>
                <p>Sent to</p>
                <p>{selectedstate.clientEmail}</p>
            </div>
            <div>
                <p>Bill To</p>
                <p>{selectedstate.clientName}</p>
                <p>{selectedstate.clientAddress.street}</p>
                <p>{selectedstate.clientAddress.city}</p>
                <p>{selectedstate.clientAddress.postCode}</p>
                <p>{selectedstate.clientAddress.country}</p>
            </div>
        </div>
        <div>
            <div>
                {selectedstate.items.map((item) => {
                    console.log(item)
                    return (
                        <div>
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.quantity} x £ {item.price}</p>
                            </div>
                            <div>
                                <p>£ {item.total}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <p>Grand Total</p>
                <p>£ {totalAmount}</p>
            </div>
        </div>
        </div>
    </main>
  )
}

export default InvoiceView