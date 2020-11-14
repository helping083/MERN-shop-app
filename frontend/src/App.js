import React from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => (
  <>
    <Header />
    <main className="py-3">
      <Container id="app-container">
        <Route path="/cart/:id" component={CartScreen} />
        <Route path="/product/:id?" component={ProductScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} exact />
      </Container>
    </main>
    <Footer />
  </>
);

export default App;
