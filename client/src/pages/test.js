import axios from 'axios';
import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./test.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { ArrowRight } from 'react-bootstrap-icons';
import InputGroup from 'react-bootstrap/InputGroup';

function Register1() {

  const navigate = useNavigate();
    const[studentDetails, setDetails] = useState({
      name: '',
      email: '',
      password: ''
    })
  
    async function registerStudent(event) {
      event.preventDefault();
      const {data: res} = await axios.post("http://localhost:5000/register", studentDetails);
      navigate("/login", {replace: true})
    }
  
    return (
    //  <div style={{background:'red', height:"100vh", alignItems:'center', justifyContent:'center', alignContent:'center'}}>
        <Container fluid style={{display:'flex',height:'auto', alignItems:'center', justifyContent:'center', padding:"20px", background:'skyblue', justifyItems: 'center'}}  className="center">
            <Card style={{ width: '90vw', borderRadius:"25px", alignSelf: 'center',justifySelf:'center', padding:'35px 10px'}} className="text-center">
                <Card.Body>
                    <Row className="d-flex justify-content-center">
                        <Col lg={2} md={5} className="color">
                            <h3 className="fw-bold mb-5 mt-4"> Sign Up </h3>
                            <Row className="d-flex justify-content-center mb-4">
                                <div className='ctr'>
                                    <Col md>
                                         <Form.Floating className="mb-3">
                                            <Form.Control
                                            id="floatingInputCustom"
                                            type="email"
                                            placeholder="name@example.com"
                                            />
                                            <label htmlFor="floatingInputCustom">Email address</label>
                                        </Form.Floating>
                                       
                                    </Col>

                                    <Col md>
                                     <FloatingLabel
                                            controlId="floatingInput"
                                            label="Password"
                                            className="mb-3">
                                                <Form.Control type="password" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>

                                    <Col md>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Your Email"
                                            className="mb-3">
                                                <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>

                                    <Col md>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Your Email"
                                            className="mb-3">
                                                <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>

                                    <Col md>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Your Email"
                                            className="mb-3">
                                                <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>

                                    <Col md>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Your Email"
                                            className="mb-3">
                                                <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>

                                    <Col md>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Your Email"
                                            className="mb-3">
                                                <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>

                                    <Col md>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Your Email"
                                            className="mb-3">
                                                <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>

                                    <Col md>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Your Email"
                                            className="mb-3">
                                                <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>

                                </div>
                            </Row>
                        </Col>
                        <Col>2 of 2</Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    // </div>
    );
  }
  
  export default Register1;