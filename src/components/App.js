import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import TeaList from "./Tea/TeaList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <hr/>
      <TeaList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
