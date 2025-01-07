import React from 'react'
import { HiOutlineTrophy } from "react-icons/hi2";
import { GoVerified } from "react-icons/go";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";


const Footer = () => {
  return (
    <div className='bg-pink-100 py-20 px-5 lg:px-0'>
        <div className='grid grid-cols-2 lg:grid-cols-4 place-items-center'>
            <div className='flex gap-2 items-center mt-5'>
                <HiOutlineTrophy size={40}/>
                <div>
                    <h1 className='font-semibold'>High Quality</h1>
                    <p className='text-sm text-gray-500 font-semibold'>crafted from top materials</p>
                </div>
            </div>

            <div className='flex gap-2 items-center mt-5'>
                <GoVerified size={40}/>
                <div>
                    <h1 className='font-semibold'>Warranty Protection</h1>
                    <p className='text-sm text-gray-500 font-semibold'>Over 2 years</p>
                </div>
            </div>

            <div className='flex gap-2 items-center mt-5'>
                <MdOutlineLocalShipping size={40}/>
                <div>
                    <h1 className='font-semibold'>Free Shipping</h1>
                    <p className='text-sm text-gray-500 font-semibold'>Order over 150 $</p>
                </div>
            </div>

            <div className='flex gap-2 items-center mt-5'>
                <RiCustomerService2Fill size={40}/>
                <div>
                    <h1 className='font-semibold'>24 / 7 Support</h1>
                    <p className='text-sm text-gray-500 font-semibold'>Dedicated support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer