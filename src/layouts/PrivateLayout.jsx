import Sidebar from 'components/Sidebar'
import React from 'react'

const PrivateLayout = ({children}) => {
  return (
    <div className='contenedorPrivateLayout'>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default PrivateLayout