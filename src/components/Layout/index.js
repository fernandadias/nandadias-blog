import React from "react"

import Sidebar from '../Sidebar'

import GlobalStyles from '../../styles/global'


const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyles />
      <Sidebar />
      {children}
    </>
  )
}
export default Layout
