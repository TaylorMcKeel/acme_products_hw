const React = require("react");

class Form extends React.Component {
  state = {
    name: "Name",
    price: "Price",
  };

  render() {
    const { addProduct } = this.props;
    return (
      <div>
        <h2>Add a Product</h2>
        <form>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          ></input>
          <input
            type="text"
            value={this.state.price}
            onChange={(e) => {
              this.setState({ price: Number(eval.target.value) });
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addProduct({ name: this.state.name, price: this.state.price });
              this.setState({ name: "Name", price: "Price" });
            }}
          >
            Add Product
          </button>
        </form>
      </div>
    );
  }
}

module.exports = Form;
