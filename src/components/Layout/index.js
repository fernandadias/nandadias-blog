import React from "react"

import Sidebar from '../Sidebar'

import GlobalStyles from '../../styles/global'


const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <main>{children}</main>
    </>
  )
}
export default Layout
