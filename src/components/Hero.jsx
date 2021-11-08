import React from 'react'
import hero from '../img/hero.jpg'

function Hero() {
  return (
    <div className='overflow-hidden'>
      <div className='w-full h-xl relative border-4'>
        <div className='absolute top-0 left-0 h-xl w-full z-10 opacity-50 bg-black'></div>
        <img className='absolute top-0 left-0 w-full h-xl object-cover
         bg-no-repeat bg-center ' src={hero} alt="Hero Image"/>
        <div className='absolute left-0 right-0 w-2/5 mx-auto transform translate-y-64 z-20'>
          <h1 className='text-6xl text-yellow-400'>A Taste of Home</h1>
          <p className='text-2xl text-white mt-4'>Banyoe Oerip merupakan restoran dengan konsep <span className='italic'>cozy, modern </span> dan memiliki suasana <span className='italic'>homy</span> yang cocok dikunjungi bersama keluarga, pasangan, maupun teman</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
