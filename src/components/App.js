import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import TeaControl from "./Tea/TeaControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <hr/>
      <div className="container-fluid">
        <TeaControl />
      </div>
      
      <Footer />
    </React.Fragment>
  );
}

export default App;
