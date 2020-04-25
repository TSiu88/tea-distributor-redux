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

  const stockOutMessage = "Out of stock"
  const stockRunningOut = `Almost out! Amount Remaining in Stock: ${props.amount}`;
  const inStock = `Amount Remaining in Stock: ${props.amount}`;

  const stockMessage = () => {
    if (props.amount <=0){
      return stockOutMessage;
    } else if (props.amount <=10){
      return stockRunningOut;
    } else {
      return inStock;
    }
  };

  return (
    <React.Fragment>
      <div className="card" style={cardStyle}>
        <div className="card-info" onClick={() => props.whenClicked(props.id)}>
          <img className="card-image" alt="Tea" style={imageStyle} src={props.image} />
          <h3><strong>{props.name}</strong></h3>
          <p>Type: {props.type}</p>
          <p>Place of Origin: {props.origin}</p>
          <p>Flavor Description: {props.flavor}</p>
          <p>Price: ${props.price}</p>
        </div>
        <div className="card-amount">
          <p>{stockMessage()}</p>
          <div>
            <button className="btn btn-secondary" onClick={() => props.whenQuantityChanged(props.id)}>Sell Tin</button>
          </div>
           
        </div>
        
      </div>
    </React.Fragment>
  );
}

TeaCard.propTypes = {
  whenQuantityChanged: PropTypes.func,
  whenClicked: PropTypes.func,
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