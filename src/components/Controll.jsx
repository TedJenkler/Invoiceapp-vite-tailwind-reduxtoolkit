import React, { useEffect, useState } from 'react';
import addbtn from "../assets/addbtn.svg";
import xladdbtn from "../assets/xladdbtn.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { filter } from '../features/state/stateSlice';

function Controll() {
    const state = useSelector((state) => state.state.data);
    const theme = useSelector((state) => state.state.toggleMode);
    const dispatch = useDispatch();
    const [stateFilter, setStateFilter] = useState("all");
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    const containerClasses = `px-6 py-8 flex justify-between md:px-12 ${theme === "light" ? 'light2' : 'dark2'}`;
    const invoiceCountClasses = `${theme === "light" ? 'light3' : 'dark3'} px13 md:${state.length > 0 ? 'md:hidden md:absolute' : 'md:flex md:relative'}`;

    const handleFilterChange = (e) => {
        setStateFilter(e.target.value);
    };

    useEffect(() => {
        dispatch(filter(stateFilter));
    }, [stateFilter]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={containerClasses}>
            <div>
                <h1 className={`px24 mb-1 md:px36 ${theme === "light" ? 'light2' : 'dark2'}`}>Invoices</h1>
                <p className={invoiceCountClasses}>
                    {state.length === 0 ? (
                        "No Invoice"
                    ) : (
                        isSmallScreen ? (
                            state.length === 1 ? "1 Invoice" : `${state.length} Invoices`
                        ) : (
                            `There are ${state.length} total invoice${state.length !== 1 ? 's' : ''}`
                        )
                    )}
                </p>
            </div>
            <div className='flex gap-4'>
                <div className='flex items-center justify-center'>
                    <select onChange={handleFilterChange} value={stateFilter} className={`font-bold xl:hidden xl:absolute ${theme === "light" ? 'light2' : 'dark2'}`}>
                        <option value="all">All</option>
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="draft">Draft</option>
                    </select>
                    <select onChange={handleFilterChange} value={stateFilter} className={`font-bold hidden absolute xl:flex xl:relative ${theme === "light" ? 'light2' : 'dark2'}`}>
                        <option value="all">All</option>
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="draft">Draft</option>
                    </select>
                </div>
                <Link to="/invoice/add" className='flex items-center justify-center xl:hidden xl:absolute'>
                    <img src={addbtn} alt='addbtn' />
                </Link>
                <Link to="/invoice/add" className='items-center justify-center hidden absolute xl:flex xl:relative'>
                    <img src={xladdbtn} alt='addbtn' />
                </Link>
            </div>
        </div>
    );
}

export default Controll;