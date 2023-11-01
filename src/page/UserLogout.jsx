import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom';

const UserLogout = () => {

    const navigate = useNavigate();
  useEffect(() => {
    fetch('/Logout',{
        method: "GET",
        headers:{
              Accept:"application/json",
              "Content-Type": "application/json"
        },
            Credentials:"include " 
      }).then((response)=>{
            navigate("/Login",{
              replace: true,
            });
            if(response.status !== 200){
              const error = new Error(response.error);
              throw error;
            }
      }).catch((error) => {
          console.log(error);
      })
  });
  
  return (
    <div>UserLogout</div>
  )
}

export default UserLogout