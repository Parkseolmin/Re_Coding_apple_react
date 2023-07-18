// ProductItem.js

import React from "react";
import { Col } from "react-bootstrap";

const ProductItem = ({ product }) => {
  return (
    <Col md={4}>
      <img
        src={`${process.env.PUBLIC_URL}/img/${product.image}`}
        alt="상품"
        style={{ width: "100%" }}
      />
      <h4>{product.title}</h4>
      <p>{product.content}</p>
    </Col>
  );
};

export default ProductItem;
