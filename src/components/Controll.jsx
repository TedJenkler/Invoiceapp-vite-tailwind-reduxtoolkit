import React from 'react';
import addbtn from "../assets/addbtn.svg";
import xladdbtn from "../assets/xladdbtn.png";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function Controll() {
    const state = useSelector((state) => state.state.data);
    const theme = useSelector((state) => state.state.toggleMode);

    const containerClasses = `px-6 py-8 flex justify-between md:px-12 ${theme === "light" ? 'light2' : 'dark2'}`;
    const invoiceCountClasses = `${theme === "light" ? 'light3' : 'dark3'} px13 ${state.length > 0 ? 'md:hidden md:absolute' : 'md:flex md:relative'}`;

    return (
        <div className={containerClasses}>
            <div>
                <h1 className={`px24 mb-1 md:px36 ${theme === "light" ? 'light2' : 'dark2'}`}>Invoices</h1>
                <p className={invoiceCountClasses}>
                {state.length === 0 ? "No Invoice" : `There ${state.length === 1 ? 'is' : 'are'} ${state.length} invoice${state.length !== 1 ? 's' : ''} total`}
                </p>
            </div>
            <div className='flex gap-4'>
                <div className='flex items-center justify-center'>
                    <select className={`font-bold xl:hidden xl:absolute ${theme === "light" ? 'light2' : 'dark2'}`}>
                        <option>Filter</option>
                    </select>
                    <select className={`font-bold hidden absolute xl:flex xl:relative ${theme === "light" ? 'light2' : 'dark2'}`}>
                        <option>Filter by status</option>
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