import React from "react";

function TeaCard(props){
  
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-info">
          <img src={props.image} />
          <h3><strong>{props.name}</strong></h3>
          <p>Type: {props.type}</p>
          <p>Place of Origin: {props.origin}</p>
          <p>Flavor: {props.flavor}</p>
          <p>Price: {props.price}</p>
        </div>
        <div className="card-amount">
          <p>Amount Remaining: {props.amount}</p>
          <button className="btn btn-secondary">Sell Tin</button> 
        </div>
        
      </div>
      
      <hr/>
    </React.Fragment>
  );
}

export default TeaCard;