import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/CartSlice";

export default function ProductCard() {
  const items = useSelector((state) => state.allCarts.items);
  const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="row m-0 p-0">
        {items.map((item, index) => (
          <div key={index} className="col-md-4">
            <MDBCard className="m-2">
              <MDBCardImage src={item.img} position="top" alt="..." className="w-[100%] h-[400px] bg-cover"/>
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>Rs. {item.price}</MDBCardText>
                <MDBBtn onClick={() => dispatch(addToCart(item))}>Add Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
    </div>
  );
}
