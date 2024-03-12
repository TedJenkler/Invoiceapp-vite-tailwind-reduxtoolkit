import React from 'react';
import empty from "../assets/empty.png";
import { useSelector } from 'react-redux';

function NoInvoice() {
  const theme = useSelector((state) => state.state.toggleMode);
  const mainClass = `h-full ${theme === "light" ? 'light02' : 'dark02'} flex flex-col items-center pt-24 overflow-none`;
  const headingClass = `mb-6 px24 ${theme === "light" ? 'text-08' : 'text-white'}`;
  const paragraphClass = `px13 ${theme === "light" ? 'text-06' : 'text-05'}`;

  return (
    <main className={mainClass}>
        <img className='mb-10' src={empty} alt='empty' />
        <h1 className={headingClass}>There is nothing here</h1>
        <p className={paragraphClass}>Create an invoice by clicking the </p>
        <p className={`${paragraphClass} xl:hidden xl:absolute`}>New button and get started</p>
        <p className={`${paragraphClass} hidden absolute xl:flex xl:relative`}>New Invoice button and get started</p>
    </main>
  );
}

export default NoInvoice;