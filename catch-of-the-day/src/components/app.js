import React from "react";
import Header from "./Header/Header";
import Order from "./Order/Order";
import Inventory from "./Inventory/Inventory";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <p>Hey!</p>
        <div className="menu">
          <Header tagline="test tagline"></Header>
        </div>
        <Inventory></Inventory>
        <Order></Order>
      </div>
    );
  }
}
export default App;
