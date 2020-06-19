const React = require("react");

class Products extends React.Component {
  render() {
    const { products, deleteProduct } = this.props;

    return (
      <div>
        <h2>Products</h2>
        <ul className="productList">
          {products
            .map((prod) => {
              return (
                <div className="prodBox" key={prod.id}>
                  <li key={prod.id} className="prod">
                    {`${prod.name}, price:${prod.price}`}
                  </li>
                  <button
                    key={prod.id}
                    onCLick={(e) => {
                      e.preventDefault();
                      deleteProduct(prod);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })
            .join("")}
        </ul>
      </div>
    );
  }
}

module.exports = Products;
