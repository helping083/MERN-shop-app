import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Product from '../../components/Product'
import products from '../../products';

const HomeScreen = props => {
  return (
    <>
      <h1>products works</h1>
      <Row>
        {products.map((product, index) => (
          <Col sm={6} md={6} xl={3} key={index} className='d-flex align-items-stretch'>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

HomeScreen.propTypes = {

}

export default HomeScreen
