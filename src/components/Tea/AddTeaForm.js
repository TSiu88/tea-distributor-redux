import React from "react";
import propTypes from "prop-types";

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
    })
  }

  return (
    <React.Fragment>
      <form onSubmit= {handleFormSubmission}>
        <div className="form-group">
          <label htmlFor="name">
            Name:
            <input
              className="form-control"
              name="text"
              name="name"
              placeholder="Jasmine, Matcha..." 
              required/>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="type">
            Type:
            <input
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
              className="form-control"
              type="text"
              name="origin"
              placeholder="China, India, Japan..." />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="flavor">
            Flavor:
            <input
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
              className="form-control"
              type="number"
              name="price"
              placeholder="Price for a small tin of tea in dollars..."
              required />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="amount">
            Stock:
            <input
              className="form-control"
              type="number"
              name="amount"
              placeholder="Number of tins of tea in stock..." 
              required />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="image">
            Image URL:
            <input
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