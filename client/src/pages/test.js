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
import Image from 'react-bootstrap/Image'

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
                    <Row className="t d-flex justify-content-center">
                        <Col md='10' lg={5} className='order-2 order-lg-1 align-items-center color c1'>
                            <h3 className="fw-bold mb-5 mt-4"> Sign Up </h3>
                            <Row className="d-flex justify-content-center mb-4">
                                
                                <div className='ctr'>
                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <i class="fas fa-user me-3 fa-lg"></i>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Name"
                                                className="mb-3">
                                                    <Form.Control type="password" placeholder="name@example.com" />
                                            </FloatingLabel>
                                        </Col>
                                    </div>
                                </div>

                                <div className='ctr'>
                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <i class="fas fa-user me-3 fa-lg"></i>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Email"
                                                className="mb-3">
                                                    <Form.Control type="password" placeholder="name@example.com" />
                                            </FloatingLabel>
                                        </Col>
                                    </div>
                                </div>

                                <div className='ctr'>
                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <i class="fas fa-user me-3 fa-lg"></i>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Mobile Number"
                                                className="mb-3">
                                                    <Form.Control type="password" placeholder="name@example.com" />
                                            </FloatingLabel>
                                        </Col>
                                    </div>
                                </div>

                                <div className='ctr'>
                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <i class="fas fa-user me-3 fa-lg"></i>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Password"
                                                className="mb-3">
                                                    <Form.Control type="password" placeholder="name@example.com" />
                                            </FloatingLabel>
                                        </Col>
                                    </div>
                                </div>

                                <div className='ctr'>
                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <i class="fas fa-user me-3 fa-lg"></i>
                                        <Col>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Confirm Password"
                                                className="mb-3">
                                                    <Form.Control type="password" placeholder="name@example.com" />
                                            </FloatingLabel>
                                        </Col>
                                    </div>
                                </div>
                                
                                <div className='ctr'>
                                    <div className="align-items-center mb-4 ">
                                        <Button variant="primary" type="submit">
                                            <Col>
                                            Submit
                                            </Col>
                                        </Button>
                                    </div>
                                </div>

                            </Row>
                        </Col>
                        <Col md='10' lg={5} className='order-1 order-lg-2 d-flex align-items-center pic c2'>
                            <Image  fluid src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp">
                            </Image>
                        </Col>
                        
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    // </div>
    );
  }
  
  export default Register1;