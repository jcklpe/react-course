import React from "react";
import Header from "./Header/Header";
import Order from "./Order/Order";
import Inventory from "./Inventory/Inventory";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // add our new fish to the fishes
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({ fishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <p>Hey!</p>
        <div className="menu">
          <Header tagline="test tagline"></Header>
        </div>
        <Inventory addFish={this.addFish}></Inventory>
        <Order></Order>
      </div>
    );
  }
}
export default App;
