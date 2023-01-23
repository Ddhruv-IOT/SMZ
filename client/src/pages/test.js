import axios from 'axios';
import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
     
    <Container>
      <Row>
        <Col lg={2} md={5}>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  
        
    );
  }
  
  export default Register1;