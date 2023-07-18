import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "./data";
import SliderComponent from "./component/SliderComponent";
import Navbar from "./component/Navbar";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailPage from "./component/DetailPage";
import "./App.css";

function App() {
  let [product] = useState(data);

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* 라우터 */}
      <Routes>
        <Route
          // 메인페이지
          path="/"
          element={
            <>
              {/* Navbar */}
              <Navbar />
              {/* SliderComponent */}
              <SliderComponent />
              {/* content */}
              <Container className="content__perfume">
                <Row>
                  {product.map((item, index) => (
                    <Card key={index} product={item} i={index + 1} />
                  ))}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail/:id" element={<DetailPage product={product} />} />

        <Route path="*" element={<div>없는 페이지요</div>} />
        <Route path="/about/member" element={<About />} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
    </div>
  );
}

function Card(props) {
  return (
    <Col md={4}>
      <img
        src={"../img/product" + props.i + ".jpg"}
        alt="상품"
        style={{ width: "100%" }}
      />
      <h4>{props.product.title}</h4>
      <p>{props.product.content}</p>
    </Col>
  );
}

export default App;
