import React, { useState } from 'react';
import BackBtn from './components/BackBtn';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import paid from "./assets/paiddot.png";
import pending from "./assets/pendingdot.png";
import draft from "./assets/draftdot.png";
import { markpaid } from './features/state/stateSlice';
import { Link } from 'react-router-dom';
import ConfirmDelete from './components/ConfirmDelete';

function InvoiceView() {
    const { id } = useParams();
    const selectedstate = useSelector((state) => state.state.data[id]);
    const totalAmount = selectedstate.items.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.state.toggleMode);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    };

    const formattedDate = formatDate(selectedstate.createdAt);
    const formattedDate2 = formatDate(selectedstate.paymentDue);

    return (
        <div className="relative">
            {confirmDelete && <ConfirmDelete confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete} />}
            <main className={`pt-8 h-full md:pb-32 ${theme === "light" ? "light2" : "dark2"} ${confirmDelete ? "brightness-50" : ""}`} >
                <div className='mx-6 md:mx-10'>
                    <BackBtn />
                </div>
                <div className={`${theme === "light" ? "light4" : "dark4"} flex justify-between p-6 rounded-md items-center mb-4 mx-6 md:mx-10 md:px-8`}>
                    <div className='flex justify-between w-full items-center md:justify-start md:gap-3'>
                        <p className={`px13 ${theme === "light" ? 'text-coolgrey' : 'text-05'}`}>Status</p>
                        <div className={`bg-${selectedstate.status}/10 w-24 h-10 flex justify-center items-center rounded-md gap-1`}>
                            <img src={selectedstate.status === "paid" ? paid : selectedstate.status === "pending" ? pending : selectedstate.status === "draft" ? draft : null} alt={selectedstate.status === "paid" ? paid : selectedstate.status === "pending" ? pending : selectedstate === "draft" ? draft : null} />
                            <p className={`px15 text-${selectedstate.status}`}>{selectedstate.status.charAt(0).toUpperCase() + selectedstate.status.slice(1)}</p>
                        </div>
                    </div>
                    <div className='hidden absolute md:flex md:relative gap-2'>
                        <Link to={`/invoice/${id}/edit`} className={`${theme === "light" ? "edit" : "darkedit"}`}>Edit</Link>
                        <button onClick={() => setConfirmDelete(true)} className='delete'>Delete</button>
                        <Link to="/" onClick={() => {dispatch(markpaid({index: id}))}} className='paid'>Mark as Paid</Link>
                    </div>
                </div>
                <div className={`${theme === "light" ? "light4" : "dark4"} p-6 rounded-md mb-14 mx-6 md:mx-10 md:px-8`}>
                    <div className='md:flex md:justify-between'>
                        <div>
                            <h2 className={`px15 text-08 mb-1 ${theme === "light" ? 'text-07' : 'text-white'}`}><span className='text-07 px15'>#</span>{selectedstate.id}</h2>
                            <p className={`px13 ${theme === "light" ? 'text-07' : 'text-05'} mb-8`}>{selectedstate.description}</p>
                        </div>
                        <div className='md:text-end'>
                            {Object.values(selectedstate.senderAddress).map((value, index) => (
                                <p key={index} className={`px13 ${theme === "light" ? 'text-07' : 'text-05'} mb-1`}>{value}</p>
                            ))}
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mb-10 md:mr-32'>
                            <p className={`px13 ${theme === "light" ? 'text-07' : 'text-05'} mb-3`}>Invoice Date</p>
                            <p className={`px15 text-08 mb-8 ${theme === "light" ? 'text-08' : 'text-white'}`}>{formattedDate}</p>
                            <p className={`px13 ${theme === "light" ? 'text-07' : 'text-05'} mb-3`}>Payment Due</p>
                            <p className={`px15 text-08 mb-8 ${theme === "light" ? 'text-08' : 'text-white'}`}>{formattedDate2}</p>
                            <p className={`px13 ${theme === "light" ? 'text-07' : 'text-05'} mb-3 md:hidden md:absolute`}>Sent to</p>
                            <p className={`px15 text-08 mb-8 ${theme === "light" ? 'text-08' : 'text-white'} md:hidden md:absolute`}>{selectedstate.clientEmail}</p>
                        </div>
                        <div className='md:mr-28'>
                            <p className='px13 text-07 mb-3'>Bill To</p>
                            {Object.values(selectedstate.clientAddress).map((value, index) => (
                                <p key={index} className={`px15 ${theme === "light" ? 'text-08' : 'text-white'} mb-2`}>{value}</p>
                            ))}
                        </div>
                        <div className='hidden absolute md:flex md:relative md:flex-col'>
                            <p className={`px13 ${theme === "light" ? 'text-07' : 'text-05'} mb-3`}>Sent to</p>
                            <p className={`px15 text-08 mb-8 ${theme === "light" ? 'text-08' : 'text-white'}`}>{selectedstate.clientEmail}</p>
                        </div>
                    </div>
                    <div className={`${theme === "light" ? 'bg-ghostwhite' : 'bg-04'} rounded-t-lg p-6 flex flex-col pb-0 md:px-0`}>
                        <div className='md:flex md:justify-between md:px-8'>
                            <p className='hidden absolute md:flex md:relative md:mb-8'>Item Name</p>
                            <div className='hidden absolute md:flex md:relative md:gap-10'>
                                <p>QTY.</p>
                                <p>Price</p>
                                <p>Total</p>
                            </div>
                        </div>
                        {selectedstate.items.map((item, index) => (
                            <div key={index} className='flex justify-between items-center'>
                                <div className='md:hidden md:absolute'>
                                    <h2 className={`px15 text-08 mb-2 ${theme === "light" ? 'text-08' : 'text-white'}`}>{item.name}</h2>
                                    <p className={`px15 ${theme === "light" ? 'text-07' : 'text-06'} mb-6`}>{item.quantity} x £ {item.price}</p>
                                </div>
                                <div className='md:hidden md:absolute'>
                                    <p className={`px15 text-08 mb-6 ${theme === "light" ? 'text-08' : 'text-white'}`}>£ {item.total}</p>
                                </div>
                                <div className='hidden absolute md:relative md:flex justify-between w-full md:px-8'>
                                    <div>
                                        <p className={`mb-8 ${theme === "light" ? 'text-08' : 'text-white'}`}>{item.name}</p>
                                    </div>
                                    <div className='flex gap-12'>
                                        <div>
                                            <p>{item.quantity}</p>
                                        </div>
                                        <div>
                                            <p>{item.price}</p>
                                        </div>
                                        <div>
                                            {item.total}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`${theme === "light" ? 'bg-charcoal' : 'bg-08'} rounded-b-lg p-6 flex justify-between items-center md:px-8`}>
                        <p className='px13 text-white'>Grand Total</p>
                        <p className='px24 text-white'>£ {totalAmount}</p>
                    </div>
                </div>
                <div className={`${theme === "light" ? 'bg-white' : 'bg-03'} w-full h-24 flex items-center justify-center gap-2 px-6 md:hidden md:absolute`}>
                    <Link to={`/invoice/${id}/edit`} className={`${theme === "light" ? "edit" : "darkedit"}`}>Edit</Link>
                    <button onClick={() => setConfirmDelete(true)} className='delete'>Delete</button>
                    <Link to="/" onClick={() => {dispatch(markpaid({index: id}))}} className='paid'>Mark as Paid</Link>
                </div>
            </main>
        </div>
    );
}

export default InvoiceView;
