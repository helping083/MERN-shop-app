import React from "react"
import { Row, Col } from "react-bootstrap"
import Product from "../../components/Product"
import products from "../../products"

const HomeScreen = () => (
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
)

export default HomeScreen
