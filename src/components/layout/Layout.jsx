import React from 'react'
import RoutesComponent from '../Routes/Routes'
import HeaderComponent from '../Header/HeaderComponent'
const Layout = () => {
  return (
    <React.Fragment>
      <HeaderComponent/>
      <RoutesComponent/>
    </React.Fragment>
  )
}

export default Layout