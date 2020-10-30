import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>products works</h1>
      <Row>
        {products.map((product) => (
          <Col
            sm={6}
            md={6}
            xl={3}
            key={`product-${product._id}`}
            className="d-flex align-items-stretch"
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
