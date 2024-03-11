import React, { useState } from 'react';
import BackBtn from './components/BackBtn';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import trashcan from "./assets/trashcan.png";
import { Link } from 'react-router-dom';
import { edit } from './features/state/stateSlice';

function InvoiceEdit() {
  const { id } = useParams();
  const state = useSelector((state) => state.state.data[id]);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.state.toggleMode);

  const [address, setAddress] = useState(state.senderAddress.street);
  const [city, setCity] = useState(state.senderAddress.city);
  const [postal, setPostal] = useState(state.senderAddress.postCode);
  const [country, setCountry] = useState(state.senderAddress.country);
  const [name, setName] = useState(state.clientName);
  const [email, setEmail] = useState(state.clientEmail);
  const [address2, setAddress2] = useState(state.clientAddress.street);
  const [city2, setCity2] = useState(state.clientAddress.city);
  const [postal2, setPostal2] = useState(state.clientAddress.postCode);
  const [country2, setCountry2] = useState(state.clientAddress.country);
  const [date, setDate] = useState(state.createdAt);
  const [net, setNet] = useState(state.paymentTerms);
  const [description, setDescription] = useState(state.description);
  const [items, setItems] = useState([...state.items]);
  const [total, setTotal] = useState(state.total);

  const handleInputChange = (index, fieldName, value) => {
    const updatedItems = [...items];
    let newTotal = 0;

    let parsedValue;
    if (value === '') {
      parsedValue = '';
    } else {
      parsedValue = isNaN(parseFloat(value)) ? 0 : parseFloat(value);
    }

    if (fieldName === 'remove') {
      updatedItems.splice(index, 1);
    } else {
      updatedItems[index] = {
        ...updatedItems[index],
        [fieldName]: fieldName === 'name' ? value : parsedValue,
      };
    }

    newTotal = updatedItems.reduce((acc, item) => {
      const quantity = parseFloat(item.quantity);
      const price = parseFloat(item.price);
      const itemTotal = isNaN(quantity) || isNaN(price) ? 0 : quantity * price;
      return acc + itemTotal;
    }, 0);

    setTotal(newTotal.toFixed(2));
    setItems(updatedItems);
  };

  let createdAtDate;
  if (typeof date === 'string') {
    createdAtDate = new Date(date);
  } else if (date instanceof Date) {
    createdAtDate = date;
  } else {
    throw new Error('Invalid data type for date');
  }

  const paymentDueDate = new Date(createdAtDate.getTime() + net * 24 * 60 * 60 * 1000);
  const paymentDueDateString = paymentDueDate.toISOString().split('T')[0];

  return (
    <main className={`${theme === "light" ? "light2" : "dark2"}`}>
      <div className='pt-8 px-6 mb-6 md:px-14 xl:px-60 xl:pt-16'>
        <BackBtn />
      </div>

      <section className='px-6 flex flex-col md:px-14 xl:px-60'>
        <h1 className={`${theme === "light" ? 'px24 text-08' : 'px24 text-white'} mb-6`}>Edit <span className='px24 text-06'>#</span>{state.id}</h1>

        <p className='px15 text-01 mb-6'>Bill From</p>
        <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>Street Address</label>
        <input onChange={(e) => setAddress(e.target.value)} value={address} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} h-12 rounded mb-6 px-5`}></input>
        <div className='flex flex-col gap-4 justify-between mb-6 md:flex-row'>
          <div className='flex gap-4 md:w-2/3'>
            <div className='flex flex-col w-1/2'>
              <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>City</label>
              <input onChange={(e) => setCity(e.target.value)} value={city} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} w-full h-12 rounded px-5`}></input>
            </div>
            <div className='flex flex-col w-1/2'>
              <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>Post Code</label>
              <input onChange={(e) => setPostal(e.target.value)} value={postal} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} w-full h-12 rounded px-5`}></input>
            </div>
          </div>
          <div className='flex flex-col md:w-1/3'>
            <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>Country</label>
            <input onChange={(e) => setCountry(e.target.value)} value={country} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} h-12 rounded mb-6 px-5`}></input>
          </div>
        </div>
        <p className='px15 text-01 mb-6'>Bill To</p>
        <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>Client’s Name</label>
        <input onChange={(e) => setName(e.target.value)} value={name} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} h-12 rounded mb-6 px-5`}></input>
        <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>Client’s Email</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} h-12 rounded mb-6 px-5`}></input>
        <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>Street Address</label>
        <input onChange={(e) => setAddress2(e.target.value)} value={address2} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} h-12 rounded mb-6 px-5`}></input>
        <div className='flex flex-col gap-4 justify-between mb-6 md:flex-row'>
          <div className='flex flex-col md:flex-row gap-4 md:w-full'>
            <div className='flex gap-4 md:w-2/3'>
              <div className='flex flex-col w-full md:w-1/2'>
                <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>City</label>
                <input onChange={(e) => setCity2(e.target.value)} value={city2} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} w-full h-12 rounded px-5`}></input>
              </div>
              <div className='flex flex-col w-full md:w-1/2'>
                <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>Post Code</label>
                <input onChange={(e) => setPostal2(e.target.value)} value={postal2} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} w-full h-12 rounded px-5`}></input>
              </div>
            </div>
            <div className='flex flex-col w-full md:w-1/3'>
              <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>Country</label>
              <input onChange={(e) => setCountry2(e.target.value)} value={country2} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} w-full h-12 rounded px-5`}></input>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-4'>
        <div className='flex flex-col md:w-1/2'>
        <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>Invoice Date</label>
        <input onChange={(e) => setDate(e.target.value)} value={date} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} h-12 rounded mb-6 px-5`} type='date'></input>
        </div>
        <div className='flex flex-col md:w-1/2'>
        <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>Payment Terms</label>
        <select onChange={(e) => setNet(parseInt(e.target.value))} value={net} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} h-12 rounded mb-6 px-5`}>
          <option value="30">Net 30 Days</option>
          <option value="14">Net 14 Days</option>
          <option value="7">Net 7 Days</option>
          <option value="1">Net 1 Day</option>
        </select>
        </div>
        </div>
        <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-2`}>Project Description</label>
        <input onChange={(e) => { setDescription(e.target.value) }} value={description} className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} h-12 rounded mb-20 px-5`}></input>
        <div className='md:hidden md:absolute'>
        <h2 className='text-lg font-bold tracking-[-0.38px] text-lightgrey mb-6'>Item List</h2>
        {items.map((item, index) => (
          <div key={index} className='flex flex-col mb-6'>
            <label className={theme === "light" ? 'px13 text-07 mb-2' : 'px13 text-06 mb-2'}>Item Name</label>
            <input
              value={item.name}
              onChange={(e) => handleInputChange(index, 'name', e.target.value)}
              className={theme === "light" ? 'light4 border border-05 h-12 rounded mb-6 px-6' : 'dark4 border border-03 h-12 rounded mb-6 px-6'}
            ></input>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <div className='flex flex-col w-16 mr-4'>
                  <label className={theme === "light" ? 'px13 text-07 mb-2' : 'px13 text-06 mb-2'}>Qty.</label>
                  <input
                    value={item.quantity}
                    onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                    className={theme === "light" ? 'light4 border border-05 h-12 rounded px-6' : 'dark4 border border-03 h-12 rounded px-6'}
                  ></input>
                </div>
                <div className='flex flex-col w-24 mr-4'>
                  <label className={theme === "light" ? 'px13 text-07 mb-2' : 'px13 text-06 mb-2'}>Price</label>
                  <input
                    value={item.price}
                    onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                    className={theme === "light" ? 'light4 border border-05 h-12 rounded px-6' : 'dark4 border border-03 h-12 rounded px-6'}
                  ></input>
                </div>
                <div className='flex flex-col gap-6'>
                  <p className={theme === "light" ? 'px13 text-07' : 'px13 text-06'}>Total</p>
                  <p className={theme === "light" ? 'px13 text-07 mb-5' : 'px13 text-06 mb-5'}>{total}</p>
                </div>
              </div>
              <img
                className='h-4 w-3 cursor-pointer'
                src={trashcan}
                alt='trashcan'
                onClick={() => handleInputChange(index, 'remove')} // Call handleInputChange with 'remove' fieldName
              />
            </div>
          </div>
        ))}
        </div>
        <div className='hidden absolute md:flex md:flex-col md:relative'>
  <div className='flex md:gap-4 md:justify-between'>
    <div className='md:w-2/5 flex flex-col'>
      <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-4`}>Item Name</label>
      {items.map((item, index) => (
        <input
          key={`name-${index}`}
          value={item.name}
          onChange={(e) => handleInputChange(index, 'name', e.target.value)}
          className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} h-12 rounded mb-4 px-6`}
        />
      ))}
    </div>
    <div className='md:w-1/12 flex flex-col'>
      <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-4`}>Qty.</label>
      {items.map((item, index) => (
        <input
          key={`quantity-${index}`}
          value={item.quantity}
          onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
          type="number"
          className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} h-12 rounded mb-4 px-6`}
        />
      ))}
    </div>
    <div className='md:w-1/5 flex flex-col'>
      <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-4`}>Price</label>
      {items.map((item, index) => (
        <input
          key={`price-${index}`}
          value={item.price}
          onChange={(e) => handleInputChange(index, 'price', e.target.value)}
          type="number"
          className={`${theme === "light" ? 'light4' : 'dark4'} border border-${theme === "light" ? "05" : "03"} h-12 rounded mb-4 px-6`}
        />
      ))}
    </div>
    <div className='md:w-1/12 flex flex-col'>
  <div className='flex flex-col h-full justify-between'>
    <label className={`${theme === "light" ? 'px13 text-07' : 'px13 text-06'} mb-4`}>Total</label>
    {items.map((item, index) => (
      <p
        key={`total-${index}`}
        className={`h-12 rounded mb-4 px-6 flex items-center justify-center`}
      >
        {isNaN(item.quantity) || isNaN(item.price) ? 0 : (item.quantity * item.price).toFixed(2)}
      </p>
    ))}
  </div>
</div>
<div className='md:w-1/12 flex flex-col justify-end'>
  {items.map((item, index) => (
    <div key={`trashcan-container-${index}`} style={{ height: '48px' }} className="trashcan-container mb-4 flex items-center justify-end">
      <img
        key={`trashcan-${index}`}
        className='h-4 w-3 cursor-pointer'
        src={trashcan}
        alt='trashcan'
        onClick={() => handleInputChange(index, 'remove')}
      />
    </div>
  ))}
</div>
  </div>
</div>
        <button onClick={() => { setItems([...items, { name: "", price: "", quantity: "", total: "" }]) }} className={`${theme === "light" ? 'addnew' : 'darkaddnew'} mb-24`}>+ Add New Item</button>
      </section>
      <div className={`${theme === "light" ? 'light4' : 'dark4'} flex h-24 w-full items-center justify-end px-6 gap-2 md:px-14 md:bg-transparent xl:px-60`}>
        <Link to={-1} className={`${theme === "light" ? "edit" : "darkedit"}`}>Cancel</Link>
        <Link to="/" onClick={(e) => { dispatch(edit({ index: id, clientAddressCity: city2, clientAddressCountry: country2, clientAddressPostCode: postal2, clientAddressStreet: address2, clientEmail: email, clientName: name, createdAt: date, description: description, id: state.id, items: items, paymentDue: paymentDueDateString, paymentTerms: net, senderAddressCity: city, senderAddressCountry: country, senderAddressPostCode: postal, senderAddressStreet: address, status: "pending", total: total })) }} className='paid'>Save Changes</Link>
      </div>
    </main>
  );
}

export default InvoiceEdit;