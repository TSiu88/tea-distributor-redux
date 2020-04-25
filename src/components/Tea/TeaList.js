import React from "react";
import TeaCard from "./TeaCard";
import PropTypes from "prop-types";

function TeaList(props){

  const listStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  }

  return (
    <React.Fragment>
      <div style={listStyle}>
        {props.teaList.map((tea) => (
        <TeaCard 
          whenQuantityChanged={props.onQuantityChanged}
          name = {tea.name}
          type={tea.type}
          origin={tea.origin}
          flavor={tea.flavor}
          price={tea.price}
          amount={tea.amount}
          image={tea.image}
          id={tea.id} />
        ))}
      </div>
      
    </React.Fragment>
  );
}
TeaList.propTypes = {
  teaList: PropTypes.array,
  onQuantityChanged: PropTypes.func,
};
export default TeaList;