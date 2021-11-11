import React, { Component, useImperativeHandle, useRef, useState } from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const user = {
      email: email,
      username: username,
      password: password,
    };

    axios.post("http://localhost:3000/users/all", user).then((response) => console.log(user));
    //console.log(user)
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="m-auto p-5">
            <div className="LoginBox p-5">
              <Form>
                <h1 className="text-center mt-2 p-5">Signup</h1>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group id="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button
                  className="w-100 text-center mt-4"
                  type="submit"
                  href="/login"
                  onClick={() => handleSubmit()}
                >
                  Signup
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
