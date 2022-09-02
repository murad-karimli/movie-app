import React from 'react';
import { Button, Dropdown, Menu, Space } from 'antd';


function Nav() {
  return (
    <nav className='p-4 bg-[#4C3575] flex justify-between'>
        <h1 className='text-3xl font-bold text-[#fff]  inline'>MovieOne</h1>
        <div className='flex w-[25%]'>
       
        </div>
        <ul className='flex text-[#fff] font-semibold'>
          <li className='mx-4'>
            About
          </li>
          <li className='mx-4 text-[#fff] font-semibold'>
            All films
          </li>
          <li className='mx-4 text-[#fff] font-semibold'>
            Categories
          </li>
          <li>
          
          </li>

        </ul>

      </nav>
      
     
  )
}

export default Nav