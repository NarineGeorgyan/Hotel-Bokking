import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div className="h3"> Create Count!</div>
          <p className="mt-4">
            lorem1dcnl nsdebdsebdbcsbcj djck jdencdlkncl ndsde jnddjdj djssjjn
            odx;sd
          </p>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign up
            </Button>
            <p className="mt-4">
              <small className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                sunt, eum perferendis, accusantium nihil eveniet consequatur
                quis impedit dolorem aut
              </small>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
