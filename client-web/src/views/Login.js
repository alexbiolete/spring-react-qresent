import React, { Component, useRef, useState, useImperativeHandle } from "react";
import { Form, Button, Card, Col, Row, Container } from "react-bootstrap";
import "../asset/Style.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
        "username": username,
        "password": password,
      };
    axios.post("http://localhost:8081/user/login", user)
     .then(response => {
        if(response.data.role == "student")
          history.push("/student/dashboard");
        
        if(response.data.role == "teacher")
          history.push("/professor/dashboard");
        
        if(response.data.role == "admin")
          history.push("/admin/dashboard");
          
        if(response.data.username == "" && response.data.password == "")
          history.push("/login");
      })
     .catch((response) => {
        history.push("/signup");
      });
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="m-auto p-5">
            <div className="LoginBox p-5">
              <Form>
                <h1 className="text-center mt-2 p-5">Login</h1>
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
                </Form.Group>{" "}
                <br />
                <a className="m-auto mt-6 p-1" href="/signup">
                  Don't have an account? Signup
                </a>
                <Button
                  className="w-100 text-center mt-4"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
