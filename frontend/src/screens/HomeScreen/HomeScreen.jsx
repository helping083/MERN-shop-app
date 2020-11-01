import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../../actions/productActions";
import Product from "../../components/Product";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const renderPageContent = () => (
    <>
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

  return (
    <>
      <h1>products works</h1>
      {loading ? (
        <h1>spinner...</h1>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        renderPageContent()
      )}
    </>
  );
};

export default HomeScreen;
