import React, { useState } from 'react';
import BackBtn from './components/BackBtn'; // Importing BackBtn component
import { useSelector } from 'react-redux'; // Importing useSelector from react-redux
import { useParams } from 'react-router-dom'; // Importing useParams from react-router-dom
import trashcan from "./assets/trashcan.png"; // Importing trashcan image
import { Link } from 'react-router-dom';

function InvoiceEdit() {
  const { id } = useParams(); // Getting id parameter from URL
  const state = useSelector((state) => state.state.data[id]); // Accessing state using useSelector hook
  console.log(state); // Logging state to console
  
  // State variables for form inputs
  const [address, setAddress] = useState(state.senderAddress.street);
  const [city, setCity] = useState(state.senderAddress.city);
  const [postal, setPostal] = useState(state.senderAddress.postCode);
  const [country, setCountry] = useState(state.senderAddress.country);
  const [address2, setAddress2] = useState(state.clientAddress.street);
  const [city2, setCity2] = useState(state.clientAddress.city);
  const [postal2, setPostal2] = useState(state.clientAddress.postCode);
  const [country2, setCountry2] = useState(state.clientAddress.country);
  const [date, setDate] = useState(state.createdAt);
  const [net, setNet] = useState(state.paymentTerms);
  const [description, setDescription] = useState(state.description);
  const [items, setItems] = useState([...state.items]);

  // Function to handle changes in form inputs
  const handleInputChange = (index, fieldName, value) => {
    const updatedItems = [...items];
    if (fieldName === 'quantity' || fieldName === 'price') {
      // If quantity or price changes, update the total
      updatedItems[index][fieldName] = value;
      const quantity = parseFloat(updatedItems[index]['quantity']);
      const price = parseFloat(updatedItems[index]['price']);
      updatedItems[index]['total'] = (quantity * price).toFixed(2);
    } else if (fieldName === 'name') {
      // Update the name directly
      updatedItems[index] = { ...updatedItems[index], [fieldName]: value };
    } else {
      // Otherwise, simply update the field
      updatedItems[index][fieldName] = value;
    }
    setItems(updatedItems);
  };

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
        <input onChange={(e) => setAddress(e.target.value)} value={address} className='border border-05 h-12 rounded mb-6 px-5'></input>
        <div className='flex gap-4 justify-between mb-6'>
          <div className='flex flex-col w-1/2'>
            <label className='px13 text-07 mb-2'>City</label>
            <input onChange={(e) => setCity(e.target.value)} value={city} className='border border-05 w-full h-12 rounded px-5'></input>
          </div>
          <div className='flex flex-col w-1/2'>
            <label className='px13 text-07 mb-2'>Post Code</label>
            <input onChange={(e) => setPostal(e.target.value)} value={postal} className='border border-05 w-full h-12 rounded px-5'></input>
          </div>
        </div>
        <label className='px13 text-07 mb-2'>Country</label>
        <input onChange={(e) => setCountry(e.target.value)} value={country} className='border border-05 h-12 rounded mb-6 px-5'></input>

        {/* Bill To Section */}
        <p className='px15 text-01 mb-6'>Bill To</p>
        <label className='px13 text-07 mb-2'>Client’s Name</label>
        <input onChange={(e) => setAddress2(e.target.value)} value={address2} className='border border-05 h-12 rounded mb-6 px-5'></input>
        <label className='px13 text-07 mb-2'>Client’s Email</label>
        <input onChange={(e) => setCity2(e.target.value)} value={city2} className='border border-05 h-12 rounded mb-6 px-5'></input>
        <label className='px13 text-07 mb-2'>Street Address</label>
        <input onChange={(e) => setPostal2(e.target.value)} value={postal2} className='border border-05 h-12 rounded mb-6 px-5'></input>
        <div className='flex gap-4 justify-between mb-6'>
          <div className='flex flex-col w-1/2'>
            <label className='px13 text-07 mb-2'>City</label>
            <input onChange={(e) => setPostal2(e.target.value)} value={postal2} className='border border-05 w-full h-12 rounded px-5'></input>
          </div>
          <div className='flex flex-col w-1/2'>
            <label className='px13 text-07 mb-2'>Post Code</label>
            <input onChange={(e) => setPostal2(e.target.value)} value={postal2} className='border border-05 w-full h-12 rounded px-5'></input>
          </div>
        </div>
        <label className='px13 text-07 mb-2'>Country</label>
        <input onChange={(e) => setCountry2(e.target.value)} value={country2} className='border border-05 h-12 rounded mb-6 px-5'></input>

        {/* Invoice Details */}
        <label className='px13 text-07 mb-2'>Invoice Date</label>
        <input onChange={(e) => setDate(e.target.value)} value={date} className='border border-05 h-12 rounded mb-6 px-5' type='date'></input>
        <label className='px13 text-07 mb-2'>Payment Terms</label>
        <select onChange={(e) => setNet(e.target.value)} value={net} className='border border-05 h-12 rounded mb-6 px-5'>
          <option>Net 30 Days</option>
          <option>Net 14 Days</option>
          <option>Net 7 Days</option>
          <option>Net 1 Day</option>
        </select>
        <label className='px13 text-07 mb-2'>Project Description</label>
        <input onChange={(e) => {setDescription(e.target.value)}} value={description} className='border border-05 w-full h-12 rounded mb-20 px-5'></input>

        {/* Item List Section */}
        <h2 className='text-lg font-bold tracking-[-0.38px] text-lightgrey mb-6'>Item List</h2>
        {items.map((item, index) => (
          <div key={index} className='flex flex-col mb-6'>
            <label className='px13 text-07 mb-2'>Item Name</label>
            <input 
              value={item.name} 
              onChange={(e) => handleInputChange(index, 'name', e.target.value)} 
              className='border border-05 h-12 rounded mb-6'
            ></input>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <div className='flex flex-col w-16 mr-4'>
                  <label>Qty.</label>
                  <input 
                    value={item.quantity} 
                    onChange={(e) => handleInputChange(index, 'quantity', e.target.value)} 
                    className='border border-05 h-12 rounded'
                  ></input>
                </div>
                <div className='flex flex-col w-24 mr-4'>
                  <label>Price</label>
                  <input 
                    value={item.price} 
                    onChange={(e) => handleInputChange(index, 'price', e.target.value)} 
                    className='border border-05 h-12 rounded'
                  ></input>
                </div>
                <div>
                  <p>Total</p>
                  <p>{item.price}</p>
                </div>
              </div>
              <img className='h-4 w-3' src={trashcan} alt='trashcan' />
            </div>
          </div>
        ))}
        <button onClick={() => {setItems([...items, {name: "", price: "", quantity: "", total: ""}])}} className='addnew mb-24'>+ Add New Item</button>
      </section>
      <div className='bg-white flex h-24 w-full justify-end px-6 gap-2'>
        <Link to={-1} className='edit'>Cancel</Link>
        <button className='paid'>Save Changes</button>
      </div>
    </main>
  );
}

export default InvoiceEdit;