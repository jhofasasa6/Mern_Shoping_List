import React, { Component } from "react";
import AppNavbar from "./componnets/AppNavbar";
import ShoppingList from "./componnets/ShoppingList";
import ItemAddShopping from "./componnets/ItemAddShopping";
import { Provider } from "react-redux";
import store from "./store";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container>
            <AppNavbar />
            <ItemAddShopping />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
