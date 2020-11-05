import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import { addToCart } from "../../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = () => {

  };

  const renderCartScreenItems = () => (
    <ListGroup variant="flush">
      {cartItems.map((item) => (
        <ListGroup.Item key={item.product}>
          <Row>
            <Col md={2}>
              <Image src={item.image} alt={item.name} fluid rounded />
            </Col>
            <Col md={3}>
              <Link to={`/product/${item.product}`}>{item.name}</Link>
            </Col>
            <Col md={2}>${item.price}</Col>
            <Col md={2}>
              <Form.Control
                as="select"
                value={qty}
                onChange={(e) =>
                  dispatch(addToCart(item.product, Number(e.target.value)))
                }
              >
                {[...Array(item.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  return (
    <Row>
      <Col md={8}>
        <h1>shopping cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            your cart is empty
            <Link to="/back">go back</Link>
          </Message>
        ) : (
          renderCartScreenItems()
        )}
      </Col>
      <Col md={2}>
        <Button type="button"></Button>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
};

CartScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),

  location: PropTypes.shape({
    search: PropTypes.string,
  }),

  history: PropTypes.shape({}),
};

export default CartScreen;
