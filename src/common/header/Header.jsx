import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'
import './Header.css'
const Header = ({CartItem,user}) => {
  return (
    <>
    <Head/>
    <Search CartItem ={CartItem} user={user || {}}  />
    <Navbar user={user || {}}  />
    </>
  )
}

export default Header
