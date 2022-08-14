import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
const Header = () => {
  return (
    <>
      <Navbar className="p-2 shadow" color="warning">
        <NavbarBrand className="fs-3 fw-bold" ><img src="/assets/logo.png" alt="logo" className="shadow-sm" style={{
          height: 40,
          width: 40
        }}/>Pallavi Keep</NavbarBrand>
      </Navbar>
    
    </>
  )
};

export default Header;