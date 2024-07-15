import React from "react";
import { BsBasketFill } from "react-icons/bs";
import '../App.css'
import {useSelector} from 'react-redux'

function Navbar() {
    const {quantity} = useSelector((store) => store.cart)
  return (
    <nav>
      <div className="navbar"> 
        <h3>Kurs Uygulaması </h3>
        <div className="navDiv">
            <div className="itemsDiv"> 
            <p>{quantity}</p>
            </div>
  
          <BsBasketFill className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
