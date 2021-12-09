import React, { Component, useImperativeHandle, useRef, useState } from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [List, setList] = useState([]);
  const [role, setRole] = useState("");
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const history = useHistory();
  
  const handleChange1 = () => {
      setChecked1(!checked1);
      if (checked2 === true) {
        setChecked2(false); 
      }
      if (checked1 === false)
        setRole("teacher");
  };

   const handleChange2 = () => {
      setChecked2(!checked2);
      if (checked1 === true)
        setChecked1(false);
      if(checked2 === false)
        setRole("student");
   };

  const handleSubmit = (e) => {
    var verify = true;
    const user = {
      "name": name,
      "email": email,
      "username": username,
      "password": password,
      "role": role,
    };

    if(name == ''){
      verify = false;
    }

    if(email == ''){
      verify = false;
    }

    if(username == ''){
      verify = false;
    }

    if(password == ''){
      verify = false;
    }

    if(role == ""){
      verify = false;
    }

    if(verify == true) {
      history.push("/login");
    }
    
  axios.post("http://localhost:8081/user", user).then((response) => console.log(response));
  
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="m-auto p-5">
            <div className="LoginBox p-5">
              <Form>
                <h1 className="text-center mt-2 p-5">Signup</h1>
                <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
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
                </Form.Group> <br />
                <label>
                  <input
                    type="checkbox"
                    checked={checked1}
                    onChange={handleChange1}
                  />
                  Teacher account
                </label><br />
                <label>
                  <input
                    type="checkbox"
                    checked={checked2}
                    onChange={handleChange2}
                  />
                  Student account
                </label>
                <Button
                  className="w-100 text-center mt-4"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
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
