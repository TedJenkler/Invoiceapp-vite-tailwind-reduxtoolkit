import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { filter } from '../features/state/stateSlice';
import AddBtn from './AddBtn';

function Controll() {
    const state = useSelector((state) => state.state.data);
    const theme = useSelector((state) => state.state.toggleMode);
    const dispatch = useDispatch();
    const [stateFilter, setStateFilter] = useState("all");
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    const containerClasses = `px-6 py-8 flex justify-between md:px-12 md:pb-14 ${theme === "light" ? 'light2' : 'dark2'}`;

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
                <p className={`px13 ${theme === "light" ? 'light3' : 'dark3'}`}>
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
            <div className='flex gap-4 xl:gap-10'>
                <div className='flex items-center justify-center'>
                    <select onChange={handleFilterChange} value={stateFilter} className={`font-bold xl:hidden ${theme === "light" ? 'light2' : 'dark2'}`}>
                        <option value="all">All</option>
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="draft">Draft</option>
                    </select>
                    <select onChange={handleFilterChange} value={stateFilter} className={`font-bold hidden xl:flex ${theme === "light" ? 'light2' : 'dark2'}`}>
                        <option value="all">All</option>
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="draft">Draft</option>
                    </select>
                </div>
                <AddBtn />
            </div>
        </div>
    );
}

export default Controll;