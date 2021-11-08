import React from 'react'


function Navbar() {
  return (
    <div className='flex text-center justify-around p-6 bg-yellow-50 h-20 shadow-md'>
      <div className=''>
        <h2 className='text-3xl'>Banyoe Oerip</h2>
      </div>
      <div>
        <ul className='flex text-md text-center mt-2'>
          <li className='mx-10 text-yellow-500'>HOME</li>
          <li className='mx-10'>FASILITAS</li>
          <li className='mx-10'>KONTAK KAMI</li>
          <li className='mx-10'>BANTUAN</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
