
import React from 'react';
import './Item.css';
import logo from './ItemLogo.svg';

let Item = ({ item, children }) => (
  <div className="Item">
    <div className="Item-left">
        <h5>Price: {item.price}</h5>
        <div><b>{item.flightNumber}</b></div>
        <div className="Item-price">{item.originCity} > {item.destCity} </div>
        <div className="Item-description">Depart_Time: {item.deptDateTime}</div>
        <div className="Item-description">Depart_Date: {item.departureDate}</div>
        {/* <div className="Item-description">Arrive: {item.retDateTime}</div> */}
    </div>

    <div className="Item-right">
      <div className="Item-image" >
        <img src={logo} className="Item-logo" alt="logo" />
      </div>
      <button className="Item-book" onClick={item.onClickHandler} type="submit">
        Book this flight
      </button>
      {children}
    </div>
  </div>
)

Item.onClickHandler =  (event) => {
  alert("Flight booked successfully :)")
  event.preventDefault();
}

Item.propTypes = {
  item: React.PropTypes.object.isRequired,
  children: React.PropTypes.node
};

export default Item;
