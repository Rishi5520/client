import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import {Button, Form, Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import swal from 'sweetalert';

const Login = () => {
  const navigate = useNavigate();
    const [user, setUser] = useState({
        email:"", password:""
    });
    
    let name, value;

    const handleInputs = (event)=>{
            console.log(event);
            name = event.target.name;
            value = event.target.value;

            setUser({...user,[name]:value})
    }

    const PostData = async (event) =>{
            event.preventDefault();
            const {email, password } = user;

           const  response  = await fetch("/login",{
                method:"POST",
                headers:{
                    "Content-Type" :"application/json"
                },
                body:JSON.stringify({
                     email, password 
                })
           });
          const data = await response.json();

          if(response.status === 422 || !data){
            swal("Invaild Ragistration");
            console.log("Invaild Ragistration");
          }else{
            swal("User Login Sucessfully");
            console.log("User Login Sucessfully");

            navigate("/")

          }
    }

  
  
  return (
    <Container>
      <h1 >Login</h1>
      <Form method="POST" className="mb-3">
     
      <Form.Group className='mb-3'>
      <Form.Label>Email address</Form.Label>
        <input
          type="email"
          name="email"
          placeholder="Email address" id='email' autoComplete='off'
          value={user.email}
          onChange={handleInputs}
          
        />
        
        </Form.Group>
        <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <input
          type="password"
          name="password"
          placeholder="Password" id='password' autoComplete='off'
          value={user.password}
          onChange={handleInputs}
        />
        </Form.Group>
  
        <Button variant="outline-primary" type="submit" onClick ={PostData}>Login</Button>
      </Form>
    </Container>
  )
}

export default Login