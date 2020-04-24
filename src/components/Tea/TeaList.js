import React from "react";
import TeaCard from "./TeaCard";

function TeaList(){

  const listStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  }

  return (
    <React.Fragment>
      <div style={listStyle}>
        {masterTeaList.map((tea, index) =>
          <TeaCard
            name={tea.name}
            type={tea.type}
            origin={tea.origin}
            flavor={tea.flavor}
            price={tea.price}
            amount={tea.amount}
            image={tea.image}
            key={index}/>
        )}
      </div>
      
    </React.Fragment>
  );
}

export default TeaList;