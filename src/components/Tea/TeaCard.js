import React from "react";
import PropTypes from "prop-types";

function TeaCard(props){

  const imageStyle = {
    maxWidth: 200,
  };

  const cardStyle = {
    minWidth: 220,
    padding: 10,
  };

  return (
    <React.Fragment>
      <div className="card" style={cardStyle}>
        <div className="card-info">
          <img className="card-image" alt="Tea" style={imageStyle} src={props.image} />
          <h3><strong>{props.name}</strong></h3>
          <p>Type: {props.type}</p>
          <p>Place of Origin: {props.origin}</p>
          <p>Flavor: {props.flavor}</p>
          <p>Price: ${props.price}</p>
        </div>
        <div className="card-amount">
          <p>Amount Remaining: {props.amount}</p>
          <button className="btn btn-secondary" onClick={() => props.whenQuantityChanged(props.id)}>Sell Tin</button> 
        </div>
        
      </div>
    </React.Fragment>
  );
}

TeaCard.propTypes = {
  whenQuantityChanged: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  origin: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
};

export default TeaCard;