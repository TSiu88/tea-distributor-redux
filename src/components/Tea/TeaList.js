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
        {Object.values(props.teaList).map((tea) => {
          return <TeaCard 
            whenQuantityChanged={props.onQuantityChanged}
            whenClicked={props.onTeaSelection}
            name = {tea.name}
            category={tea.category}
            origin={tea.origin}
            flavor={tea.flavor}
            price={tea.price}
            amount={tea.amount}
            image={tea.image}
            id={tea.id}
            key={tea.id} />
          })}
      </div>
    </React.Fragment>
  );
}
TeaList.propTypes = {
  teaList: PropTypes.object,
  onQuantityChanged: PropTypes.func,
  onTeaSelection: PropTypes.func,
};
export default TeaList;