import axios from 'axios';
import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Register() {

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
     
        <MDBContainer fluid align-items='center'>
<h1 align="center"> Register </h1>
        <form align="center"> 
          <input type="text" placeholder="Name" value={studentDetails.name} onChange={(event) => {setDetails({...studentDetails, name: event.target.value})}} required/>
          <br/>
          <input type="email" placeholder="email" value={studentDetails.email} onChange={(event) => {setDetails({...studentDetails, email: event.target.value})}} required/> 
          <br/>
          <input type="password" placeholder="secret words" value={studentDetails.password} onChange={(event) => {setDetails({...studentDetails, password: event.target.value})}} required/>
          <br/>
          <input type="submit" onClick={registerStudent}/>
        </form>
<MDBCard className='text-black m-2' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='form2' type='email'/>
        </div>

        
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='form2' type='email'/>
        </div>

        
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='form2' type='email'/>
        </div>

        
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='form2' type='email'/>
        </div>

        
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='form2' type='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Password' id='form3' type='password'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Repeat your password' id='form4' type='password'/>
        </div>

        <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div>

        <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
      <MDBRow>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
        <p align="center">hi</p>
      </MDBRow>      
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
    );
  }
  
  export default Register;