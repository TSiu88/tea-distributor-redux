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
      <TeaControl />
      <Footer />
    </React.Fragment>
  );
}

export default App;
