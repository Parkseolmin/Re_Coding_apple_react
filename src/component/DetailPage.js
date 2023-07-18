import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

function DetailPage(props) {
  let { id } = useParams();
  console.log(id);

  // id 값을 기반으로 해당 상품을 찾기
  let product = props.product.find((item) => item.id === parseInt(id));

  return (
    <>
      <Container>
        <Row
          style={{
            textAlign: "center",
            // transform: "translate(0,50%)",
          }}
        >
          <Col md={8}>
            <img src={product.img} width={"100%"} alt="상품" />
          </Col>
          <Col md={4}>
            <Box>
              <YellowBtn>ㄴㅇㄴ</YellowBtn>
            </Box>
            <YellowBtn>ㄴㅇㄴ</YellowBtn>
            <h4 className="pt-5">{product.title}</h4>
            <p>{product.content}</p>
            <p>{product.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DetailPage;
