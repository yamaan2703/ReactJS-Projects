import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const {totalQuantity} = useSelector((state) => state.allCarts)
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>

        <span>
          <Link to="/">All Products</Link>
        </span>
        <button className="btn btn-dark">
          <Link to="/cart">CART ({totalQuantity})</Link>
        </button>
      </MDBContainer>
    </MDBNavbar>
  );
}
