import React from 'react';
import BackBtn from './components/BackBtn'; // Importing BackBtn component
import { useSelector } from 'react-redux'; // Importing useSelector from react-redux
import { useParams } from 'react-router-dom'; // Importing useParams from react-router-dom
import trashcan from "./assets/trashcan.png"; // Importing trashcan image
import { Link } from 'react-router-dom';

function InvoiceEdit() {
  const { id } = useParams(); // Getting id parameter from URL
  const state = useSelector((state) => state.state.data[id]); // Accessing state using useSelector hook
  console.log(state); // Logging state to console

  return (
    <main>
      <div className='pt-8 px-6 mb-6'>
        <BackBtn /> {/* Rendering BackBtn component */}
      </div>

      <section className='px-6 flex flex-col'>
        {/* Invoice Edit Header */}
        <h1 className='px24 text-08 mb-6'>Edit <span className='px24 text-06'>#</span>{state.id}</h1>

        {/* Bill From Section */}
        <p className='px15 text-01 mb-6'>Bill From</p>
        <label className='px13 text-07 mb-2'>Street Address</label>
        <input className='border border-05 h-12 rounded mb-6'></input>
        <div className='flex gap-4 justify-between mb-6'>
          <div className='flex flex-col w-1/2'>
            <label className='px13 text-07 mb-2'>City</label>
            <input className='border border-05 w-full h-12 rounded'></input>
          </div>
          <div className='flex flex-col w-1/2'>
            <label className='px13 text-07 mb-2'>Post Code</label>
            <input className='border border-05 w-full h-12 rounded'></input>
          </div>
        </div>
        <label className='px13 text-07 mb-2'>Country</label>
        <input className='border border-05 h-12 rounded mb-6'></input>

        {/* Bill To Section */}
        <p className='px15 text-01 mb-6'>Bill To</p>
        <label className='px13 text-07 mb-2'>Client’s Name</label>
        <input className='border border-05 h-12 rounded mb-6'></input>
        <label className='px13 text-07 mb-2'>Client’s Email</label>
        <input className='border border-05 h-12 rounded mb-6'></input>
        <label className='px13 text-07 mb-2'>Street Address</label>
        <input className='border border-05 h-12 rounded mb-6'></input>
        <div className='flex gap-4 justify-between mb-6'>
          <div className='flex flex-col w-1/2'>
            <label className='px13 text-07 mb-2'>City</label>
            <input className='border border-05 w-full h-12 rounded'></input>
          </div>
          <div className='flex flex-col w-1/2'>
            <label className='px13 text-07 mb-2'>Post Code</label>
            <input className='border border-05 w-full h-12 rounded'></input>
          </div>
        </div>
        <label className='px13 text-07 mb-2'>Country</label>
        <input className='border border-05 h-12 rounded mb-6'></input>

        {/* Invoice Details */}
        <label className='px13 text-07 mb-2'>Invoice Date</label>
        <input className='border border-05 h-12 rounded mb-6' type='date'></input>
        <label className='px13 text-07 mb-2'>Payment Terms</label>
        <select className='border border-05 h-12 rounded mb-6'>
          <option>Net 30 Days</option>
        </select>
        <label className='px13 text-07 mb-2'>Project Description</label>
        <input className='border border-05 w-full h-12 rounded mb-20'></input>

        {/* Item List Section */}
        <h2 className='text-lg font-bold tracking-[-0.38px] text-lightgrey mb-6'>Item List</h2>
        {state.items.map((invoice, index) => {
          return (
            <div key={index} className='flex flex-col mb-6'>
                <label className='px13 text-07 mb-2'>Item Name</label>
                <input className='border border-05 h-12 rounded mb-6'></input>
                <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  <div className='flex flex-col w-16 mr-4'>
                    <label>Qty.</label>
                    <input className='border border-05 h-12 rounded'></input>
                  </div>
                  <div className='flex flex-col w-24 mr-4'>
                    <label>Price</label>
                    <input className='border border-05 h-12 rounded'></input>
                  </div>
                  <div>
                    <p>Total</p>
                    <p>{invoice.price}</p>
                  </div>
                </div>
                <img className='h-4 w-3' src={trashcan} alt='trashcan' />
              </div>
            </div>
          );
        })}
        <button className='addnew mb-24'>+ Add New Item</button>
      </section>
      <div className='bg-white flex h-24 w-full justify-end px-6 gap-2'>
          <Link to={-1} className='edit'>Cancel</Link>
          <button className='paid'>Save Changes</button>
        </div>
    </main>
  );
}

export default InvoiceEdit;
