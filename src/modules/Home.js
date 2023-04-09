import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Input from "../components/input";
import Heading from "../components/heading/input";
import { BsArrowDownLeftSquare } from "react-icons/bs";
import Box from "../components/box";
import logo from "../assets/img/logo 3.svg";
import DemoPie from "../components/chart";
import DemoColumn from "../components/columnChart";
import "../styles/style.css";
import Button from "../components/button";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className="headSection">
              {/* <img src={logo} className="img-fluid" width={100}/> */}
              <h2 className="text-center mainHeading">
                Financial Health Checkup
              </h2>
            </div>
          </Col>
        </Row>

        <Container>
          <Row>
            <Col md={7} sm={12} xs={12}>
              <Card>
                <Heading
                  heading="Basic Financial Inputs ($)"
                  icon=<BsArrowDownLeftSquare />
                />

                <Row>
                  <Col md={5}>
                    <Input label="Monthly Income" type="Number" />
                  </Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <Input label="Total Savings (Liquid Funds)" type="Number" />
                  </Col>
                </Row>
                <Row>
                  <Col md={5}>
                    <Input label="Monthly Expenses" type="Number" />
                  </Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <Input
                      label="Investments (401K, IRA, Stocks, Bonds)"
                      type="Number"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={5}>
                    <Input
                      label="Monthly Debt pmt (credit card, car etc)"
                      type="Number"
                    />
                  </Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <Input label="Total Debt (except mortgage)" type="Number" />
                  </Col>
                </Row>
                <Row>
                  <Col md={5}>
                    <Input
                      label="Housing / Rent, Tax, Inurance"
                      type="Number"
                    />
                  </Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <Input label="Mortgage Balance" type="Number" />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={5} sm={12} xs={12}>
              <Card>
                <Heading
                  heading="Your Financial Health Checkup"
                  component="BsArrowDownLeftSquare"
                ></Heading>
                <Box label="Debt / Income ratio" value="10%" />
                <Box label="Expense coverage ratio by savings" value="8.33" />
                <Box label="Assets / Liabilities" value="23%" />
                <Box label="Assets / (Rent + Debt) coverage" value="1667%" />
                <Box label="Housing cost ratio" value="20%" />
                <Box label="Slack in Budget" value="$2000" />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={7} sm={12} xs={12}>
              <div className="PieChart">
                <Heading
                  heading="Current Surplus"
                  icon=<BsArrowDownLeftSquare />
                />
                <div className="subBtn my-3">
                  <Button value="Monthly Expenses vs Savings" />
                </div>
                <DemoPie />
              </div>
            </Col>
            <Col md={5} sm={12} xs={12} className="my-5">
              <ul className="list">
                <li className="textRed">
                  You may have too much debt, which is considered risky to
                  lenders.
                </li>
                <li className="textRed">
                  You have less than 3 months of savings to cover your expenses
                  and debt obligations.
                </li>
                <li className="textGreen">You have a positive net worth.</li>
                <li className="textRed">
                  Your savings can be liquidated to cover months of payments. 6
                  months or more is a good sign.
                </li>
                <li className="textGreen">
                  Your housing cost is manageable to your income.
                </li>
              </ul>
              <h6 className="font-weight-bold mx-2">
                Your Networth is: <span className="textGreen"> $150,000</span>
              </h6>
            </Col>
            <Col md={12}>
              <div className="subBtn my-3">
                <Button value="Total Assets vs Liabilities" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <DemoColumn />
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={2} sm={4} xs={4} className="my-2">
              <Button value="Financial health checkup" />
            </Col>
            <Col md={2} sm={4} xs={4}  className="my-2">
              <Button value="Buying Home" />
            </Col>
            <Col md={2} sm={4} xs={4}  className="my-2">
              <Button value="Allocate Savings" />
            </Col>
            <Col md={2} sm={4} xs={4}  className="my-2">
              <Button value="Debt Management" />
            </Col>
            <Col md={2} sm={4} xs={4}  className="my-2">
              <Button value="Value Spending" />
            </Col>
            <Col md={2}  sm={4} xs={4}  className="my-2">
              <Button value="Saving for a Goal" />
            </Col>
          </Row>
        </Container>
        <Row>
          <Col md={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
