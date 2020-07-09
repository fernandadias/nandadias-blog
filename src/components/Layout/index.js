import React from "react"

import Sidebar from '../Sidebar'
import MobileHeader from '../MobileHeader'
import MobileFooter from '../MobileFooter'

import GlobalStyles from '../../styles/global'


const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyles />
      <MobileHeader />
      <Sidebar />
      {children}
      <MobileFooter />
    </>
  )
}
export default Layout
