import React from "react";
import propTypes from "prop-types";
import { v4 } from "uuid";

const formStyle = {
  width: 300,
}

function AddTeaForm(props){

  function handleFormSubmission(event){
    event.preventDefault();
    props.onAddTea({
      name: event.target.name.value,
      type: event.target.type.value,
      origin: event.target.origin.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      amount: event.target.amount.value,
      image: event.target.image.value,
      id: v4(),
    })
  }

  return (
    <React.Fragment>
      <form onSubmit= {handleFormSubmission}>
        <div className="form-group">
          <label htmlFor="name">
            Name:
            <input
              style={formStyle}
              className="form-control"
              type="text"
              name="name"
              placeholder="Jasmine, Matcha..." 
              required/>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="type">
            Type:
            <input
              style={formStyle}
              className="form-control"
              type="text"
              name="type"
              placeholder="Black, Green, White..." />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="origin">
            Origin:
            <input
              style={formStyle}
              className="form-control"
              type="text"
              name="origin"
              placeholder="China, India, Japan..." />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="flavor">
            Flavor:
            <textarea
              style={formStyle}
              className="form-control"
              type="text"
              name="flavor"
              placeholder="Smooth tea with sweet undertones..." />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="price">
            Price:
            <input
              style={formStyle}
              className="form-control"
              type="number"
              name="price"
              min= {0}
              step={0.01}
              placeholder="Price for a small tin of tea in dollars..."
              required />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="amount">
            Amount in Stock:
            <input
              style={formStyle}
              className="form-control"
              type="number"
              name="amount"
              min= {0}
              placeholder="Number of tins of tea in stock..." 
              required />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="image">
            Image URL:
            <input
              style={formStyle}
              className="form-control"
              type="text"
              name="image"
              placeholder="Smooth tea with sweet undertones..." />
          </label>
        </div>
        <button className="btn btn-light" type="submit">Add </button>
      </form>
    </React.Fragment>
  );
}

AddTeaForm.propTypes = {
  onAddTea: propTypes.func,
};

export default AddTeaForm;