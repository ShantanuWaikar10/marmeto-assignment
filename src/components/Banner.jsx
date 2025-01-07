import React from 'react'
import banner from '../assets/banner.jpg'

const Banner = () => {
  return (
    <div>
        <img className='max-h-64 w-full object-cover opacity-35' src={banner} alt="" />
    </div>
  )
}

export default Banner