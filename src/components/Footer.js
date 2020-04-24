import React from "react";

function Footer(){
  const footerStyle = {
    textAlign: "center",
    backgroundColor: "lightgrey",
  }

  return (
    <React.Fragment>
      <div style={footerStyle}>
        <h3>The Tea-riffic Tea House</h3>
        <h5>123 Hot Water Lane, Steep, WA 98XXX</h5>
      </div>
    </React.Fragment>
    
  );
}

export default Footer;