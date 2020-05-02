import React from 'react';
import propTypes from 'prop-types';

const detailStyle = {
  backgroundColor: "rgba(255,255,255,.5)",
  textAlign: "center",
};

function TeaDetails(props) {
  const {tea} = props;
  return (
    <React.Fragment>
      <div style={detailStyle}>
        <h1>Tea Details</h1>
        <img className="imageStyle" alt={tea.name} src={tea.image} />
        <p><strong>{tea.name}</strong></p>
        <p>ID: {tea.id}</p>
        <p>Category: {tea.category}</p>
        <p>Origin: {tea.origin}</p>
        <p>Flavor Description: {tea.flavor}</p>
        <p>Price: ${tea.price}</p>
        <p>Amount of tins in stock: {tea.amount}</p>
      </div>
      
    </React.Fragment>
  );
}
TeaDetails.propTypes = {
  tea: propTypes.object
};

export default TeaDetails;