import React from "react";
import { getFunName } from "../../helpers";
class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = event => {
    // stop form submission
    event.preventDefault();

    // get the text from input
    const storeName = this.myInput.current.value;

    // change page to what they entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>

        <input
          type="test"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        ></input>
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
