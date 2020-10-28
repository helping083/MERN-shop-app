import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types'

const Product = ({product}) => {
  const {_id, image, name, rating, numReviews, price} = product;
  return (
    <Card className = 'my-3 py-3 rounded'>
      <a href={`/product/${_id}`}>
        <Card.Img src={image} variant='top'/>
      </a>
      <Card.Body>
        <a href={`/product/${_id}`}>
          <Card.Title as='div'>
            <strong>{name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <div className='my-3'>
            {rating} from {numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as='h3'>
          ${price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product
