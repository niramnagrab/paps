import React from "react";
import Header from "./component/layout/Header";
import Home from "./component/Home";
import Footer from "./component/layout/Footer";

function App() {
  return (
    <div className="App">
      <div className="headContainer">
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
