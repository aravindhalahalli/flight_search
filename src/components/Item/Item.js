import React from 'react';
import './Item.css';
import logo from './ItemLogo.svg';

let Item = ({ item, children }) => {
  let onClickHandler =  (item) => {
    
    let text = "Origin : "+ item.originCity + "\nDestination : " + item.destCity + "\nDeparture Date : "
                + item.departureDate + "\t Departuew Time : " + item.deptDateTime;
    alert("Flight booked successfully :)\n"+ text)
    //event.preventDefault();
  }
  
  Item.propTypes = {
    item: React.PropTypes.object.isRequired,
    children: React.PropTypes.node
  };
  return(
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
      <button className="Item-book" onClick={()=>onClickHandler(item)}>
        Book this flight
      </button>
      {children}
    </div>
  </div>
)
}
export default Item;