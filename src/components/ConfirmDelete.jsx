import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { remove } from '../features/state/stateSlice';

function ConfirmDelete({ ConfirmDelete, setConfirmDelete }) {
    const { id } = useParams();
    const idvalue = useSelector((state) => state.state.data[id].id);
    const theme = useSelector((state) => state.state.toggleMode);
    const dispatch = useDispatch();

    return (
        <div className={`absolute p-8 left-6 right-6 top-1/4 bg-${theme === "light" ? "white" : "03"} z-50 rounded-lg md:mx-36 md:p-12 xl:mx-96`}>
            <h1 className={`mb-6 px24 text-${theme === "light" ? "08" : "white"} md:mb-3`}>Confirm Deletion</h1>
            <p className="px13 text-06 mb-2 md:hidden md:absolute">Are you sure you want to delete invoice</p>
            <p className="px13 text-06 mb-6 md:hidden md:absolute">#{idvalue}? This action cannot be undone.</p>
            <p className='px13 text-06 mb-4'>Are you sure you want to delete invoice #{idvalue}? This action cannot be undone.</p>
            <div className="flex justify-end gap-2">
                <button onClick={() => { setConfirmDelete(false) }} className={`edit ${theme === "light" ? "" : "dark"}`}>Cancel</button>
                <Link to="/" onClick={() => { dispatch(remove({ index: id })) }} className="delete">Delete</Link>
            </div>
        </div>
    );
}

export default ConfirmDelete;