import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Rating from "../Rating";

const Product = ({ product }) => {
  const { _id, image, name, rating, numReviews, price } = product;
  return (
    <Card className="my-3 py-3 rounded">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Link to={`/product/${_id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div" className="my-3">
          <Rating value={rating} text={`${numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.objectOf(PropTypes.object),
};

export default Product;
