import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { remove } from '../features/state/stateSlice'

function ConfirmDelete({ ConfirmDelete, setConfirmDelete}) {
    const { id } = useParams()
    const idvalue = useSelector((state) => state.state.data[id].id)
    const dispatch = useDispatch()
    console.log(idvalue)
  return (
    <div className='absolute p-6 left-6 right-6 top-1/4 bg-white z-50 rounded-lg'>
        <h1 className='mb-6 px24 text-08'>Confirm Deletion</h1>
        <p className='px13 text-06'>Are you sure you want to delete invoice</p>
        <p className='px13 text-06 mb-6'>#{idvalue}? This action cannot be undone.</p>
        <div className='flex justify-end gap-2'>
            <button onClick={() => {setConfirmDelete(false)}} className='edit'>Cancel</button>
            <Link  to="/" onClick={() => {dispatch(remove({index: id}))}} className='delete'>Delete</Link>
        </div>
    </div>
  )
}

export default ConfirmDelete