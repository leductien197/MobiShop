import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./layout/header";
import Menu from "./layout/menu";
import Slide from "./layout/slide";
import Product from "./product";
import Sitebar from "./layout/sitebar";
import Footer from "./layout/footer";
import Detail from "./detail"
import Search from "./search";
import Category from "./category";
import Cart from "./cart"

export default function AppContainer() {
  return (
    <Router>
      <Header />
      <div id="body">
        <div className="container">
          <Menu />
          <div className="row">
            <div id="main" className="col-lg-8 col-md-12 col-sm-12">
              <Slide />
              <Switch>
                <Route exact path="/" component={Product} />
                <Route path="/product/:productId" component={Detail} />
                <Route path="/category/:categoryId" component={Category} />
                <Route path="/search" component={Search} />
                <Route path="/cart" component={Cart} />
              </Switch>
            </div>
            <Sitebar />
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
