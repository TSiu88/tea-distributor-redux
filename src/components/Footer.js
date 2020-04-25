import React from "react";

function Footer(){
  const footerStyle = {
    textAlign: "center",
    backgroundColor: "lightgrey",
    left: 0,
    bottom: 0,
    width: "100%",
  }

  const footerText = {
    marginBottom: 5,
  }

  return (
    <React.Fragment>
      <div style={footerStyle}>
        <p>The Tea-riffic Tea House</p>
        <p style={footerText}>123 Hot Water Lane, Steep, WA 98XXX</p>
      </div>
    </React.Fragment>
    
  );
}

export default Footer;