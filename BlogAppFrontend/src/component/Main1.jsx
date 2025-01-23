import React from 'react'
import Navbar from './Navbar'


const Main1 = ({child}) => {
    // props should be passed in curly braces
  return (
    <div>
        <Navbar/>
        {child}
    </div>
  )
}

export default Main1