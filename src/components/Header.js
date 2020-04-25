import React from "react";

function Header(){

  const headerStyle = {
    textAlign: "center",
    fontFamily: "'Dancing Script', cursive",
  };

  return (
    <React.Fragment>
      <div style={headerStyle}>
        <h1>A Tea-riffic Tea Distributor</h1>
        <h3>Providing exotic teas from around the world!</h3>
      </div>  
    </React.Fragment>
    
  );
}

export default Header;