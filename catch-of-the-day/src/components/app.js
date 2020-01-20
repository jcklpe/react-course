import React from "react";
import Header from "./Header/Header";
import Order from "./Order/Order";
import Inventory from "./Inventory/Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish/Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // add our new fish to the fishes
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({ fishes });
  };

  updateFish = (key, updatedFish) => {
    //take a copy of the current state
    const fishes = { ...this.state.fishes };
    // update that state
    fishes[key] = updatedFish;
    // set to state
    this.setState({ fishes });
  };

  deleteFish = key => {
    // take a copy of state
    const fishes = { ...this.state.fishes };
    // update the state
    fishes[key] = null;
    //upate state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // take a copy of state
    const order = { ...this.state.order };
    // either add to the order, or update the number in our order
    order[key] = order.fish1 + 1 || 1;
    // call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <p>Hey!</p>
        <div className="menu">
          <Header tagline="test tagline"></Header>
          <ul>
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        ></Inventory>
        <Order fishes={this.state.fishes} order={this.state.order}></Order>
      </div>
    );
  }
}
export default App;
