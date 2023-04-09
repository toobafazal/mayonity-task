import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiFacebook } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer">
        <Row>
          <Col md={3}>
            <div>
              <ul className="d-flex justify-content-around">
                <li>About</li>
                <li>Contact</li>
                <li>Buttons</li>
              </ul>
            </div>
          </Col>
          <Col md={6} className="text-center my-2">
            <h6>
              {" "}
              <FaRegCopyright /> All rights Reserved
            </h6>
            <span>Developed by Mayonity</span>
          </Col>
          <Col md={3} className="d-flex justify-content-around">
            <div className="socialIcon">
              <FiFacebook />
            </div>
            <div className="socialIcon">
              <FaLinkedinIn />
            </div>
            <div className="socialIcon">
              <FaTwitter />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
