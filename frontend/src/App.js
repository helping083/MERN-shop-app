import React from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => (
  <>
    <Header />
    <main className="py-3">
      <Container id="app-container">
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
      </Container>
    </main>
    <Footer />
  </>
);

export default App;
