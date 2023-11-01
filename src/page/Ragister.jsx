import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import swal from 'sweetalert';
const Ragister = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username:"",email:"", password:""
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
            const { username, email, password } = user;

           const  response  = await fetch("/signup",{
                method:"POST",
                headers:{
                    "Content-Type" :"application/json"
                },
                body:JSON.stringify({
                    username, email, password 
                })
           });
          const data = await response.json();

          if(response.status === 422 || !data){
            swal("Invaild Ragistration");
            console.log("Invaild Ragistration");
          }else{
            swal("User Ragistration Sucessfully");
            console.log("User Ragistration Sucessfully");
          
            navigate("/")
          }
          
    }
    

  return (
    <Container>
      <h1 >Ragister-Form</h1>
      <Form method='POST'>
    
        <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <input
          type="username"
          name="username"
          placeholder="Enter Username" id='username' autoComplete='off'
          value={user.username}
          onChange={handleInputs}
        />
        </Form.Group>
        <Form.Group className='mb-3'>
        <Form.Label>Email ID</Form.Label>
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
        <Button variant="outline-primary"  type="submit" onClick={PostData}>Ragister</Button>
      </Form>
    </Container>
  )
}

export default Ragister