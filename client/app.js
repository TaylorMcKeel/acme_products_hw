import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Form from "./form";
import Products from "./products";

const app = document.querySelector("#app");
const API_URL = "http://localhost:3000/api";

const NavBar = ({ path, products }) => {
  return (
    <nav>
      <Link to="/home" className={path === "/home" ? "selected" : ""}>
        `Home`
      </Link>
      <Link to="/products" className={path === "/products" ? "selected" : ""}>
        `Products(${products.length})`
      </Link>
      <Link to="/form" className={path === "/form" ? "selected" : ""}>
        'New product'
      </Link>
    </nav>
  );
};

class Application extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get(`${API_URL}/products`).then((res) => {
      this.setState({ products: res.data });
    });
  }

  deleteProduct(product) {
    axios.delete(`${API_URL}/products/${product.id}`);
  }

  addProduct(product) {
    axios.post(`${API_URL}/products`, product);
  }

  render() {
    const { products } = this.state;
    const { deleteProduct, addProduct } = this;

    return (
      <Fragment>
        <NavBar products={products} path={location.pathname} />
        <HashRouter>
          <Switch>
            <Route exact path="/home" />
            <Route
              path="/products"
              render={() => {
                <Products products={products} deleteProduct={deleteProduct} />;
              }}
            />
            <Route
              path="/form"
              render={() => {
                <Form products={products} addProduct={addProduct} />;
              }}
            />
          </Switch>
        </HashRouter>
      </Fragment>
    );
  }
}

ReactDOM.render(<Application />, app, () => {
  console.log("success");
});
