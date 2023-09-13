import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const isMenuOpen = useSelector((Store) => Store.toggleSlice.isMenuOpen)
  if (!isMenuOpen) {
    return null
  }
  return (
    <div className='shadow-lg  h-screen w-42'>
      <ul>
        <Link to="/">
        <li>
          Home
        </li>
        </Link>
        <li>
          Shorts
        </li>
        <li>
        Subcriptions
        </li>
        <li>
        Library
        </li>
      </ul>
      
    </div>
  )
}

export default Sidebar
